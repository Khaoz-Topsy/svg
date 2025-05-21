import type { SlideContext, SsgSlideContext } from '../contracts/slideContext';

export const getPreviousSlideIndex = (ctx: SlideContext) => {
  let previousSlideId = undefined;
  if (ctx.env == 'ssg') {
    const ssgCtx = ctx as SsgSlideContext;
    previousSlideId = ssgCtx.prevSlideId;
  }
  return previousSlideId;
};
