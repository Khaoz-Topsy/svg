import { animateFadeIn } from '../../../../components/core/animate';
import { svgConstants } from '../../../../constants/svg';

interface IProps {
  x: number;
  y: number;
  animatePosition: number;
  svgContent: string;
  codeContent: string;
  overrideForeignObjectX?: number;
  overrideCardHeight?: number;
}
export const slideBasicDrawingCard = (props: IProps) => {
  return `
    <g class="noselect" opacity="0" transform="translate(${props.x} ${props.y})">
        ${animateFadeIn({ duration: '1s', initialDelay: `${(props.animatePosition - 1) * 500}ms` })}
        <rect 
            width="${svgConstants.width / 2 - 150}"
            height="${props.overrideCardHeight ?? 250}"
            x="0"
            y="0"
            rx="50"
            fill="transparent"
            stroke="${svgConstants.colour.secondary}"
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
