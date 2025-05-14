import fs from 'node:fs/promises';
import { svgConstants } from '../constants/svg';
import { formatForCssRoot } from './stringHelper';

export const readAssetFile = async (path: string) => {
  const envMode = import.meta.env.MODE;
  if (envMode == 'ssg') {
    return fs.readFile(path, 'utf-8');
  }

  const response = await fetch(path);
  return response.text();
};

export const readSvg = async (path: string, parserFunc?: (doc: Document) => string) => {
  let content = await readAssetFile(path);
  content = replaceVariablesInSvgContent(content);

  if (parserFunc == null) return content;

  const parser = new DOMParser();
  const doc = parser.parseFromString(content, 'image/svg+xml');
  return parserFunc(doc);
};

export const readDiagramSvg = async (diagramName: string, parserFunc?: (doc: Document) => string) =>
  readSvg(
    `/assets/diagram/${diagramName}.d2.svg`,
    parserFunc ?? ((doc: Document) => doc?.children?.[0]?.outerHTML ?? ''),
  );

export const replaceVariablesInSvgContent = (svgContent: string): string => {
  if (svgContent.includes('--') == false) return svgContent;

  let result = svgContent.toString();
  for (const colourProp of Object.keys(svgConstants.colour)) {
    const value = (svgConstants.colour as { [x: string]: string })[colourProp];
    const cssRootProp = formatForCssRoot(colourProp);
    result = result.replaceAll(cssRootProp, value);
  }
  return result;
};

// export const readSrcFile = async (path: string) => {
//   const envMode = import.meta.env.MODE;
//   if (envMode == 'ssg') {
//     return fs.readFile(path, 'utf-8');
//   }
//   // const res = await import(
//   //   /* @vite-ignore */
//   //   path
//   // );
//   const response = await fetch(path);
//   const text = await response.text();
//   console.log(text);
//   return text;
// };
