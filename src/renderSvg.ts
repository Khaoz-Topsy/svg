import { progress } from '@/components/progress/progress.ts';
import { svgHeading } from '@/components/svgSetup.ts';
import { windowBarLine } from '@/components/window/windowBarLine.ts';
import { windowButtons } from '@/components/window/windowButtons.ts';
import { windowTitleIcon } from '@/components/window/windowTitleIcon.ts';
import { PublicImage } from '@/constants/image.ts';
import { svgConstants } from '@/constants/svg.ts';
import type { ISvgSlide } from '@/contracts/svgSlide.ts';
import { readSvg } from '@/helpers/fileHelper.ts';
import { themes, type ThemeKey } from './constants/theme.ts';
import { layoutBackground } from './layouts/layoutBackground.ts';

export const renderSvgWrapper = async (themeKey: ThemeKey, inner: string): Promise<string> => {
  const imagePreloads: Array<string> = await preloadImages(themeKey);
  return `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 ${svgConstants.width} ${svgConstants.height}"
    overflow="hidden"
    data-date-rendered="${new Date().toISOString()}"
  >
    ${svgHeading({
      themeKey,
      imagePreloads: imagePreloads.join('\r\n'),
    })}

    ${layoutBackground(themeKey)}
    ${inner}
  </svg>`;
};

export const renderSvgOuterSSG = async (themeKey: ThemeKey, svgSlideContents: Array<string>): Promise<string> =>
  renderSvgWrapper(
    themeKey,
    `${svgSlideContents.join('\r\n')}
    
    ${windowTitleIcon()}
    ${windowButtons()}
    ${windowBarLine(themes[themeKey])}
  `,
  );

export const renderSvgSlide = async (
  slideObj: ISvgSlide, //
  themeKey: ThemeKey,
  slideIndex: number,
  numberOfSlides: number,
): Promise<string> =>
  renderSvgWrapper(
    themeKey,
    `    
    ${slideObj.content ?? ''}
    ${progress({ slideIndex, numberOfSlides })}

    ${windowTitleIcon()}
    ${windowButtons()}
    ${windowBarLine(themes[themeKey])}
  `,
  );

const preloadImages = (themeKey: ThemeKey): Promise<Array<string>> => {
  const theme = themes[themeKey];
  let imagePreloadsTasks: Array<Promise<string>> = [
    readSvg(theme, PublicImage.kurtLourens, (doc) => {
      const elem = doc.querySelector('g') as SVGSVGElement;
      if (elem == null) return '';

      elem.setAttribute('id', 'kurtLourens');
      return elem.outerHTML;
    }),
    readSvg(theme, PublicImage.standing, (doc) => {
      const innerSvg = doc?.children?.[0]?.innerHTML ?? '';
      if (innerSvg == null) return '';

      return `<g id="standing">${innerSvg}</g>`;
    }),
    readSvg(theme, PublicImage.pitch, (doc) => {
      const innerSvg = doc?.children?.[0]?.innerHTML ?? '';
      if (innerSvg == null) return '';

      return `<g id="pitch">${innerSvg}</g>`;
    }),
    readSvg(theme, PublicImage.about, (doc) => {
      const elem = doc.querySelector('g') as SVGSVGElement;
      if (elem == null) return '';

      elem.setAttribute('id', 'about');
      return elem.outerHTML;
    }),
    readSvg(theme, PublicImage.alien, (doc) => {
      const innerSvg = doc?.children?.[0]?.innerHTML ?? '';
      if (innerSvg == null) return '';

      return `<g id="alien">${innerSvg}</g>`;
    }),
    readSvg(theme, PublicImage.cool, (doc) => {
      const elem = doc.querySelector('g') as SVGSVGElement;
      if (elem == null) return '';

      elem.setAttribute('id', 'cool');
      return elem.outerHTML;
    }),
    readSvg(theme, PublicImage.review, (doc) => {
      const elem = doc.querySelector('g') as SVGSVGElement;
      if (elem == null) return '';

      elem.setAttribute('id', 'review');
      return elem.outerHTML;
    }),
    readSvg(theme, PublicImage.tooltip, (doc) => {
      const elem = doc.querySelector('g') as SVGSVGElement;
      if (elem == null) return '';

      elem.setAttribute('id', 'tooltip');
      return elem.outerHTML;
    }),
    readSvg(theme, PublicImage.qrCode, (doc) => {
      const innerSvg = doc?.children?.[0]?.innerHTML ?? '';
      if (innerSvg == null) return '';

      return `<g id="qrCode">${innerSvg}</g>`;
    }),
    readSvg(theme, PublicImage.undraw, (doc) => {
      const elem = doc.querySelector('g') as SVGSVGElement;
      if (elem == null) return '';

      elem.setAttribute('id', 'undraw');
      return elem.outerHTML;
    }),
    readSvg(theme, PublicImage.swatChart, (doc) => {
      const innerSvg = doc?.children?.[0]?.innerHTML ?? '';
      if (innerSvg == null) return '';

      return `<g id="swatChart" style="border-radius: 150px;">${innerSvg}</g>`;
    }),
    readSvg(theme, PublicImage.ghost, (doc) => {
      const innerSvg = doc?.children?.[0]?.innerHTML ?? '';
      if (innerSvg == null) return '';

      return `<g id="ghost">${innerSvg}</g>`;
    }),
  ];
  return Promise.all(imagePreloadsTasks);
};
