import { JSDOM } from 'jsdom';
import path from 'node:path';
import url from 'node:url';
import xmlFormat from 'xml-formatter';

import type { EnvMode } from '@/constants/env.ts';
import type { ThemeKey } from '@/constants/theme.ts';
import type { TransitionType } from '@/contracts/slideContext.ts';
import { writeLinesToFile } from '@/helpers/fileHelper.ts';
import { slideEmpty } from '@/slides/slideBase.ts';
import { renderSvgOuterSSG } from '../renderSvg.ts';
import { getAllSlides } from '../slides.ts';
// import { generateNotesPanel } from './notesPanel.ts';

let env: EnvMode = 'ssg';
let transition: TransitionType = 'click';
let showNotes = false; //TODO: add notes ability
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
    if (val.includes('--transition=')) {
      transition = val.replace('--transition=', '') as TransitionType;
    }
  });

  const slides = getAllSlides();
  const numberOfSlides = slides.length;

  const outputFileNameArr: Array<string> = [env, transition];
  if (showNotes) outputFileNameArr.push('with-notes');
  const output = outputFileNameArr.join('-');
  console.log(`env: ${env}`);
  console.log(`transition: ${transition}`);
  console.log(`showNotes: ${showNotes}`);
  console.log(`output: ${output}.svg`);

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
      transition,
      prevSlideId: slides[slideIndex - 1]?.id,
      showNotes,
    });
    const slideContent = await slideObj.content();
    svgSlideContents.push(slideContent);
  }

  let fullSvg = await renderSvgOuterSSG(themeKey, svgSlideContents);
  fullSvg = xmlFormat(fullSvg);
  const numNewLines = fullSvg.split('\n').length;
  fullSvg = fullSvg.replaceAll('{{svgNumLines}}', numNewLines.toFixed());
  const outputPath = path.join(projectDirectory, 'website', 'assets', 'img', 'generated', `${output}.svg`);
  await writeLinesToFile(fullSvg, outputPath);
};

generateFullSvg();
