import fs from 'node:fs/promises';
import path from 'node:path';

import { isServerMode, type EnvMode } from '@/constants/env';
import type { ITheme, ThemeKey } from '@/constants/theme';
import type { Result } from '@/contracts/resultWithValue';
import { formatForCssRoot } from './stringHelper';

export const readLocalFile = async (
  relativePath: string,
  encoding: BufferEncoding | 'none' = 'utf-8',
): Promise<string> => {
  const envMode = import.meta.env.MODE as unknown as EnvMode;
  if (isServerMode(envMode)) {
    const projectDir = import.meta.env.PROJECT_DIR;
    const isFullPath = path.resolve(relativePath) == path.normalize(relativePath);
    let fullPath = isFullPath ? relativePath : path.join(projectDir, 'public', relativePath);
    const opts = encoding == 'none' ? undefined : { encoding };
    return fs.readFile(fullPath, opts) as Promise<string>;
  }

  const response = await fetch(relativePath);
  return response.text();
};

export const readSvg = async (theme: ITheme, path: string, parserFunc?: (doc: Document) => string) => {
  let content = await readLocalFile(path, 'utf-8');
  content = replaceVariablesInSvgContent(theme, content);

  if (parserFunc == null) return content;

  const parser = new DOMParser();
  const doc = parser.parseFromString(content, 'image/svg+xml');
  return parserFunc(doc);
};

export const readBase64Image = async (path: string) => {
  const envMode = import.meta.env.MODE as unknown as EnvMode;
  if (isServerMode(envMode)) {
    const raw = await readLocalFile(path, 'none');
    const content = Buffer.from(raw).toString('base64');
    return `data:image/png;base64,${content}`;
  } else {
    const promise = new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        var reader = new FileReader();
        reader.onloadend = function () {
          resolve(reader.result);
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.open('GET', path);
      xhr.responseType = 'blob';
      xhr.send();
    });
    return promise;
  }
};

export const readDiagramSvg = async (
  theme: ITheme,
  themeKey: ThemeKey,
  diagramName: string,
  fillClassColourReplaceRegex: Array<{ reg: RegExp; newColour: string }>,
  parserFunc?: (doc: Document) => string,
) => {
  return readSvg(
    theme,
    `./assets/diagram/${diagramName}.d2.${themeKey}.svg`,
    parserFunc ??
      ((doc) => {
        let innerSvg = doc?.children?.[0]?.children?.[0].innerHTML ?? '';
        if (innerSvg == null) return '';

        for (const fillClassKey of fillClassColourReplaceRegex) {
          innerSvg = innerSvg.replace(fillClassKey.reg, `.fill-N7{fill:${fillClassKey.newColour};}`);
        }

        return `<g id="diagramCloud">${innerSvg}</g>`;
      }),
  );
};

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
