import type { EnvMode } from '../constants/env';
import type { Prettify } from '../constants/prettify';

export type BaseSlideContext = {
  id: string;
  currentSlideIndex: number;
};

export type WebSlideContext = BaseSlideContext & {};

export type SsgSlideContext = BaseSlideContext & {
  env: EnvMode;
  numberOfSlides: number;
  prevSlideId: string;
};

export type SlideContext = Prettify<
  | ({
      env: 'web';
    } & WebSlideContext)
  | ({
      env: 'ssg';
    } & SsgSlideContext)
>;
