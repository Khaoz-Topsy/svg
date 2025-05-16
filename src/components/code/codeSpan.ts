export const codeColours = {
  tag: 'lightblue',
  key: 'lightcoral',
  equals: 'white',
  value: 'lightyellow',
};

export const codeSpan = (text: string, style?: string) => {
  return `<span style="${style}">${text}</span>`;
};

export const codeSpans = (texts: Array<string>, colours: Array<string | null>, style?: string) => {
  const inner = texts.map((txt, idx) => `<span style="color: ${colours[idx]};">${txt}</span>`).join('');
  return `<span style="${style}">${inner}</span>`;
};

interface IStyleOptions {
  colour?: string;
  tabLevel?: number;
}
const getStyleValue = (options?: IStyleOptions) => {
  let style = '';

  const colour = options?.colour ?? '';
  if (colour.length > 0) {
    style += ` color: ${colour};`;
  }

  const tabLevel = options?.tabLevel ?? 0;
  if (tabLevel > 0) {
    style += ` margin-left: ${tabLevel}em;`;
  }

  return style;
};

export const svgCode = {
  tag: (code: string, options?: IStyleOptions) =>
    codeSpan(code, getStyleValue({ ...options, colour: codeColours.tag })),
  key: (code: string, options?: IStyleOptions) =>
    codeSpan(code, getStyleValue({ ...options, colour: codeColours.key })),
  value: (code: string, options?: IStyleOptions) =>
    codeSpan(code, getStyleValue({ ...options, colour: codeColours.value })),
  keyValue: (codes: Array<string>, options?: Omit<IStyleOptions, 'colour'>) =>
    codeSpans(codes, [codeColours.key, codeColours.equals, codeColours.value], getStyleValue(options)),
};
