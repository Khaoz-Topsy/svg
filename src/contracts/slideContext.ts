import type { EnvMode } from '../constants/env';

export interface ISlideContext {
  env: EnvMode;
  currentSlideIndex: number;
  numberOfSlides: number;
}
