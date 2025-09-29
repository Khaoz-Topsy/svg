import { BroadcastType } from '@/constants/broadcast.ts';
import { cursorList } from '@/constants/cursor.ts';
import type { EnvMode } from '@/constants/env.ts';
import type { RenderOriginType } from '@/constants/renderOrigin.ts';
import { themes, type ThemeKey } from '@/constants/theme.ts';
import { ViewMode } from '@/constants/viewMode.ts';
import type { SlideMeta } from '@/contracts/slideMeta.ts';
import { generateHtmlFromMarkdown } from '@/helpers/markdownHelper.ts';
import { slideCenterText, slideEmpty } from '@/slides/slideBase.ts';
import { renderSvgSlide } from '../renderSvg.ts';
import { getAllSlides } from '../slides.ts';
import { setupMouseTrap } from './controls.ts';
import { handleSlideIndex } from './slide.ts';
import { setRootCss } from './style.ts';
import { getValuesFromUrl, updateUrl, windowButtonHandler } from './window.ts';

const env: EnvMode = 'web';
const localStorageThemeKey = 'kurt-presentation-theme';
let isMinimized = false;
let themeKey = (localStorage.getItem(localStorageThemeKey) ?? 'dark') as unknown as ThemeKey;
let cursorIndex = 0;

const slideBackgrounds: Record<string, string> = {
  'slide-basic-drawing-defs': './assets/img/sun-tornado.svg',
};

const setupPresentationForWeb = async () => {
  let { viewMode, slideIndex } = getValuesFromUrl();

  const containerElem = document.querySelector<HTMLElement>('#presentation-container');
  const presenterElem = document.querySelector<HTMLElement>('#presentation-presenter-container');
  // const fakeCursorElem = document.querySelector<HTMLElement>('#fake-cursor');
  if (containerElem == null || presenterElem == null) {
    console.error('unable to initialise', { containerElem, presenterElem });
    return;
  }

  const slides = getAllSlides();
  const numberOfSlides = slides.length;
  const lastSlideIndex = numberOfSlides - 1;

  const { renderFunc, broadcastChannel } = getRenderFunctions(
    containerElem,
    presenterElem,
    slides,
    numberOfSlides,
    lastSlideIndex,
    viewMode,
  );

  broadcastChannel.addEventListener('message', async (event) => {
    const slideData = event.data;
    if (slideData.type == BroadcastType.slide) {
      if (slideIndex == slideData.data) return;
      slideIndex = await renderFunc(slideIndex, slideData.data, 'broadcast');
    }
    if (slideData.type == BroadcastType.cursor) {
      if (cursorIndex == slideData.data) return;
      setCursor(containerElem, slideData.data);
    }
    // if (slideData.type == BroadcastType.cursorRemote) {
    //   if (slideData.data == true) {
    //     containerElem.classList.add('remote-cursor');
    //   } else {
    //     containerElem.classList.remove('remote-cursor');
    //   }
    // }
    // if (slideData.type == BroadcastType.cursorPosition) {
    //   if (cursorIndex == slideData.data) return;
    //   if (fakeCursorElem == null) return;
    //   console.log(slideData.data);
    //   const [x, y] = slideData.data.split(',');
    //   fakeCursorElem.style.left = x;
    //   fakeCursorElem.style.top = y;
    // }
  });

  const slideFromModifier = async (indexModifier: number) => {
    slideIndex = await renderFunc(slideIndex, slideIndex + indexModifier, 'slide');
  };

  setupMouseTrap(() => slideIndex, slideFromModifier);
  await renderFunc(slideIndex, slideIndex, 'initial');
  containerElem.classList.add('ready');
};

