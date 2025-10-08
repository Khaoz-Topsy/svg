import { svgCode } from '@/components/code/codeSpan';
import { animateFadeIn } from '@/components/core/animate';
import { isServerMode } from '@/constants/env';
import { themes } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { getPreviousSlideIndex } from '@/helpers/contextHelper.ts';
import { readLocalFile } from '@/helpers/fileHelper';
import { notFocussedStyle } from '@/helpers/svgHelper';
import { slideBase } from '@/slides/slideBase';

import notesMd from './circularProgress.md';

export const slideCircularProgress = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const previousSlideId = getPreviousSlideIndex(ctx);
  const theme = themes[ctx.themeKey];
  const code = svgCode(theme.code);

  let percent = 77;
  if (isServerMode(ctx.env) == false) {
    percent = Math.round(Math.random() * 60) + 30;
  }

  const strokeWidth = '12px';
  const radius = 70;
  const centerPoint = radius + 20;
  const strokeDashArray = 2 * 3.14 * radius;
  const strokeDashOffset = strokeDashArray * ((100 - percent) / 100);

  const sharedProperties = {
    ssg: { secondsToDisplay: 3 },
    notes: await readLocalFile(notesMd),
  };
  return {
    content: () =>
      slideBase({
        ctx: ctx,
        title: 'The Fun stuff - Custom Indicators',
        content: `
        <g transform="translate(100, 300) scale(3)">

          <circle
            r="${radius}"
            cx="${centerPoint}"
            cy="${centerPoint}"
            fill="transparent"
            stroke="${theme.background}"
            stroke-width="${strokeWidth}"
          ></circle>
          <circle
            r="${radius}"
            cx="${centerPoint}"
            cy="${centerPoint}"
            fill="transparent"
            stroke="${theme.exampleColour}"
            stroke-linecap="round"
            stroke-width="${strokeWidth}"
            stroke-dasharray="${strokeDashArray}"
            style="transform: rotate(-90deg); transform-box: fill-box; transform-origin: center;"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="${strokeDashArray}"
              to="${strokeDashOffset}"
              dur="1s"
              fill="freeze"
              calcMode="spline"
              keySplines="0.42 0 0.58 1"
            />
          </circle>

          <text x="${centerPoint}" y="${centerPoint + 4}" 
            dominant-baseline="middle" text-anchor="middle" fill="${theme.controlForeground}"
          >
            ${percent} %
          </text>
        </g>
        
        <g opacity="0" transform="translate(100 90)">
          ${animateFadeIn({
            duration: '1s',
            begin: previousSlideId == undefined ? undefined : `${previousSlideId}-slide-anim.begin+1s`,
          })}
          <rect 
            width="1050"
            height="810"
            x="650"
            y="50"
            rx="50"
            fill="transparent"
            stroke="${theme.secondary}"
            stroke-width="3"
          />

          <text x="690" y="120" fill="${theme.controlForeground}" font-size="30">
            ReactJS / SolidJS component
          </text>
          <text x="1400" y="120" fill="${theme.controlForeground}" font-size="20">
            (or your favourite JS framework)
          </text>
            
          <g transform="translate(650 140)">
            <foreignObject x="40" y="15" width="1200" height="800">
              <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 1.5em;">
                ${code.tag('export const', notFocussedStyle)}
                ${code.value('CircularProgress', notFocussedStyle)}
                ${code.tag('= (props) => {', notFocussedStyle)}
                <br />
                ${code.value('// setup variables from props etc...', { ...notFocussedStyle, tabLevel: 1 })}
                <br />

                
                ${code.keyValue(['return', ' (', ''], { ...notFocussedStyle, tabLevel: 1 })}
                <br/>

                ${code.tag('&lt;svg', { tabLevel: 2 })}
                ${code.keyValue(['width', '=', '{width}'])}
                ${code.keyValue(['height', '=', '{height}'])}
                ${code.keyValue(['viewBox', '=', '`0 0 ${width} ${width}`'])}${code.tag('&gt;')}
                
                <br />
                <br />
                ${code.tag('&lt;circle', { tabLevel: 3 })}
                ${code.keyValue(['r', '=', '{radius}'])}
                ${code.keyValue(['cx', '=', '{centerPoint}'])}
                ${code.keyValue(['cy', '=', '{centerPoint}'])}
                ${code.keyValue(['stroke', '=', `"${theme.background}"`])}
                ${code.value('...')}
                ${code.tag('&gt;&lt;/circle&gt;')}

                <br />
                <br />
                ${code.tag('&lt;circle', { tabLevel: 3 })}
                ${code.keyValue(['r', '=', '{radius}'])}
                ${code.keyValue(['cx', '=', '{centerPoint}'])}
                ${code.keyValue(['cy', '=', '{centerPoint}'])}
                ${code.keyValue(['stroke', '=', `"${theme.exampleColour}"`])}
                ${code.value('...')}
                ${code.tag('&gt;')}
                <br/>
                
                ${code.tag('&lt;animate', { tabLevel: 4 })}
                <br/>
                ${code.keyValue(['attributeName', '=', '"stroke-dashoffset"'], { tabLevel: 5 })}
                ${code.keyValue(['dur', '=', '"1s"'])}
                <br/>
                ${code.keyValue(['from', '=', '"${strokeDashArray}"'], { tabLevel: 5 })}
                ${code.keyValue(['to', '=', '"${strokeDashOffset}"'])}
                <br/>
                ${code.keyValue(['fill', '=', '"freeze"'], { tabLevel: 5 })}
                ${code.keyValue(['calcMode', '=', '"spline"'])}
                ${code.keyValue(['keySplines', '=', '"0.42 0 0.58 1"'])}

                <br/>
                ${code.tag('/&gt;', { tabLevel: 4 })}
                <br/>
                ${code.tag('&lt;/circle&gt;', { tabLevel: 3 })}

                <br />
                <br/>
                ${code.tag('&lt;svg&gt;', { tabLevel: 2 })}
                <br/>
                ${code.keyValue(['', ');', ''], { ...notFocussedStyle, tabLevel: 1 })}
                <br/>
                ${code.keyValue(['', '}', ''], notFocussedStyle)}
              </div>
            </foreignObject>
          </g>
        </g>
        `,
        ...sharedProperties,
      }),
    ...sharedProperties,
  };
};

/*

  AWS S3 Vancouver -> disks: {
    style.animated: true
  }
*/
