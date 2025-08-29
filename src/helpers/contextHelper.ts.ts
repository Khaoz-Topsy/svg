import { isServerMode } from '@/constants/env';
import type { SlideContext, SsgSlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { getAllSlides } from '@/slides';

export const getPreviousSlideIndex = (ctx: SlideContext) => {
  let previousSlideId = undefined;
  if (isServerMode(ctx.env)) {
    const ssgCtx = ctx as SsgSlideContext;
    previousSlideId = ssgCtx.prevSlideId;
  }
  return previousSlideId;
};

export const getPreviousSlide = async (ctx: SlideContext): Promise<ISvgSlide | undefined> => {
  let previousSlideId = undefined;
  if (isServerMode(ctx.env)) {
    const ssgCtx = ctx as SsgSlideContext;
    previousSlideId = ssgCtx.prevSlideId;
  }

  const allSlides = getAllSlides();
  const prevSlide = allSlides.find((s) => s.id == previousSlideId);
  const newContext: SsgSlideContext = {
    ...ctx,
    currentSlideIndex: ctx.currentSlideIndex + 1, //
    prevSlideId: ctx.id,
  };
  return await prevSlide?.slideFunc(newContext);
};
