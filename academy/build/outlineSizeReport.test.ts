// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { randomBytes } from 'node:crypto';
import { spawnSync } from 'node:child_process';

describe('per-course outline size reporting', () => {
  it('accepts separate small outlines and rejects a later oversized outline', () => {
    const root = mkdtempSync(join(tmpdir(), 'wqt-outline-size-'));
    try {
      mkdirSync(join(root, 'build'));
      mkdirSync(join(root, 'dist', 'assets'), { recursive: true });
      const report = join(root, 'build', 'measure-bundle.mjs');
      writeFileSync(report, readFileSync(join(process.cwd(), 'build', 'measure-bundle.mjs')));
      writeFileSync(join(root, 'dist', 'sw.js'), 'const SW_PRECACHE = [];');
      writeFileSync(join(root, 'dist', 'assets', 'index-test.js'), 'export default 1;');
      writeFileSync(join(root, 'dist', 'assets', 'course-outline-a.js'), 'export default [];');
      const laterOutline = join(root, 'dist', 'assets', 'course-outline-z.js');
      writeFileSync(laterOutline, 'export default [];');
      const run = () => spawnSync(process.execPath, [report], { encoding: 'utf8' });
      const small = run();
      expect(small.status, small.stderr).toBe(0);
      expect(small.stdout).toContain('Gliederungen: 2 Dateien');
      // Incompressible fixture ensures the gzip threshold is genuinely exceeded.
      writeFileSync(laterOutline, randomBytes(160 * 1024).toString('base64'));
      const oversized = run();
      expect(oversized.status).toBe(1);
      expect(oversized.stderr).toContain('course-outline-z.js');
      expect(oversized.stderr).toContain('> 120 kB');
      expect(oversized.stderr).not.toContain('course-outline-a.js');
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});
