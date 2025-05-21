import { progress } from './components/progress/progress.ts';
import { svgHeading } from './components/svgSetup.ts';
import { windowBarLine } from './components/window/windowBarLine.ts';
import { windowButtons } from './components/window/windowButtons.ts';
import { windowTitleIcon } from './components/window/windowTitleIcon.ts';
import { svgConstants } from './constants/svg.ts';
import type { ISvgSlide } from './contracts/svgSlide.ts';
import { layoutBackground } from './layouts/layoutBackground.ts';

export const renderSvgWrapper = async (inner: string): Promise<string> => `
  <svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 ${svgConstants.width} ${svgConstants.height}"
    overflow="hidden"
  >
    ${layoutBackground}
    ${svgHeading}

    ${inner}
  </svg>`;

export const renderSvgOuterSSG = async (svgSlideContents: Array<string>): Promise<string> =>
  renderSvgWrapper(`
    ${svgSlideContents.join('\r\n')}
    
    ${await windowTitleIcon()}
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

    ${await windowTitleIcon()}
    ${windowButtons()}
    ${windowBarLine()}
  `);
