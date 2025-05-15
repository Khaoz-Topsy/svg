import path from 'node:path';
import url from 'node:url';
import { JSDOM } from 'jsdom';

import { writeLinesToFile } from '../helpers/fileHelper.ts';
import { renderSvgSlides } from '../renderSvg.ts';
import { getAllSlides } from '../slides.ts';
import { slideEmpty } from '../slides/slideBase.ts';

const currentFileName = url.fileURLToPath(import.meta.url);
const directory = path.dirname(currentFileName);
const projectDirectory = path.join(directory, '../../');

export const generateFullSvg = async () => {
  import.meta.env.MODE = 'ssg';
  import.meta.env.PROJECT_DIR = projectDirectory;
  global.DOMParser = new JSDOM().window.DOMParser;

  const slides = getAllSlides();
  const numberOfSlides = slides.length;

  const svgSlideContents: Array<string> = [];
  for (let slideIndex = 0; slideIndex < numberOfSlides; slideIndex++) {
    const slideFunc = slides[slideIndex] ?? (() => Promise.resolve(slideEmpty));
    const slideObj = await slideFunc({});
    svgSlideContents.push(slideObj.content);
  }

  const fullSvg = await renderSvgSlides(svgSlideContents);
  const outputPath = path.join(projectDirectory, 'dist', 'ssg.svg');
  await writeLinesToFile(fullSvg, outputPath);
};

generateFullSvg();
