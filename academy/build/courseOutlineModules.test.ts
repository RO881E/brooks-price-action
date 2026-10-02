// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { COURSE_OUTLINE_ID, courseOutlineModules } from './courseOutlinePlugin.ts';
import { toCourseOutline } from './courseOutline.ts';
import { runnerImport } from 'vite';
import { join } from 'node:path';
import type { Course } from '../src/content/types.ts';

const { module: { baseCourses, testCourses } } = await runnerImport<{ baseCourses: Course[]; testCourses: Course[] }>(
  join(process.cwd(), 'src/content/allCourses.ts'), { configFile: false, logLevel: 'error' },
);

function assemble(courses: typeof baseCourses) {
  const modules = courseOutlineModules(courses);
  const root = modules.get(COURSE_OUTLINE_ID)!;
  const values: unknown[] = [];
  const body = root.replace(/import (course\d+) from ("[^"]+");/g, (_, variable: string, encodedId: string) => {
    const id = JSON.parse(encodedId) as string;
    const code = modules.get(id)!;
    expect(code).toBeDefined();
    const data = new Function(code.replace('export default ', 'return '))();
    values.push(data);
    return `const ${variable} = values[${values.length - 1}];`;
  }).replace('export default ', 'return ');
  return { modules, restored: new Function('values', body)(values) };
}

describe('per-course outline modules', () => {
  it('assembles the exact synchronous production catalog in registry order', () => {
    const { modules, restored } = assemble(baseCourses);
    expect(restored).toEqual(JSON.parse(JSON.stringify(baseCourses.map(toCourseOutline))));
    expect(modules.size).toBe(baseCourses.length + 1);
    expect(modules.has(`${COURSE_OUTLINE_ID}/test-course`)).toBe(false);
    expect(modules.get(COURSE_OUTLINE_ID)).not.toContain('JSON.parse');
  });
  it('includes test courses only when supplied for the browser-test mode', () => {
    const courses = [...baseCourses, ...testCourses];
    const { modules, restored } = assemble(courses);
    expect(restored).toEqual(JSON.parse(JSON.stringify(courses.map(toCourseOutline))));
    expect(modules.has(`${COURSE_OUTLINE_ID}/test-course`)).toBe(true);
    expect(assemble([]).restored).toEqual([]);
  });
  it('keeps unchanged course modules identical when another course grows', () => {
    const before = courseOutlineModules(baseCourses);
    const changed = baseCourses.map((course, index) => index === 2 ? { ...course, subtitle: 'Updated independent outline' } : course);
    const after = courseOutlineModules(changed);
    for (const course of baseCourses.slice(0, 2)) expect(after.get(`${COURSE_OUTLINE_ID}/${course.id}`)).toBe(before.get(`${COURSE_OUTLINE_ID}/${course.id}`));
    expect(after.get(`${COURSE_OUTLINE_ID}/${baseCourses[2].id}`)).not.toBe(before.get(`${COURSE_OUTLINE_ID}/${baseCourses[2].id}`));
    expect(after.get(COURSE_OUTLINE_ID)).toBe(before.get(COURSE_OUTLINE_ID));
  });
});
