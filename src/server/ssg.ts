import { JSDOM } from 'jsdom';
import path from 'node:path';
import url from 'node:url';

import type { EnvMode } from '../constants/env.ts';
import { writeLinesToFile } from '../helpers/fileHelper.ts';
import { renderSvgOuterSSG } from '../renderSvg.ts';
import { getAllSlides } from '../slides.ts';
import { slideEmpty } from '../slides/slideBase.ts';

const env: EnvMode = 'ssg';
const currentFileName = url.fileURLToPath(import.meta.url);
const directory = path.dirname(currentFileName);
const projectDirectory = path.join(directory, '../../');

const generateFullSvg = async () => {
  import.meta.env.MODE = env;
  import.meta.env.PROJECT_DIR = projectDirectory;
  global.DOMParser = new JSDOM().window.DOMParser;

  const slides = getAllSlides();
  const numberOfSlides = slides.length;

  const svgSlideContents: Array<string> = [];
  for (let invertedSlideIndex = 0; invertedSlideIndex < numberOfSlides; invertedSlideIndex++) {
    const slideIndex = numberOfSlides - invertedSlideIndex - 1;
    const slideMeta = slides[slideIndex];
    const slideFunc = slideMeta.slideFunc ?? (() => Promise.resolve(slideEmpty));
    const slideObj = await slideFunc({
      env: 'ssg',
      id: slideMeta.id,
      currentSlideIndex: slideIndex,
      numberOfSlides,
      prevSlideId: slides[slideIndex - 1]?.id,
    });
    svgSlideContents.push(slideObj.content);
  }

  const fullSvg = await renderSvgOuterSSG(svgSlideContents);
  const outputPath = path.join(projectDirectory, 'dist', 'ssg.svg');
  await writeLinesToFile(fullSvg, outputPath);
};

generateFullSvg();
