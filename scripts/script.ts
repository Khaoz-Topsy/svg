import path from 'node:path';
import url from 'node:url';

import { generateAllD2Files, getD2FileData } from './generateD2Files';

const currentFileName = url.fileURLToPath(import.meta.url);
const directory = path.dirname(currentFileName);
const main = async () => {
  const { d2SrcFolder, d2DstDir, d2Files } = getD2FileData({ directory });
  await generateAllD2Files({ d2DstDir, d2Files, d2SrcFolder });
};
main();
