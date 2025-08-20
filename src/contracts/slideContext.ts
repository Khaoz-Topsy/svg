import type { EnvMode } from '@/constants/env';
import type { Prettify } from '@/constants/prettify';

export type BaseSlideContext = {
  id: string;
  currentSlideIndex: number;
  numberOfSlides: number;
};

export type WebSlideContext = BaseSlideContext & {};

export type SsgSlideContext = BaseSlideContext & {
  env: EnvMode;
  prevSlideId: string;
  showNotes?: boolean;
};

export type SlideContext = Prettify<
  | ({
      env: 'web';
    } & WebSlideContext)
  | ({
      env: 'ssg';
    } & SsgSlideContext)
>;
