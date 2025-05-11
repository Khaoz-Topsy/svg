import fs from 'node:fs/promises';

export const readSvg = async (path: string, parserFunc?: (doc: Document) => string) => {
  const content = await getSvgContent(path);
  if (parserFunc == null) return content;

  const parser = new DOMParser();
  const doc = parser.parseFromString(content, 'image/svg+xml');
  return parserFunc(doc);
};

export const getSvgContent = async (path: string) => {
  const envMode = import.meta.env.MODE;
  if (envMode == 'ssg') {
    return fs.readFile(path, 'utf-8');
  }

  const response = await fetch(path);
  return response.text();
};
