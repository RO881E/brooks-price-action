type JsonValue = null | boolean | number | string | JsonValue[] | { [key: string]: JsonValue };

/** A build-only wire format; the browser restores the original public data shape. */
export function packJson(input: unknown): { keys: string[]; strings: string[]; shapes: number[][]; value: JsonValue } {
  // Match JSON.stringify semantics, including omission of undefined object fields.
  const normalized = JSON.parse(JSON.stringify(input)) as JsonValue;
  const counts = new Map<string, number>();
  const shapeCounts = new Map<string, number>();
  const count = (value: JsonValue): void => {
    if (typeof value === 'string') counts.set(value, (counts.get(value) ?? 0) + 1);
    else if (Array.isArray(value)) value.forEach(count);
    else if (value !== null && typeof value === 'object') {
      const shape = JSON.stringify(Object.keys(value));
      shapeCounts.set(shape, (shapeCounts.get(shape) ?? 0) + 1);
      Object.values(value).forEach(count);
    }
  };
  count(normalized);
  // Repeated short step kinds and answer IDs also save space in growing outlines.
  const strings = [...counts].filter(([text, times]) => (text.length > 4 && times >= 3) || (text.length > 12 && times >= 2)).map(([text]) => text);
  const stringIndices = new Map(strings.map((text, index) => [text, index]));
  // Numbered lesson and step IDs share prefixes even when full IDs are unique.
  // Intern those prefixes in the existing dictionary, preserving the exact suffix.
  // Course-scoped step IDs also use a dot before the step kind (01.explain).
  const prefixCounts = new Map<string, number>();
  for (const [text, times] of counts) {
    const match = text.match(/^(.+[.-])(\d{2,}(?:-[a-z][a-z-]*)?(?:\.[a-z][a-z-]*)?)$/);
    if (match && match[1].length > 8 && !stringIndices.has(text)) {
      prefixCounts.set(match[1], (prefixCounts.get(match[1]) ?? 0) + times);
    }
  }
  const prefixIndices = new Map<string, number>();
  for (const [prefix, times] of prefixCounts) {
    if (times < 8) continue;
    let index = stringIndices.get(prefix);
    if (index === undefined) { index = strings.length; strings.push(prefix); }
    prefixIndices.set(prefix, index);
  }
  const keys: string[] = [];
  const indices = new Map<string, string>();
  const shapes: number[][] = [];
  const shapeIndices = new Map<string, number>();
  const pack = (value: JsonValue): JsonValue => {
    if (typeof value === 'string') {
      const index = stringIndices.get(value);
      // Inline strings starting with @ are escaped; references are unambiguous.
      if (index !== undefined) return `@${index}`;
      const match = value.match(/^(.+[.-])(\d{2,}(?:-[a-z][a-z-]*)?(?:\.[a-z][a-z-]*)?)$/);
      const prefixIndex = match ? prefixIndices.get(match[1]) : undefined;
      return prefixIndex === undefined ? (value.startsWith("@") ? "@" + value : value) : `@${prefixIndex}:${match![2]}`;
    }
    if (Array.isArray(value)) return value.map(pack);
    if (value === null || typeof value !== 'object') return value;
    // Larger frequent object layouts share their ordered key indices. Small
    // step objects compress better as flat pairs. Values retain
    // the same recursive encoding; rare objects keep the legacy flat pairs.
    const entries = Object.entries(value);
    const keyIndices = entries.map(([key]) => {
      let index = indices.get(key);
      if (index === undefined) {
        index = String(keys.length);
        indices.set(key, index);
        keys.push(key);
      }
      return Number(index);
    });
    const signature = JSON.stringify(entries.map(([key]) => key));
    if (entries.length > 4 && (shapeCounts.get(signature) ?? 0) >= 3) {
      let shape = shapeIndices.get(signature);
      if (shape === undefined) {
        shape = shapes.length;
        shapes.push(keyIndices);
        shapeIndices.set(signature, shape);
      }
      return { '%': [shape, ...entries.map(([, child]) => pack(child))] };
    }
    return { '#': entries.flatMap(([, child], index) => [keyIndices[index], pack(child)]) };
  };
  const value = pack(normalized);
  return { keys, strings, shapes, value };
}

