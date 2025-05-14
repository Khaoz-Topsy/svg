import { Converter } from 'showdown';

export const generateHtmlFromMarkdown = (markdown: string) => {
  const converter = new Converter();
  const html = converter.makeHtml(markdown);
  return html;
};
