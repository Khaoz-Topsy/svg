import { animateFadeIn } from '../components/core/animate';
import { svgConstants } from '../constants/svg';
import type { ISlideContext } from '../contracts/slideContext';
import { layoutBackground } from '../layouts/layoutBackground';

export const slideBase = (props: {
  id: string; //
  ctx: ISlideContext;
  webAnimation?: undefined | 'fadeIn';
  attr?: string;
  content: string;
}) => {
  let attr = props.attr ?? '';
  let preContent = '';
  let buttonSvg = '';

  const lastSlideIndex = props.ctx.numberOfSlides - 1;
  const isLastSlide = props.ctx.currentSlideIndex >= lastSlideIndex;

  if (props.ctx.env == 'web') {
    if (props.webAnimation == 'fadeIn') {
      attr += ' opacity="0"';
      preContent = animateFadeIn({});
    }
  } else {
    buttonSvg = `
      <g id="${props.id}-navigate-btn" transform="translate(${svgConstants.width - 160} ${svgConstants.height - 100})">
        <rect x="0" y="0" rx="20"
          width="160" height="100"
          fill="${svgConstants.colour.primary}"
          stroke="${svgConstants.colour.slideBackground}" stroke-width="0"
        />
        <polyline
          points="30,40 90,40 90,20 140,55 90,90 90,70 30,70"
          fill="${svgConstants.colour.slideBackground}"
        />
        <animate 
          id="${props.id}-slide-anim"
          href="#${props.id}-navigate-btn" 
          attributename="opacity"
          from="1" 
          to="0" 
          dur="50ms"
          begin="click" 
          fill="freeze"  
        />
        <animateTransform
          href="#${props.id}"
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="1000ms"
          from="0 500 500"
          to="90 500 500"
          repeatCount="1"
          begin="${props.id}-slide-anim.begin+50ms" 
        />
        <animateMotion
          href="#${props.id}"
          dur="500ms"
          repeatCount="1"
          fill="freeze"
          path="M0,0 L -300 ${svgConstants.height}"
          begin="${props.id}-slide-anim.begin+50ms" 
        />
      </g>`;
    if (isLastSlide) buttonSvg = '';
  }

  // if (props.ctx.env == 'ssg') {}

  return `<g id="${props.id}" ${attr} opacity="1">
      ${layoutBackground}
      ${preContent}
      ${props.content}
      ${buttonSvg}
    </g>`;
};

export const slideEmpty = { content: `<g id="empty"></g>`, notes: 'empty' };
export const slideCenterText = (text: string) => () =>
  Promise.resolve({
    notes: text,
    content: `
    <text x="${svgConstants.width / 2}" y="${svgConstants.height / 2}" 
        fill="white" font-size="150" text-anchor="middle"
    >${text}</text>
`,
  });

// buttonSvg = `
//   <g transform="translate(${svgConstants.width - 160} ${svgConstants.height - 100})">
//     <rect x="0" y="0" rx="20"
//       width="160" height="100"
//       fill="${svgConstants.colour.primary}"
//       stroke="${svgConstants.colour.slideBackground}" stroke-width="0"
//     />
//     <polyline
//       points="30,40 90,40 90,20 140,55 90,90 90,70 30,70"
//       fill="${svgConstants.colour.slideBackground}"
//     />
//     <animateMotion
//       href="#${props.id}"
//       dur="1s"
//       repeatCount="1"
//       begin="click"
//       fill="freeze"
//       path="M0,0 L -${svgConstants.width} ${svgConstants.height}"
//     />
//   </g>`;
