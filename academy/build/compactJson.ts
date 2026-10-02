type JsonValue = null | boolean | number | string | JsonValue[] | { [key: string]: JsonValue };

/** A build-only wire format; the browser restores the original public data shape. */
export function packJson(input: unknown): { keys: string[]; strings: string[]; value: JsonValue } {
  // Match JSON.stringify semantics, including omission of undefined object fields.
  const normalized = JSON.parse(JSON.stringify(input)) as JsonValue;
  const counts = new Map<string, number>();
  const count = (value: JsonValue): void => {
    if (typeof value === 'string') counts.set(value, (counts.get(value) ?? 0) + 1);
    else if (Array.isArray(value)) value.forEach(count);
    else if (value !== null && typeof value === 'object') Object.values(value).forEach(count);
  };
  count(normalized);
  const strings = [...counts].filter(([text, times]) => (text.length > 12 && times >= 3) || (text.length > 24 && times >= 2)).map(([text]) => text);
  const stringIndices = new Map(strings.map((text, index) => [text, index]));
  // Stable numbered IDs share long prefixes even when the full IDs are unique.
  // Intern those prefixes in the existing dictionary, preserving the exact suffix.
  const prefixCounts = new Map<string, number>();
  for (const [text, times] of counts) {
    const match = text.match(/^(.+[.-])(\d{2,})$/);
    if (match && match[1].length > 24 && !stringIndices.has(text)) {
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
  const pack = (value: JsonValue): JsonValue => {
    if (typeof value === 'string') {
      const index = stringIndices.get(value);
      // Packed source objects have numeric keys only, so this marker cannot collide.
      if (index !== undefined) return { $: index };
      const match = value.match(/^(.+[.-])(\d{2,})$/);
      const prefixIndex = match ? prefixIndices.get(match[1]) : undefined;
      return prefixIndex === undefined ? value : { $: [prefixIndex, match![2]] };
    }
    if (Array.isArray(value)) return value.map(pack);
    if (value === null || typeof value !== 'object') return value;
    return Object.fromEntries(Object.entries(value).map(([key, child]) => {
      let index = indices.get(key);
      if (index === undefined) {
        index = String(keys.length);
        indices.set(key, index);
        keys.push(key);
      }
      return [index, pack(child)];
    }));
  };
  return { keys, strings, value: pack(normalized) };
}

// Self-contained so its emitted function can restore the virtual module without imports.
export function unpackJson(value: JsonValue, keys: readonly string[], strings: readonly string[] = []): JsonValue {
  if (Array.isArray(value)) return value.map((child) => unpackJson(child, keys, strings));
  if (value === null || typeof value !== 'object') return value;
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
    return [key, unpackJson(child, keys, strings)];
  }));
}

export function compactJsonModule(input: unknown): string {
  const json = JSON.stringify(packJson(input));
  return `const data = JSON.parse(${JSON.stringify(json)});\nconst restore = ${unpackJson.toString()};\nexport default restore(data.value, data.keys, data.strings);\n`;
}
