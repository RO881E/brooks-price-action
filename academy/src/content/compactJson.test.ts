import { describe, expect, it } from 'vitest';
import { baseCourses, testCourses } from './allCourses';
import { toCourseOutline } from '../../build/courseOutline';
import { compactJsonModule, packJson, unpackJson } from '../../build/compactJson';

describe('compact course outline wire format', () => {
  it('restores the exact outlines for all production and browser-test courses', () => {
    const outlines = [...baseCourses, ...testCourses].map(toCourseOutline);
    const packed = packJson(outlines);
    expect(unpackJson(packed.value, packed.keys)).toEqual(JSON.parse(JSON.stringify(outlines)));
    expect(JSON.stringify(packed).length).toBeLessThan(JSON.stringify(outlines).length);
  });

  it('preserves unicode, literal escapes, numeric keys, null, arrays and JSON omission rules', () => {
    const input = [{ '0': 'Gruß \\n', nested: [{ title: '„Tief“', missing: undefined, no: null,
      yes: true, value: 0, empty: [] }], '__proto__': 'ignored object-literal setter' }];
    const packed = packJson(input);
    expect(unpackJson(packed.value, packed.keys)).toEqual(JSON.parse(JSON.stringify(input)));
  });

  it('emits a standalone module with the same data and no external decoder dependency', () => {
    const outlines = [...baseCourses, ...testCourses].map(toCourseOutline);
    const moduleCode = compactJsonModule(outlines);
    const evaluate = new Function(moduleCode.replace('export default ', 'return '));
    expect(evaluate()).toEqual(JSON.parse(JSON.stringify(outlines)));
  });
});
