import { describe, expect, it } from 'vitest';
import { resolveTheme } from './theme';

describe('Farbschema (Stufe 5b/5c)', () => {
  it('löst die Wahl auf: hell, dunkel, bunt; „wie im System“ folgt dem Systemwunsch', () => {
    expect(resolveTheme('light', true)).toBe('light');
    expect(resolveTheme('dark', false)).toBe('dark');
    expect(resolveTheme('bunt', true)).toBe('bunt');
    expect(resolveTheme('auto', true)).toBe('dark');
    expect(resolveTheme('auto', false)).toBe('light');
  });
});
