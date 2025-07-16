import { slideBeginValue } from '../../../../components/common/slideAnimation.ts';
import { animateFadeIn } from '../../../../components/core/animate';
import { svgConstants } from '../../../../constants/svg';
import type { SlideContext } from '../../../../contracts/slideContext';
import { getPreviousSlideIndex } from '../../../../helpers/contextHelper.ts';

interface IProps {
  x: number;
  y: number;
  width: number;
  height: number;
  ctx: SlideContext;
  animatePosition: number;
  svgContent: string;
  codeContent?: string;
  hideCardBorder?: boolean;
  overrideForeignObjectX?: number;
  overrideCardHeight?: number;
}

const drawingCardDelay = 500;
export const defsCard = (props: IProps) => {
  const previousSlideId = getPreviousSlideIndex(props.ctx);
  const getBegin = (numTicksDelay: number) => slideBeginValue(previousSlideId, drawingCardDelay * numTicksDelay);

  const renderCodeBlock = (codeContent?: string) => {
    if (codeContent == null) return '';

    return `
    <foreignObject x="40" y="25" width="1000" height="600">
        <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 1.5em;">
          ${codeContent}
      </div>
    </foreignObject>
    `;
  };

  return `
    <g opacity="0" transform="translate(${props.x} ${props.y})">
        ${animateFadeIn({ duration: '1s', begin: getBegin(props.animatePosition - 1) })}
        <rect 
          width="${props.width}"
          height="${props.height}"
          x="0"
          y="0"
          rx="50"
          fill="transparent"
          stroke="${svgConstants.colour.secondary}"
          stroke-width="3"
        >
        </rect>
        

        ${renderCodeBlock(props.codeContent)}
        
        ${props.svgContent}
    </g>`;
};
