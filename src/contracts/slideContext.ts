import type { EnvMode } from '@/constants/env';
import type { Prettify } from '@/constants/prettify';
import type { ThemeKey } from '@/constants/theme';

export type BaseSlideContext = {
  id: string;
  themeKey: ThemeKey;
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
  | ({
      env: 'auto-slide';
    } & SsgSlideContext)
>;
