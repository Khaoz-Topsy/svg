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
