import { slideBeginValue } from '@/components/common/slideAnimation.ts';
import { animateFadeIn } from '@/components/core/animate';
import { themes } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext.ts';
import { getPreviousSlideIndex } from '@/helpers/contextHelper.ts';

interface IProps {
  x: number;
  y: number;
  ctx: SlideContext;
  animatePosition: number;
  svgContent: string;
}
export const whyIsSvgCard = (props: IProps) => {
  const theme = themes[props.ctx.themeKey];
  const previousSlideId = getPreviousSlideIndex(props.ctx);
  const getBegin = (numTicksDelay: number) => slideBeginValue(previousSlideId, theme.defaultDelayInMs * numTicksDelay);

  return `
    <g class="noselect" opacity="0" transform="translate(${props.x} ${props.y})">
        ${animateFadeIn({ duration: '1s', begin: getBegin(props.animatePosition - 1) })}
        <rect 
          width="500"
          height="800"
          x="0"
          y="0"
          rx="50"
          fill="transparent"
          stroke="${theme.secondary}"
          stroke-width="3"
        >
        </rect>
        
        ${props.svgContent}
    </g>`;
};
