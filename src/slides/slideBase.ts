import { animateFadeIn } from '../components/core/animate';
import { svgConstants } from '../constants/svg';

export const slideBase = (props: {
  id: string; //
  animation?: undefined | 'fadeIn';
  attr?: string;
  content: string;
}) => {
  let attr = props.attr ?? '';
  let preContent = '';

  if (props.animation == 'fadeIn') {
    attr += 'opacity="0"';
    preContent = animateFadeIn({});
  }

  return `<g id="${props.id}" ${attr}>
        ${preContent}
        ${props.content}
    </g>`;
};

export const slideEmpty = { content: `<g id="empty"></g>`, notes: 'empty' };
export const slideCenterText = (text: string) => ({
  notes: text,
  content: `
    <text x="${svgConstants.width / 2}" y="${svgConstants.height / 2}" 
        fill="white" font-size="150" text-anchor="middle"
    >${text}</text>
`,
});