const getRenderFunctions = (
  containerElem: HTMLElement,
  presenterElem: HTMLElement,
  slides: Array<SlideMeta>,
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

    updateUrl(newIndex, viewMode);

    if (renderOrigin != 'broadcast') {
      broadcastChannel.postMessage({ type: BroadcastType.slide, data: newIndex });
    }

    const slideMeta = slides[newIndex];
    const slideFunc = slideMeta.slideFunc ?? (() => Promise.resolve(slideEmpty));
    const slideObj = await slideFunc({
      id: slideMeta.id,
      env,
      themeKey,
      currentSlideIndex: newIndex,
      numberOfSlides,
    });

    const mainSvgElem = containerElem.querySelector<HTMLElement>('svg');
    const mainSvgContent = await renderSvgSlide(slideObj, themeKey, newIndex, numberOfSlides);
    if (mainSvgElem != null) mainSvgElem.outerHTML = mainSvgContent;

    if (viewMode == ViewMode.slides) {
      const bgContainerElem = document.querySelector<HTMLElement>('#background-container');
      if (bgContainerElem != null) {
        const imgSrc = slideBackgrounds[slideMeta.id];
        if (imgSrc != null) {
          let imgElem = document.createElement('img');
          imgElem.src = imgSrc;
          imgElem.style = 'opacity: 0';
          bgContainerElem.appendChild(imgElem);
          setTimeout(() => {
            imgElem.style = '';
          }, 1000);
        } else {
          bgContainerElem.innerHTML = '';
        }
      }

      windowButtonHandler({
        tempMinimize: () => {
          if (isMinimized) {
            containerElem.classList.remove('minimized');
          } else {
            containerElem.classList.add('minimized');
          }
          isMinimized = !isMinimized;
        },
        toggleTheme: () => {
          const themeList = Object.keys(themes) as Array<ThemeKey>;
          const currentIndex = themeList.indexOf(themeKey);
          const newIndex = (currentIndex + 1) % themeList.length;

          localStorage.setItem(localStorageThemeKey, themeList[newIndex]);
          document.location.reload();
        },
      });
    }

    if (viewMode == ViewMode.presenter) {
      containerElem.classList.add(viewMode);
      presenterElem.style.removeProperty('display');

      (window as any).setupTimer = (timerElem: HTMLElement | null) => {
        console.log('setupTimer');
        if (timerElem == null) return;
        timerElem.innerHTML = '00m 00s';
        const start = new Date().getTime();
        const interval = setInterval(() => {
          if (timerElem == null) clearInterval(interval);

          const distance = new Date().getTime() - start;
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          timerElem.innerHTML = `${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
        }, 333);
      };

      // (window as any).controlRemoteCursor = function () {
      //   const isChecked = (event as any).target.checked;
      //   const mainContentSvgElem = containerElem.querySelector<HTMLElement>('#presentation-container > svg');

      //   if (mainContentSvgElem == null) return;
      //   if (isChecked == false) {
      //     mainContentSvgElem.onmousemove = function () {};
      //     broadcastChannel.postMessage({ type: BroadcastType.cursorRemote, data: false });
      //   } else {
      //     broadcastChannel.postMessage({ type: BroadcastType.cursorRemote, data: true });
      //     const { width, height } = mainContentSvgElem.getBoundingClientRect();
      //     mainContentSvgElem.onmousemove = function (e) {
      //       const xPercent = Math.round((e.clientX / width) * 10000) / 100;
      //       const yPercent = Math.round((e.clientY / height) * 10000) / 100;
      //       debounce(() => {
      //         console.log(`mouse location: ${xPercent}% ${yPercent}%`);
      //         broadcastChannel.postMessage({ type: BroadcastType.cursorPosition, data: `${xPercent}%,${yPercent}%` });
      //       }, 5);
      //     };
      //   }
      // };

      const cursorOptionsElem = containerElem.querySelector<HTMLElement>('#cursor-options');
      if (cursorOptionsElem != null) {
        const buttons = [];
        const onClickTemplate = (cursorIdx: number, fileName: string) =>
          `<button class="cursor-btn" onclick="onCursorButtonClick(${cursorIdx})"><img src="./assets/img/${fileName}" width="20px" height="20px" /></button>`;
        for (let cursorIndex = 0; cursorIndex < cursorList.length; cursorIndex++) {
          const cursorType = cursorList[cursorIndex];
          if (cursorType == 'unset') continue;
          if (cursorType == 'cursor-red-dot') {
            buttons.push(onClickTemplate(cursorIndex, 'red-dot.svg'));
          }
          if (cursorType == 'cursor-hand') {
            buttons.push(onClickTemplate(cursorIndex, 'hand.png'));
          }
        }
        cursorOptionsElem.innerHTML = buttons.join('');

        (window as any).onCursorButtonClick = function (newCursorIndex: number) {
          for (const cursorType of cursorList) {
            containerElem.classList.remove(cursorType);
          }
          cursorIndex = newCursorIndex;
          const newCursorType = cursorList[cursorIndex];
          if (newCursorType.includes('cursor-')) containerElem.classList.add(newCursorType);
          broadcastChannel.postMessage({ type: BroadcastType.cursor, data: newCursorIndex });
        };
      }

      const nextSlideMeta = slides[newIndex + 1];
      const nextSlideFunc = nextSlideMeta.slideFunc ?? (() => Promise.resolve(slideCenterText('END')));
      const nextSlideObj = await nextSlideFunc({
        id: slideMeta.id,
        env,
        themeKey,
        currentSlideIndex: newIndex,
        numberOfSlides,
      });
      const presenterSvgContent = await renderSvgSlide(nextSlideObj, themeKey, newIndex + 1, numberOfSlides + 1);

      const presenterSvgElem = presenterElem.querySelector<HTMLElement>('svg');
      if (presenterSvgElem != null) presenterSvgElem.outerHTML = presenterSvgContent;

      const presenterNotesElem = presenterElem.querySelector<HTMLElement>('.notes');
      const notesMarkdown = slideObj.publicNotes ?? slideObj.notes;
      const notesHtml = generateHtmlFromMarkdown(notesMarkdown);
      if (presenterNotesElem != null) presenterNotesElem.innerHTML = notesHtml;
    }

    return newIndex;
  };

  containerElem.oncontextmenu = (e: Event) => {
    e?.preventDefault?.();

    const newCursorIndex = (cursorIndex + 1) % cursorList.length;
    setCursor(containerElem, newCursorIndex);

    broadcastChannel.postMessage({ type: BroadcastType.cursor, data: newCursorIndex });
  };

  return { broadcastChannel, renderFunc };
};

const setCursor = (containerElem: HTMLElement, newCursorIndex: number) => {
  for (const cursorType of cursorList) {
    containerElem.classList.remove(cursorType);
  }
  cursorIndex = newCursorIndex;
  const newCursorType = cursorList[cursorIndex];
  if (newCursorType.includes('cursor-')) containerElem.classList.add(newCursorType);
};

// let debounceTimer: number;
// const debounce = (callback: () => void, time: number) => {
//   window.clearTimeout(debounceTimer);
//   debounceTimer = window.setTimeout(callback, time);
// };

setRootCss(themes[themeKey]);
setupPresentationForWeb();
