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
    // Flat key-index/value pairs avoid repeating JSON object-key quotes.
    // Source keys, including # and $, are dictionary-indexed as ordinary data.
    return { "#": Object.entries(value).flatMap(([key, child]) => {
      let index = indices.get(key);
      if (index === undefined) {
        index = String(keys.length);
        indices.set(key, index);
        keys.push(key);
      }
      return [Number(index), pack(child)];
    }) };
  };
  return { keys, strings, value: pack(normalized) };
}

// Self-contained so its emitted function can restore the virtual module without imports.
export function unpackJson(value: JsonValue, keys: readonly string[], strings: readonly string[] = []): JsonValue {
  if (typeof value === 'string' && value.startsWith('@')) {
    if (value.startsWith('@@')) return value.slice(1);
    const match = value.match(/^@(0|[1-9]\d*)(?::([\s\S]*))?$/);
    const index = match ? Number(match[1]) : -1;
    if (!Number.isSafeInteger(index) || strings[index] === undefined) throw new Error('Invalid compact JSON string');
    return strings[index] + (match![2] ?? '');
  }
  if (Array.isArray(value)) return value.map((child) => unpackJson(child, keys, strings));
  if (value === null || typeof value !== 'object') return value;
  if (Object.hasOwn(value, '#')) {
    const entries = value['#'];
    if (Object.keys(value).length !== 1 || !Array.isArray(entries) || entries.length % 2 !== 0) throw new Error('Invalid compact JSON object');
    const result: [string, JsonValue][] = [];
    const seen = new Set<number>();
    for (let i = 0; i < entries.length; i += 2) {
      const index = entries[i];
      if (typeof index !== 'number' || !Number.isSafeInteger(index) || index < 0 || keys[index] === undefined || seen.has(index)) throw new Error('Invalid compact JSON key');
      seen.add(index);
      result.push([keys[index], unpackJson(entries[i + 1], keys, strings)]);
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
    return [key, unpackJson(child, keys, strings)];
  }));
}

export function compactJsonModule(input: unknown): string {
  const json = JSON.stringify(packJson(input));
  return `const data = JSON.parse(${JSON.stringify(json)});\nconst restore = ${unpackJson.toString()};\nexport default restore(data.value, data.keys, data.strings);\n`;
}
