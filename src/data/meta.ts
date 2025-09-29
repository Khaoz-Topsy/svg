import path from 'node:path';
import url from 'node:url';

import { getFileData } from './function/getSvgStats';

const currentFileName = url.fileURLToPath(import.meta.url);
const directory = path.dirname(currentFileName);

const preBuild = async () => {
  const files = [
    'ssg-click.svg', //
    'ssg-css.svg',
    'ssg-svg-animation.svg',
  ];
  const tasks = [
    getFileData({ directory, files }), //
  ];
  await Promise.all(tasks);
};

preBuild();
