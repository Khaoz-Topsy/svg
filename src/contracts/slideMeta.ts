import type { SlideContext } from './slideContext';
import type { ISvgSlide } from './svgSlide';

export type SlideMeta = {
  id: string;
  slideFunc: (props: SlideContext) => Promise<ISvgSlide>;
};
