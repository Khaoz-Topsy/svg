import { JSDOM } from 'jsdom';
import path from 'node:path';
import url from 'node:url';
// import xmlFormat from 'xml-formatter';

import type { EnvMode } from '@/constants/env.ts';
import type { ThemeKey } from '@/constants/theme.ts';
import { writeLinesToFile } from '@/helpers/fileHelper.ts';
import { slideEmpty } from '@/slides/slideBase.ts';
import { renderSvgOuterSSG } from '../renderSvg.ts';
import { getAllSlides } from '../slides.ts';
// import { generateNotesPanel } from './notesPanel.ts';

let env: EnvMode = 'ssg';
const themeKey: ThemeKey = 'dark';
const currentFileName = url.fileURLToPath(import.meta.url);
const directory = path.dirname(currentFileName);
const projectDirectory = path.join(directory, '../../');

const generateFullSvg = async () => {
  import.meta.env.MODE = env;
  import.meta.env.PROJECT_DIR = projectDirectory;
  global.DOMParser = new JSDOM().window.DOMParser;

  const args = process.argv.slice(2);
  args.forEach((val) => {
    if (val == 'auto-slide') env = 'auto-slide';
  });

  const slides = getAllSlides();
  const numberOfSlides = slides.length;

  const svgSlideContents: Array<string> = [];
  for (let invertedSlideIndex = 0; invertedSlideIndex < numberOfSlides; invertedSlideIndex++) {
    const slideIndex = numberOfSlides - invertedSlideIndex - 1;
    const slideMeta = slides[slideIndex];
    const slideFunc = slideMeta.slideFunc ?? (() => Promise.resolve(slideEmpty));
    const slideObj = await slideFunc({
      env,
      id: slideMeta.id,
      themeKey,
      currentSlideIndex: slideIndex,
      numberOfSlides,
      prevSlideId: slides[slideIndex - 1]?.id,
      showNotes: false, //TODO: add notes ability
    });
    svgSlideContents.push(slideObj.content);
  }

  let fullSvg = await renderSvgOuterSSG(themeKey, svgSlideContents);
  // let formattedSvg = xmlFormat(fullSvg);
  const outputPath = path.join(projectDirectory, 'dist', `${env}.svg`);
  await writeLinesToFile(fullSvg, outputPath);
};

generateFullSvg();