// Self-contained so its emitted function can restore the virtual module without imports.
export function unpackJson(value: JsonValue, keys: readonly string[], strings: readonly string[] = [], shapes: readonly (readonly number[])[] = []): JsonValue {
  if (typeof value === 'string' && value.startsWith('@')) {
    if (value.startsWith('@@')) return value.slice(1);
    const match = value.match(/^@(0|[1-9]\d*)(?::([\s\S]*))?$/);
    const index = match ? Number(match[1]) : -1;
    if (!Number.isSafeInteger(index) || strings[index] === undefined) throw new Error('Invalid compact JSON string');
    return strings[index] + (match![2] ?? '');
  }
  if (Array.isArray(value)) return value.map((child) => unpackJson(child, keys, strings, shapes));
  if (value === null || typeof value !== 'object') return value;
  if (Object.hasOwn(value, '%')) {
    const entries = value['%'];
    if (Object.keys(value).length !== 1 || !Array.isArray(entries)) throw new Error('Invalid compact JSON shape');
    const shapeIndex = entries[0];
    if (typeof shapeIndex !== 'number' || !Number.isSafeInteger(shapeIndex) || shapeIndex < 0) throw new Error('Invalid compact JSON shape');
    const shape = shapes[shapeIndex];
    if (!Array.isArray(shape) || shape.length !== entries.length - 1 || new Set(shape).size !== shape.length) throw new Error('Invalid compact JSON shape');
    return Object.fromEntries(shape.map((keyIndex, index) => {
      if (!Number.isSafeInteger(keyIndex) || keyIndex < 0 || keys[keyIndex] === undefined) throw new Error('Invalid compact JSON key');
      return [keys[keyIndex], unpackJson(entries[index + 1], keys, strings, shapes)];
    }));
  }
  if (Object.hasOwn(value, '#')) {
    const entries = value['#'];
    if (Object.keys(value).length !== 1 || !Array.isArray(entries) || entries.length % 2 !== 0) throw new Error('Invalid compact JSON object');
    const result: [string, JsonValue][] = [];
    const seen = new Set<number>();
    for (let i = 0; i < entries.length; i += 2) {
      const index = entries[i];
      if (typeof index !== 'number' || !Number.isSafeInteger(index) || index < 0 || keys[index] === undefined || seen.has(index)) throw new Error('Invalid compact JSON key');
      seen.add(index);
      result.push([keys[index], unpackJson(entries[i + 1], keys, strings, shapes)]);
    }
    return Object.fromEntries(result);
  }
  if (Object.hasOwn(value, '$')) {
    const reference = value.$;
    const index = Array.isArray(reference) ? reference[0] : reference;
    if (typeof index !== 'number' || !Number.isInteger(index) || strings[index] === undefined) {
      throw new Error('Invalid compact JSON string');
    }
    if (Array.isArray(reference)) {
      if (reference.length !== 2 || typeof reference[1] !== 'string') {
        throw new Error('Invalid compact JSON suffix');
      }
      return strings[index] + reference[1];
    }
    return strings[index];
  }
  return Object.fromEntries(Object.entries(value).map(([index, child]) => {
    const key = keys[Number(index)];
    if (key === undefined) throw new Error('Invalid compact JSON key');
    return [key, unpackJson(child, keys, strings, shapes)];
  }));
}

export function compactJsonModule(input: unknown): string {
  const json = JSON.stringify(packJson(input));
  return `const data = JSON.parse(${JSON.stringify(json)});\nconst restore = ${unpackJson.toString()};\nexport default restore(data.value, data.keys, data.strings, data.shapes);\n`;
}
