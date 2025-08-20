import fs from 'node:fs/promises';
import path from 'node:path';

import type { ITheme } from '@/constants/theme';
import type { Result } from '@/contracts/resultWithValue';
import { formatForCssRoot } from './stringHelper';

export const readAssetFile = async (relativePath: string) => readLocalFile(relativePath);
export const readSrcFile = async (relativePath: string) => readLocalFile(relativePath);

export const readLocalFile = async (relativePath: string) => {
  const envMode = import.meta.env.MODE;
  if (envMode == 'ssg') {
    const projectDir = import.meta.env.PROJECT_DIR;
    const isFullPath = path.resolve(relativePath) == path.normalize(relativePath);
    let fullPath = isFullPath ? relativePath : path.join(projectDir, 'public', relativePath);
    return fs.readFile(fullPath, 'utf-8');
  }

  const response = await fetch(relativePath);
  return response.text();
};

export const readSvg = async (theme: ITheme, path: string, parserFunc?: (doc: Document) => string) => {
  let content = await readAssetFile(path);
  content = replaceVariablesInSvgContent(theme, content);

  if (parserFunc == null) return content;

  const parser = new DOMParser();
  const doc = parser.parseFromString(content, 'image/svg+xml');
  return parserFunc(doc);
};

export const readDiagramSvg = async (theme: ITheme, diagramName: string, parserFunc?: (doc: Document) => string) =>
  readSvg(
    theme,
    `/assets/diagram/${diagramName}.d2.svg`,
    parserFunc ?? ((doc: Document) => doc?.children?.[0]?.outerHTML ?? ''),
  );

export const replaceVariablesInSvgContent = (theme: ITheme, svgContent: string): string => {
  if (svgContent.includes('--') == false) return svgContent;

  let result = svgContent.toString();
  for (const colourProp of Object.keys(theme)) {
    const value = (theme as unknown as { [x: string]: string })[colourProp];
    const cssRootProp = formatForCssRoot(colourProp);
    result = result.replaceAll(cssRootProp, value);
  }
  return result;
};

export const fileExists = async (filePath: string): Promise<boolean> => {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
};

export const getIndexOfFolderSlash = (destFilePath: string) => {
  const lastIndexOfSlash = Math.max(
    destFilePath.lastIndexOf('\\'), //
    destFilePath.lastIndexOf('/'),
  );
  return lastIndexOfSlash;
};

export const createFoldersOfDestFilePath = async (destFilePath: string) => {
  const lastIndexOfSlash = getIndexOfFolderSlash(destFilePath);
  const destFolder = destFilePath.substring(0, lastIndexOfSlash);
  const exists = await fileExists(destFolder);
  if (!exists) {
    await fs.mkdir(destFolder, { recursive: true });
  }
};

export const writeLinesToFile = async (content: string, outputFilePath: string): Promise<Result> => {
  try {
    await createFoldersOfDestFilePath(outputFilePath);
    await fs.writeFile(outputFilePath, content);
    return { isSuccess: true, errorMessage: '' };
  } catch (ex) {
    const message = `Unable to write lines to file: '${outputFilePath}'`;
    console.error(`${message}. Err: ${ex}`);
    return { isSuccess: false, errorMessage: message };
  }
};
