import { slideAnimationFadeIn, slideBeginValue } from '@/components/common/slideAnimation';
import { progress } from '@/components/progress/progress';
import { windowTitle } from '@/components/window/windowTitle';
import { isServerMode } from '@/constants/env';
import { svgConstants } from '@/constants/svg';
import { themes } from '@/constants/theme';
import type { SlideContext, SsgSlideContext } from '@/contracts/slideContext';
import type { ISvgSlideServerSideOptions } from '@/contracts/svgSlide';
import { getPreviousSlideIndex } from '@/helpers/contextHelper.ts';
import { getAllSlides } from '@/slides';
import { layoutBackground } from '../layouts/layoutBackground';
import { generateNotesPanel } from '../server/notesPanel';

interface ISlideBase {
  ctx: SlideContext; //
  attr?: string;
  title: string;
  ssg: ISvgSlideServerSideOptions;

  //
  content: string;
  notes: string;
  publicNotes?: string;
}

export const slideBase = async (props: ISlideBase) => {
  let attr = props.attr ?? '';
  let buttonSvg = '';
  let autoAnimationSvg = '';
  let startOpacity = '0';
  let preContent = slideAnimationFadeIn({ ctx: props.ctx, duration: '250ms' });
  let progressContent = '';
  let notesContent = '';

  const theme = themes[props.ctx.themeKey];

  if (props.ctx.env == 'web') {
    //
  }
  if (isServerMode(props.ctx.env)) {
    const serverCtx = props.ctx as SsgSlideContext;
    const lastSlideIndex = serverCtx.numberOfSlides - 1;
    const isLastSlide = serverCtx.currentSlideIndex >= lastSlideIndex;
    progressContent = progress({ slideIndex: serverCtx.currentSlideIndex, numberOfSlides: serverCtx.numberOfSlides });
    if (serverCtx.showNotes == true) {
      notesContent = generateNotesPanel(serverCtx.id, props.notes);
    }

    const ssgSlideAnim = `
      <animateTransform
        href="#${serverCtx.id}"
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="1000ms"
        from="0 500 500"
        to="90 500 500"
        repeatCount="1"
        begin="${serverCtx.id}-slide-anim.end+50ms" 
      />
      <animateMotion
        href="#${serverCtx.id}"
        dur="500ms"
        repeatCount="1"
        fill="freeze"
        path="M0,0 L -300 ${svgConstants.height}"
        begin="${serverCtx.id}-slide-anim.end+50ms" 
      />`;

    if (serverCtx.transition == 'click' && isLastSlide == false) {
      buttonSvg = `
      <g id="${serverCtx.id}-navigate-btn" 
        transform="translate(${svgConstants.width - 160} ${svgConstants.height - 100})">

        <rect x="0" y="0" rx="20"
          width="160" height="100"
          fill="${theme.primary}"
          stroke="${theme.slideBackground}" stroke-width="0"
        />
        <polyline
          points="30,40 90,40 90,20 140,55 90,90 90,70 30,70"
          fill="${theme.slideBackground}"
        />
        <animate 
          id="${serverCtx.id}-slide-anim"
          href="#${serverCtx.id}-navigate-btn" 
          attributename="opacity"
          from="1"
          to="0"
          dur="50ms"
          begin="click"
          fill="freeze"
        />
        ${ssgSlideAnim}
      </g>`;
    }

    if (serverCtx.transition == 'svg-animation' && isLastSlide == false) {
      const animTags: Array<string> = [];
      if (serverCtx.currentSlideIndex == 0) {
        animTags.push(`<animate
          id="${serverCtx.id}-slide-anim"
          attributename="opacity"
          from="1"
          to="0"
          dur="1ms"
          begin="${props.ssg.secondsToDisplay}s"
          fill="freeze"
        />`);
      } else {
        const previousSlideId = getPreviousSlideIndex(serverCtx);
        animTags.push(`
          <animate
            id="${serverCtx.id}-slide-anim"
            attributename="opacity"
            from="1"
            to="0"
            dur="${props.ssg.secondsToDisplay}s"
            begin="${slideBeginValue(previousSlideId, theme.defaultDelayInMs, 'end')}"
            fill="freeze"
          />
        `);
      }
      animTags.push(ssgSlideAnim);
      autoAnimationSvg = animTags.join('\n');
    }

    if (serverCtx.transition == 'css' && isLastSlide == false) {
      if ((attr?.length ?? 0) > 1) console.warn(`attr has content and will be overridden: '${attr}'`);
      let accumulatedDelay = props.ssg.secondsToDisplay;
      const allSlides = getAllSlides();

      for (let slideIndexOffset = 0; slideIndexOffset < serverCtx.currentSlideIndex; slideIndexOffset++) {
        const slideIndex = serverCtx.numberOfSlides - 1 - slideIndexOffset;
        const slide = allSlides[slideIndex];
        const slideResult = await slide.slideFunc(serverCtx);
        accumulatedDelay += slideResult.ssg.secondsToDisplay;
      }
      attr = `class="next-slide-anim" style="--delay: ${accumulatedDelay}s; --duration: 3s"`;

      autoAnimationSvg = '';
    }
  }

  if (props.ctx.currentSlideIndex == 0) {
    startOpacity = '1';
    preContent = '';
  }

  return `<g id="${props.ctx.id}" ${attr} opacity="${startOpacity}">
      ${layoutBackground(props.ctx.themeKey)}
      ${preContent}
      ${windowTitle(theme, props.title)}
      ${props.content}
      ${progressContent}
      ${notesContent}
      ${autoAnimationSvg}
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
