type JsonValue = null | boolean | number | string | JsonValue[] | { [key: string]: JsonValue };

/** A build-only wire format; the browser restores the original public data shape. */
export function packJson(input: unknown): { keys: string[]; value: JsonValue } {
  const keys: string[] = [];
  const indices = new Map<string, string>();
  const pack = (value: JsonValue): JsonValue => {
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
  // Match JSON.stringify semantics, including omission of undefined object fields.
  const normalized = JSON.parse(JSON.stringify(input)) as JsonValue;
  return { keys, value: pack(normalized) };
}

// Self-contained so its emitted function can restore the virtual module without imports.
export function unpackJson(value: JsonValue, keys: readonly string[]): JsonValue {
  if (Array.isArray(value)) return value.map((child) => unpackJson(child, keys));
  if (value === null || typeof value !== 'object') return value;
  return Object.fromEntries(Object.entries(value).map(([index, child]) => {
    const key = keys[Number(index)];
    if (key === undefined) throw new Error('Invalid compact JSON key');
    return [key, unpackJson(child, keys)];
  }));
}

export function compactJsonModule(input: unknown): string {
  const json = JSON.stringify(packJson(input));
  return `const data = JSON.parse(${JSON.stringify(json)});\nconst restore = ${unpackJson.toString()};\nexport default restore(data.value, data.keys);\n`;
}
