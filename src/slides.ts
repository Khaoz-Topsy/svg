import type { ISlideContext } from './contracts/slideContext';
import type { ISvgSlide } from './contracts/svgSlide';
import { slideIntro } from './slides/1-foundation/1-intro/intro';
import { slideAgenda } from './slides/1-foundation/2-agenda/agenda';
import { slideSvgSize } from './slides/1-foundation/3-basics/svgSize';
import { slideWhatIsAnSvg } from './slides/1-foundation/whatIsSvg';
import { slideEmpty } from './slides/slideBase';

export const getAllSlides = (): Array<(props: ISlideContext) => Promise<ISvgSlide>> => [
  slideIntro, //
  slideAgenda,
  slideSvgSize,
  slideWhatIsAnSvg,
  () => Promise.resolve(slideEmpty),
];
