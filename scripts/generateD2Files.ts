import fs from 'node:fs';
import path from 'node:path';

import { executeD2 } from './execute/executeD2';

export const getD2FileData = (props: {
  directory: string; //
}) => {
  const d2SrcDir = process.env.D2_SRC_DIR ?? '';
  const d2DstDir = process.env.D2_DST_DIR ?? '';

  const d2SrcFolder = path.join(props.directory, '../', d2SrcDir);
  const d2FilesAndFolders = fs.readdirSync(d2SrcFolder);
  const d2Files: Array<string> = [];
  for (const file of d2FilesAndFolders) {
    const filePath = path.join(d2SrcFolder, file);
    const stats = fs.statSync(filePath);

    if (stats.isFile() == false && file.endsWith('.d2') == false) continue;
    d2Files.push(file);
  }

  return {
    d2SrcDir,
    d2SrcFolder,
    d2DstDir,
    d2Files,
  };
};

export const generateD2In = async (props: {
  d2File: string;
  d2DstDir: string;
  d2SrcFolder: string;
  extension: string;
  darkMode?: boolean;
  sketch?: boolean;
}) => {
  const d2DestExt = props.d2File.replace('.d2', props.extension);
  const targetFilePath = path.join('../../', props.d2DstDir, d2DestExt);

  const buildAllResult = await executeD2({
    src: props.d2File,
    target: targetFilePath,
    workingDir: props.d2SrcFolder,
    darkMode: props.darkMode ?? true,
    sketch: props.sketch ?? false,
  });
  if (buildAllResult.isSuccess) {
    console.log(`✅ ${d2DestExt} was created`);
  } else {
    console.error(`❌ ${d2DestExt} failed to generate. Err: ${buildAllResult.errorMessage}`);
  }
};

export const generateAllD2Files = async (props: { d2Files: Array<string>; d2DstDir: string; d2SrcFolder: string }) => {
  for (const d2File of props.d2Files) {
    await generateD2In({ ...props, d2File, extension: '.d2.svg' });
    // await generateD2In({ ...props, d2File, extension: '.d2.png' });
  }
};
