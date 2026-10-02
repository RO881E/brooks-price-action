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
  const strings = [...counts].filter(([text, times]) => text.length > 12 && times >= 3).map(([text]) => text);
  const stringIndices = new Map(strings.map((text, index) => [text, index]));
  const keys: string[] = [];
  const indices = new Map<string, string>();
  const pack = (value: JsonValue): JsonValue => {
    if (typeof value === 'string') {
      const index = stringIndices.get(value);
      // Packed source objects have numeric keys only, so this marker cannot collide.
      return index === undefined ? value : { $: index };
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
    const index = value.$;
    if (typeof index !== 'number' || !Number.isInteger(index) || strings[index] === undefined) {
      throw new Error('Invalid compact JSON string');
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
