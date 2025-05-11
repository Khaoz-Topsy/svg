import type { RenderOriginType } from '../constants/renderOrigin';

export const handleSlideIndex = (
  currentSlideIndex: number, //
  newSlideIndex: number,
  renderOrigin: RenderOriginType,
  lastSlideIndex: number,
): [number, boolean] => {
  if (renderOrigin != 'initial' && currentSlideIndex == newSlideIndex) return [currentSlideIndex, true];
  //   slideIndex = newSlideIndex;
  if (isNaN(newSlideIndex)) return [0, false];
  if (newSlideIndex < 0) return [0, false];
  if (newSlideIndex > lastSlideIndex) return [lastSlideIndex, false];
  return [newSlideIndex, false];
};
