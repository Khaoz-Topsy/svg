import type { SlideContext, SsgSlideContext } from '../../contracts/slideContext';
import { animateFadeIn } from '../core/animate';

interface ISlideAnimationFadeInProps {
  ctx: SlideContext;
  duration?: string;
}
export const slideAnimationFadeIn = (props: ISlideAnimationFadeInProps) => {
  let previousSlideId = undefined;
  if (props.ctx.env == 'ssg') {
    const ctx = props.ctx as SsgSlideContext;
    previousSlideId = ctx.prevSlideId;
  }

  let begin = '';
  if (previousSlideId != undefined) {
    begin = `${previousSlideId}-slide-anim.begin+50ms`;
  }

  return animateFadeIn({
    duration: props.duration ?? '1s',
    begin,
  });
};

export const slideBeginValue = (previousSlideId: string | undefined, milli: number) => {
  if (previousSlideId != undefined) {
    return `${previousSlideId}-slide-anim.begin+${milli}ms`;
  }
  return `${milli}ms`;
};
