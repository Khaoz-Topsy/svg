import { progress } from '@/components/progress/progress.ts';
import { svgHeading } from '@/components/svgSetup.ts';
import { windowBarLine } from '@/components/window/windowBarLine.ts';
import { windowButtons } from '@/components/window/windowButtons.ts';
import { windowTitleIcon } from '@/components/window/windowTitleIcon.ts';
import { PublicImage, svgLoaders } from '@/constants/image.ts';
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
    <g clip-path="url(#presentation-clip)">
      ${inner}
    </g>
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
): Promise<string> => {
  const slideContent = await slideObj.content();
  return renderSvgWrapper(
    themeKey,
    `    
    ${slideContent ?? ''}
    ${progress({ slideIndex, numberOfSlides })}

    ${windowTitleIcon()}
    ${windowButtons()}
    ${windowBarLine(themes[themeKey])}
  `,
  );
};

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
    readSvg(theme, PublicImage.facebook, (doc) => {
      const elem = doc.querySelector('g') as SVGSVGElement;
      if (elem == null) return '';

      elem.removeAttribute('xmlns');
      return elem.outerHTML;
    }),
    readSvg(theme, PublicImage.hacker, (doc) => {
      const innerSvg = doc?.children?.[0]?.innerHTML ?? '';
      if (innerSvg == null) return '';

      return `<g id="hacker">${innerSvg}</g>`;
    }),
    readSvg(theme, PublicImage.kurtGithubHeader, (doc) => {
      const innerSvg = doc?.children?.[0]?.innerHTML ?? '';
      if (innerSvg == null) return '';

      return `<g id="kurtGithubHeader">${innerSvg}</g>`;
    }),
    readSvg(theme, PublicImage.githubHeader, (doc) => {
      const innerSvg = doc?.children?.[0]?.innerHTML ?? '';
      if (innerSvg == null) return '';

      return `<g id="githubHeader">${innerSvg}</g>`;
    }),
    readSvg(theme, PublicImage.webDeveloper, (doc) => {
      const innerSvg = doc?.children?.[0]?.innerHTML ?? '';
      if (innerSvg == null) return '';

      return `<g id="webDeveloper">${innerSvg}</g>`;
    }),
  ];

  for (const svgLoader of svgLoaders) {
    imagePreloadsTasks.push(
      readSvg(theme, `./assets/img/loaders/${svgLoader.id}.svg`, (doc) => {
        const innerSvg = doc?.children?.[0]?.innerHTML ?? '';
        if (innerSvg == null) return '';

        return `<g id="${svgLoader.id}">${innerSvg}</g>`;
      }),
    );
  }
  return Promise.all(imagePreloadsTasks);
};
