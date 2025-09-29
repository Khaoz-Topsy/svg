import fs from 'node:fs/promises';
import path from 'node:path';

import { svgExportFolderPaths } from '@/constants/file';

export const getSvgStats = async (props: {
  directory: string; //
  fileName: string;
}) => {
  const rootPath = path.dirname(path.dirname(props.directory));
  const filePath = path.join(rootPath, ...svgExportFolderPaths, props.fileName);

  const svgContent = await fs.readFile(filePath, 'utf-8');
  const numLines = svgContent.split('\n').length;
  const numChars = svgContent.length;

  return { fileName: props.fileName, numLines, numChars };
};

export const getFileData = async (props: { directory: string; files: Array<string> }) => {
  const tasks = [];
  for (const fileName of props.files) {
    tasks.push(getSvgStats({ ...props, fileName }));
  }

  const fileDetails = await Promise.all(tasks);
  const rootPath = path.dirname(path.dirname(props.directory));
  const metaFilePath = path.join(rootPath, 'src', 'constants', 'svgMeta.ts');

  const contentLines: Array<string> = [
    'export const svgMeta = {', //
  ];
  for (const fileDetail of fileDetails) {
    const { fileName, ...innerDetails } = fileDetail;
    contentLines.push(`  '${fileDetail.fileName}': ${JSON.stringify(innerDetails)},`);
  }
  contentLines.push('};\n');
  await fs.writeFile(metaFilePath, contentLines.join('\n'));
};
