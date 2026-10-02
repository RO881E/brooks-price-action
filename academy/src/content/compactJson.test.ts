import { describe, expect, it } from 'vitest';
import { baseCourses, testCourses } from './allCourses';
import { toCourseOutline } from '../../build/courseOutline';
import { compactJsonModule, packJson, unpackJson } from '../../build/compactJson';

describe('compact course outline wire format', () => {
  it('restores the exact outlines for all production and browser-test courses', () => {
    const outlines = [...baseCourses, ...testCourses].map(toCourseOutline);
    const packed = packJson(outlines);
    expect(unpackJson(packed.value, packed.keys, packed.strings)).toEqual(JSON.parse(JSON.stringify(outlines)));
    expect(JSON.stringify(packed).length).toBeLessThan(JSON.stringify(outlines).length);
  });

  it('preserves unicode, literal escapes, numeric keys, null, arrays and JSON omission rules', () => {
    const input = [{ '0': 'Gruß \\n', nested: [{ title: '„Tief“', missing: undefined, no: null,
      yes: true, value: 0, empty: [] }], '__proto__': 'ignored object-literal setter' }];
    const packed = packJson(input);
    expect(unpackJson(packed.value, packed.keys, packed.strings)).toEqual(JSON.parse(JSON.stringify(input)));
  });

  it('emits a standalone module with the same data and no external decoder dependency', () => {
    const outlines = [...baseCourses, ...testCourses].map(toCourseOutline);
    const moduleCode = compactJsonModule(outlines);
    const evaluate = new Function(moduleCode.replace('export default ', 'return '));
    expect(evaluate()).toEqual(JSON.parse(JSON.stringify(outlines)));
  });
  it('interns repeated text without confusing source marker keys, arrays or numeric keys', () => {
    const text = 'Wiederholte Preisreferenz „Tief“ \\n';
    const input = [{ '$': 0, '0': text, nested: [text, { '$': text }] }, text];
    const packed = packJson(input);
    expect(packed.strings).toEqual([text]);
    expect(unpackJson(packed.value, packed.keys, packed.strings)).toEqual(input);
    expect(new Function(compactJsonModule(input).replace('export default ', 'return '))()).toEqual(input);
  });

  it('interns long text used only twice while leaving short pairs inline', () => {
    const text = 'Ein langer wiederholter Gliederungstext für zwei Stellen';
    const input = [text, text, 'kurz', 'kurz'];
    const packed = packJson(input);
    expect(packed.strings).toEqual([text]);
    expect(unpackJson(packed.value, packed.keys, packed.strings)).toEqual(input);
    expect(JSON.stringify(packed).length).toBeLessThan(JSON.stringify(input).length);
  });

  it('preserves numbered IDs and source marker keys while sharing long prefixes', () => {
    const prefix = 'price-action-trends.chapter-24.lesson-';
    const ids = Array.from({ length: 24 }, (_, i) => prefix + String(i + 1).padStart(2, '0'));
    const input = { ids, '$': [0, 'source suffix'], '0': ids[0] };
    const packed = packJson(input);
    expect(packed.strings).toContain(prefix);
    expect(JSON.stringify(packed).length).toBeLessThan(JSON.stringify(input).length);
    expect(unpackJson(packed.value, packed.keys, packed.strings)).toEqual(input);
    expect(new Function(compactJsonModule(input).replace('export default ', 'return '))()).toEqual(input);
    expect(() => unpackJson({ $: [0, 2] }, [], [prefix])).toThrow('Invalid compact JSON suffix');
    expect(() => unpackJson({ $: [0, '01', 'extra'] }, [], [prefix])).toThrow('Invalid compact JSON suffix');
    expect(() => unpackJson({ $: [-1, '01'] }, [], [prefix])).toThrow('Invalid compact JSON string');
  });

  it('rejects invalid string references instead of silently losing text', () => {
    expect(() => unpackJson({ $: 2 }, [], ['only zero'])).toThrow('Invalid compact JSON string');
    expect(() => unpackJson({ $: -1 }, [], ['only zero'])).toThrow('Invalid compact JSON string');
    expect(() => unpackJson({ $: 0.5 }, [], ['only zero'])).toThrow('Invalid compact JSON string');
  });
});
