import { slideBeginValue } from '@/components/common/slideAnimation.ts';
import { animateFadeIn } from '@/components/core/animate';
import { svgConstants } from '@/constants/svg';
import { themes } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext.ts';
import { getPreviousSlideIndex } from '@/helpers/contextHelper.ts';

interface IProps {
  x: number;
  y: number;
  ctx: SlideContext;
  animatePosition: number;
  svgContent: string;
  codeContent: string;
  overrideForeignObjectX?: number;
  overrideCardHeight?: number;
}
const drawingCardDelay = 500;
export const slideBasicDrawingCard = (props: IProps) => {
  const previousSlideId = getPreviousSlideIndex(props.ctx);
  const getBegin = (numTicksDelay: number) => slideBeginValue(previousSlideId, drawingCardDelay * numTicksDelay);

  return `
    <g opacity="0" transform="translate(${props.x} ${props.y})">
        ${animateFadeIn({ duration: '1s', begin: getBegin(props.animatePosition - 1) })}
        <rect 
            width="${svgConstants.width / 2 - 150}"
            height="${props.overrideCardHeight ?? 250}"
            x="0"
            y="0"
            rx="50"
            fill="transparent"
            stroke="${themes[props.ctx.themeKey].secondary}"
            stroke-width="3"
        >
        </rect>
        
        ${props.svgContent}

        <foreignObject x="${props.overrideForeignObjectX ?? '350'}" y="25" width="600" height="600">
        <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 1.5em;">
            ${props.codeContent}
            <br />              
        </div>
        </foreignObject>
    </g>`;
};
