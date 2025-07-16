import { slideAnimationFadeIn } from '../components/common/slideAnimation';
import { svgConstants } from '../constants/svg';
import type { SlideContext } from '../contracts/slideContext';
import { layoutBackground } from '../layouts/layoutBackground';

export const slideBase = (props: { ctx: SlideContext; attr?: string; content: string }) => {
  let attr = props.attr ?? '';
  let buttonSvg = '';
  let startOpacity = '0';
  let preContent = slideAnimationFadeIn({ ctx: props.ctx, duration: '250ms' });

  if (props.ctx.env == 'web') {
    //
  }
  if (props.ctx.env == 'ssg') {
    const lastSlideIndex = props.ctx.numberOfSlides - 1;
    const isLastSlide = props.ctx.currentSlideIndex >= lastSlideIndex;

    buttonSvg = `
      <g id="${props.ctx.id}-navigate-btn" 
        transform="translate(${svgConstants.width - 160} ${svgConstants.height - 100})">

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
          id="${props.ctx.id}-slide-anim"
          href="#${props.ctx.id}-navigate-btn" 
          attributename="opacity"
          from="1"
          to="0"
          dur="50ms"
          begin="click"
          fill="freeze"
        />
        <animateTransform
          href="#${props.ctx.id}"
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="1000ms"
          from="0 500 500"
          to="90 500 500"
          repeatCount="1"
          begin="${props.ctx.id}-slide-anim.begin+50ms" 
        />
        <animateMotion
          href="#${props.ctx.id}"
          dur="500ms"
          repeatCount="1"
          fill="freeze"
          path="M0,0 L -300 ${svgConstants.height}"
          begin="${props.ctx.id}-slide-anim.begin+50ms" 
        />
      </g>`;
    if (isLastSlide) buttonSvg = '';
  }

  if (props.ctx.currentSlideIndex == 0) {
    startOpacity = '1';
  }

  return `<g id="${props.ctx.id}" ${attr} opacity="${startOpacity}">
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
