import { progress } from '@/components/progress/progress.ts';
import { svgHeading } from '@/components/svgSetup.ts';
import { windowBarLine } from '@/components/window/windowBarLine.ts';
import { windowButtons } from '@/components/window/windowButtons.ts';
import { windowTitleIcon } from '@/components/window/windowTitleIcon.ts';
import { PublicImage } from '@/constants/image.ts';
import { svgConstants } from '@/constants/svg.ts';
import type { ISvgSlide } from '@/contracts/svgSlide.ts';
import { readSvg } from '@/helpers/fileHelper.ts';
import { layoutBackground } from './layouts/layoutBackground.ts';

export const renderSvgWrapper = async (inner: string): Promise<string> => {
  const imagePreloads: Array<string> = await preloadImages();
  return `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 ${svgConstants.width} ${svgConstants.height}"
    overflow="hidden"
    data-date-rendered="${new Date().toISOString()}"
  >
    ${svgHeading({
      imagePreloads: imagePreloads.join('\r\n'),
    })}

    ${layoutBackground}
    ${inner}
  </svg>`;
};

export const renderSvgOuterSSG = async (svgSlideContents: Array<string>): Promise<string> =>
  renderSvgWrapper(`
    ${svgSlideContents.join('\r\n')}
    
    ${windowTitleIcon()}
    ${windowButtons()}
    ${windowBarLine()}
  `);

export const renderSvgSlide = async (
  slideObj: ISvgSlide, //
  slideIndex: number,
  numberOfSlides: number,
): Promise<string> =>
  renderSvgWrapper(`    
    ${slideObj.content ?? ''}
    ${progress({ slideIndex, numberOfSlides })}

    ${windowTitleIcon()}
    ${windowButtons()}
    ${windowBarLine()}
  `);

const preloadImages = (): Promise<Array<string>> => {
  let imagePreloadsTasks: Array<Promise<string>> = [
    readSvg(PublicImage.kurtLourens, (doc) => {
      const elem = doc.querySelector('g') as SVGSVGElement;
      if (elem == null) return '';

      elem.setAttribute('id', 'kurtLourens');
      return elem.outerHTML;
    }),
    readSvg(PublicImage.standing, (doc) => {
      const innerSvg = doc?.children?.[0]?.innerHTML ?? '';
      if (innerSvg == null) return '';

      return `<g id="standing">${innerSvg}</g>`;
    }),
    readSvg(PublicImage.pitch, (doc) => {
      const innerSvg = doc?.children?.[0]?.innerHTML ?? '';
      if (innerSvg == null) return '';

      return `<g id="pitch">${innerSvg}</g>`;
    }),
    readSvg(PublicImage.about, (doc) => {
      const elem = doc.querySelector('g') as SVGSVGElement;
      if (elem == null) return '';

      elem.setAttribute('id', 'about');
      return elem.outerHTML;
    }),
    readSvg(PublicImage.alien, (doc) => {
      const innerSvg = doc?.children?.[0]?.innerHTML ?? '';
      if (innerSvg == null) return '';

      return `<g id="alien">${innerSvg}</g>`;
    }),
    readSvg(PublicImage.cool, (doc) => {
      const elem = doc.querySelector('g') as SVGSVGElement;
      if (elem == null) return '';

      elem.setAttribute('id', 'cool');
      return elem.outerHTML;
    }),
    readSvg(PublicImage.review, (doc) => {
      const elem = doc.querySelector('g') as SVGSVGElement;
      if (elem == null) return '';

      elem.setAttribute('id', 'review');
      return elem.outerHTML;
    }),
    readSvg(PublicImage.tooltip, (doc) => {
      const elem = doc.querySelector('g') as SVGSVGElement;
      if (elem == null) return '';

      elem.setAttribute('id', 'tooltip');
      return elem.outerHTML;
    }),
    readSvg(PublicImage.qrCode, (doc) => {
      const innerSvg = doc?.children?.[0]?.innerHTML ?? '';
      if (innerSvg == null) return '';

      return `<g id="qrCode">${innerSvg}</g>`;
    }),
    readSvg(PublicImage.undraw, (doc) => {
      const elem = doc.querySelector('g') as SVGSVGElement;
      if (elem == null) return '';

      elem.setAttribute('id', 'undraw');
      return elem.outerHTML;
    }),
  ];
  return Promise.all(imagePreloadsTasks);
};
