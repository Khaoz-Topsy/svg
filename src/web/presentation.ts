import type { EnvMode } from '../constants/env.ts';
import type { RenderOriginType } from '../constants/renderOrigin.ts';
import { ViewMode } from '../constants/viewMode.ts';
import type { ISlideContext } from '../contracts/slideContext.ts';
import type { ISvgSlide } from '../contracts/svgSlide.ts';
import { generateHtmlFromMarkdown } from '../helpers/markdownHelper.ts';
import { renderSvgSlide } from '../renderSvg.ts';
import { getAllSlides } from '../slides.ts';
import { slideCenterText, slideEmpty } from '../slides/slideBase.ts';
import { changeControlsOnSlideChange, setupControlOnClicks, setupMouseTrap } from './controls.ts';
import { handleSlideIndex } from './slide.ts';
import { setRootCss } from './style.ts';
import { getValuesFromUrl, updateUrl, windowButtonHandler } from './window.ts';

const env: EnvMode = 'web';
import.meta.env.MODE = env;

const setupPresentationForWeb = async () => {
  let { viewMode, slideIndex } = getValuesFromUrl();

  const containerElem = document.querySelector<HTMLElement>('#presentation-container');
  const presenterElem = document.querySelector<HTMLElement>('#presentation-presenter-container');
  const controlsElem = document.querySelector<HTMLElement>('#presentation-controls');
  if (containerElem == null || presenterElem == null || controlsElem == null) {
    console.error('unable to initialise', { containerElem, presenterElem, controlsElem });
    return;
  }

  const slides = await getAllSlides();
  const numberOfSlides = slides.length;
  const lastSlideIndex = numberOfSlides - 1;

  const { renderFunc, broadcastChannel } = getRenderFunctions(
    containerElem,
    presenterElem,
    controlsElem,
    slides,
    numberOfSlides,
    lastSlideIndex,
    viewMode,
  );

  broadcastChannel.addEventListener('message', async (event) => {
    if (slideIndex == event.data) return;
    slideIndex = await renderFunc(slideIndex, event.data, 'broadcast');
  });

  const slideFromModifier = async (indexModifier: number) => {
    slideIndex = await renderFunc(slideIndex, slideIndex + indexModifier, 'slide');
  };

  setupMouseTrap(() => slideIndex, slideFromModifier);
  setupControlOnClicks(controlsElem, viewMode, slideFromModifier);
  await renderFunc(slideIndex, slideIndex, 'initial');
  containerElem.classList.add('ready');
};

const getRenderFunctions = (
  containerElem: HTMLElement,
  presenterElem: HTMLElement,
  controlsElem: HTMLElement,
  slides: Array<(props: ISlideContext) => Promise<ISvgSlide>>,
  numberOfSlides: number,
  lastSlideIndex: number,
  viewMode: string,
) => {
  const broadcastChannel = new BroadcastChannel('KurtLourensSvg');
  const renderFunc = async (
    slideIndex: number, //
    newSlideIndex: number,
    renderOrigin: RenderOriginType,
  ): Promise<number> => {
    const [newIndex, skip] = handleSlideIndex(slideIndex, newSlideIndex, renderOrigin, lastSlideIndex);
    if (skip == true) return slideIndex;

    changeControlsOnSlideChange(controlsElem, newIndex, lastSlideIndex);
    updateUrl(newIndex, viewMode);

    if (renderOrigin != 'broadcast') {
      broadcastChannel.postMessage(newIndex);
    }

    const slideFunc = slides[newIndex] ?? (() => Promise.resolve(slideEmpty));
    const slideObj = await slideFunc({ currentSlideIndex: newIndex, numberOfSlides, env });

    const mainSvgElem = containerElem.querySelector<HTMLElement>('svg');
    const mainSvgContent = await renderSvgSlide(slideObj, newIndex, numberOfSlides);
    if (mainSvgElem != null) mainSvgElem.outerHTML = mainSvgContent;

    if (viewMode == ViewMode.slides) {
      windowButtonHandler();
    } else if (viewMode == ViewMode.presenter) {
      containerElem.classList.add(viewMode);
      presenterElem.style.removeProperty('display');

      const nextSlideFunc = slides[newIndex + 1] ?? (() => Promise.resolve(slideCenterText('END')));
      const nextSlideObj = await nextSlideFunc({ currentSlideIndex: newIndex + 1, numberOfSlides, env });
      const presenterSvgContent = await renderSvgSlide(nextSlideObj, newIndex + 1, numberOfSlides + 1);

      const presenterSvgElem = presenterElem.querySelector<HTMLElement>('svg');
      if (presenterSvgElem != null) presenterSvgElem.outerHTML = presenterSvgContent;

      const presenterNotesElem = presenterElem.querySelector<HTMLElement>('.notes');
      const notesMarkdown = slideObj.publicNotes ?? slideObj.notes;
      const notesHtml = generateHtmlFromMarkdown(notesMarkdown);
      if (presenterNotesElem != null) presenterNotesElem.innerHTML = notesHtml;
    } else {
      console.error(`Unknown viewMode: '${viewMode}'`);
    }
    return newIndex;
  };

  return { broadcastChannel, renderFunc };
};

setRootCss();
setupPresentationForWeb();
