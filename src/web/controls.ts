import { bind } from 'mousetrap';

import { getNewPresentationUrl } from '../helpers/urlHelper.ts';

export const changeControlsOnSlideChange = (
  controlsElem: HTMLElement, //
  slideIndex: number,
  lastSlideIndex: number,
) => {
  controlsElem.className = '';
  if (slideIndex == 0) controlsElem.classList.add('first');
  if (slideIndex == lastSlideIndex) controlsElem.classList.add('last');
};

export const setupControlOnClicks = (
  controlsElem: HTMLElement,
  viewMode: string,
  onButtonClick: (indexModifier: number) => Promise<void>,
) => {
  const leftControlElem = controlsElem.querySelector<HTMLElement>('.left');
  const bottomControlElem = controlsElem.querySelector<HTMLElement>('.bottom');
  const rightControlElem = controlsElem.querySelector<HTMLElement>('.right');

  if (viewMode == 'presenter') {
    if (bottomControlElem == null) return;
    bottomControlElem.style.removeProperty('display');
  } else {
    if (leftControlElem) leftControlElem.onclick = () => onButtonClick(-1);
    if (rightControlElem) rightControlElem.onclick = () => onButtonClick(1);
  }
};

export const setupMouseTrap = (
  getCurrentSlide: () => number,
  onButtonClick: (indexModifier: number) => Promise<void>, //
) => {
  bind(['home', '0'], () => {
    onButtonClick(-9999);
  });
  bind(['up', 'pageup', 'left'], () => {
    onButtonClick(-1);
  });
  bind(['down', 'pagedown', 'right'], () => {
    onButtonClick(1);
  });
  bind('end', () => {
    onButtonClick(9999);
  });
  bind('p', () => {
    const newWindowUrl = getNewPresentationUrl(getCurrentSlide(), 'presenter');
    window.open(newWindowUrl, '_blank');
  });
};
