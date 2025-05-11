import { progress } from './components/progress/progress.ts';
import { svgHeading } from './components/svgSetup.ts';
import { windowButtons } from './components/window/windowButtons.ts';
import { windowTitleIcon } from './components/window/windowTitleIcon.ts';
import { svgConstants } from './constants/svg.ts';
import type { ISvgSlide } from './contracts/svgSlide.ts';
import { layoutBackground } from './layouts/layoutBackground.ts';

export const renderSvg = async (
  slides: Array<ISvgSlide>, //
  slideIndex: number,
  numberOfSlides: number,
): Promise<string> => `
  <svg viewBox="0 0 ${svgConstants.width} ${svgConstants.height}" xmlns="http://www.w3.org/2000/svg">
      ${svgHeading}
      ${layoutBackground()}
      
      ${await windowTitleIcon()}
      ${windowButtons()}
      <path d="M0 65 l${svgConstants.width} 0" stroke="white" stroke-opacity="0.3" />

      ${slides[slideIndex]?.content ?? ''}
      ${progress({ slideIndex, numberOfSlides })}
  </svg>`;
