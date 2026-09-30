export function darkOf(hex: string): string;
export function darkOfRgba(value: string): string;
export function rootTokens(css: string): string[];
export function buildTheme(
  config: { colors: string[]; rgba?: Record<string, string>; dark?: Record<string, string> },
  css?: string,
): string;
