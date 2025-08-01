import type { RenderOriginType } from '@/constants/renderOrigin';

export const handleSlideIndex = (
  currentSlideIndex: number, //
  newSlideIndex: number,
  renderOrigin: RenderOriginType,
  lastSlideIndex: number,
): [number, boolean] => {
  const newSlideIndexSafe = Math.min(
    Math.max(newSlideIndex, 0), //
    lastSlideIndex,
  );
  if (renderOrigin != 'initial' && currentSlideIndex == newSlideIndexSafe) return [currentSlideIndex, true];

  if (isNaN(newSlideIndex)) return [0, false];
  if (newSlideIndex < 0) return [0, false];
  if (newSlideIndex > lastSlideIndex) return [lastSlideIndex, false];
  return [newSlideIndex, false];
};
