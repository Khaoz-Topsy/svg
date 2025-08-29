import { type ICodeTheme } from '@/constants/theme';

export const getStyleAttr = (style?: string) => ((style?.length ?? 0) < 1 ? '' : ` style="${style}"`);

export const codeSpan = (text: string, style?: string) => {
  return `<span${getStyleAttr(style)}>${text}</span>`;
};

export const codeSpans = (texts: Array<string>, colours: Array<string | null>, style?: string) => {
  const inner = texts.map((txt, idx) => `<span style="color: ${colours[idx]};">${txt}</span>`).join('');
  return `<span${getStyleAttr(style)}>${inner}</span>`;
};

interface IStyleOptions {
  colour?: string;
  tabLevel?: number;
  opacity?: number;
}
export const getStyleValue = (options?: IStyleOptions) => {
  const styles: Array<string> = [];

  const colour = options?.colour ?? '';
  if (colour.length > 0) {
    styles.push(`color: ${colour};`);
  }

  const tabLevel = options?.tabLevel ?? 0;
  if (tabLevel > 0) {
    styles.push(`margin-left: ${tabLevel}em;`);
  }

  const opacity = options?.opacity ?? 0;
  if (opacity > 0) {
    styles.push(`opacity: ${opacity};`);
  }

  return styles.join(' ');
};

export const svgCode = (theme: ICodeTheme) => ({
  tag: (code: string, options?: IStyleOptions) => codeSpan(code, getStyleValue({ ...options, colour: theme.tag })),
  key: (code: string, options?: IStyleOptions) => codeSpan(code, getStyleValue({ ...options, colour: theme.key })),
  value: (code: string, options?: IStyleOptions) => codeSpan(code, getStyleValue({ ...options, colour: theme.value })),
  keyValue: (codes: Array<string>, options?: Omit<IStyleOptions, 'colour'>) =>
    codeSpans(codes, [theme.key, theme.equals, theme.value], getStyleValue(options)),
});
