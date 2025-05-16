import type { ISlideContext } from './contracts/slideContext';
import type { ISvgSlide } from './contracts/svgSlide';
import { slideIntro } from './slides/1-foundation/1-intro/intro';
import { slideAgenda } from './slides/1-foundation/2-agenda/agenda';
import { slideBasicDrawing } from './slides/2-content/1-basics/basicDrawing/basicDrawing';
import { slideSvgSize } from './slides/2-content/1-basics/svgSize';
import { slideWhatIsAnSvg } from './slides/2-content/1-basics/whatIsSvg';
import { slideLinks } from './slides/3-conclusion/3-end/links';

export const getAllSlides = (): Array<(props: ISlideContext) => Promise<ISvgSlide>> => [
  // Foundation
  slideIntro,
  slideAgenda,

  // Content
  slideWhatIsAnSvg,
  slideBasicDrawing,
  slideSvgSize,

  // Conclusion
  slideLinks,
];
