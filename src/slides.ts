import { slideIntro } from './slides/1-foundation/intro';
import { slideEmpty } from './slides/slideBase';
import { slideWhatIsAnSvg } from './slides/1-foundation/whatIsSvg';
import type { ISvgSlide } from './contracts/svgSlide';

export const getAllSlides = async (): Promise<Array<ISvgSlide>> => [
  await slideIntro(), //
  await slideWhatIsAnSvg(),
  slideEmpty,
];
