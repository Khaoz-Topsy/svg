import { progress } from './components/progress/progress.ts';
import { svgHeading } from './components/svgSetup.ts';
import { windowBarLine } from './components/window/windowBarLine.ts';
import { windowButtons } from './components/window/windowButtons.ts';
import { windowTitleIcon } from './components/window/windowTitleIcon.ts';
import { svgConstants } from './constants/svg.ts';
import type { ISvgSlide } from './contracts/svgSlide.ts';
import { layoutBackground } from './layouts/layoutBackground.ts';

export const renderSvgOuter = async (inner: string): Promise<string> => `
  <svg viewBox="0 0 ${svgConstants.width} ${svgConstants.height}" xmlns="http://www.w3.org/2000/svg">
      ${svgHeading}
      ${layoutBackground}
      
      ${await windowTitleIcon()}
      ${windowButtons()}
      ${windowBarLine()}

      ${inner}
  </svg>`;

export const renderSvgSlide = (
  slideObj: ISvgSlide, //
  slideIndex: number,
  numberOfSlides: number,
): Promise<string> =>
  renderSvgOuter(`
  ${slideObj.content ?? ''}
  ${progress({ slideIndex, numberOfSlides })}
`);

export const renderSvgSlides = (svgSlideContents: Array<string>): Promise<string> =>
  renderSvgOuter(svgSlideContents.join('\r\n'));
