import { animateFadeIn } from '@/components/core/animate';
import { themes } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { getPreviousSlideIndex } from '@/helpers/contextHelper.ts';
import { readLocalFile } from '@/helpers/fileHelper';
import { drawPoint, drawText } from '@/helpers/svgHelper';
import { slideBase } from '@/slides/slideBase';

import notesMd from './raboLine.md';

export const slideRaboLine = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const previousSlideId = getPreviousSlideIndex(ctx);
  const theme = themes[ctx.themeKey];

  const sharedProperties = {
    ssg: { secondsToDisplay: 3 },
    notes: await readLocalFile(notesMd),
  };
  return {
    content: () =>
      slideBase({
        ctx: ctx,
        title: 'The Fun stuff - Line animations',
        content: `
        <clipPath id="phone-frame-clip">
          <rect x="0" y="0" width="400" height="800" />
        </clipPath>
        
        <g id="phone-content-2" transform="translate(200 150)">
          <rect x="0" y="0" width="400" height="800" fill="white" clip-path="url(#phone-frame-clip)" />
          <text x="200" y="150" fill="blue" text-anchor="middle" font-size="75">
            Rizzbank
          </text>
        </g>
        
        <g id="phone-content" transform="translate(200 450)" clip-path="url(#phone-frame-clip)">
          
          <path id="phone-line" d="M -325 332 C 652 738 329 -184 1393 224" 
            stroke="blue" 
            stroke-width="10" 
            fill="transparent" 
            transform="translate(300 0)"
          >
            <animateTransform id="left" attributeName="transform" type="translate"
              from="300 0" to="-950 0" begin="3s;right.end" dur="1s" fill="freeze"
            />
          </path>
        </g>

        <g id="phone-frame" transform="translate(200 150)">
          <rect x="400" y="100" width="10" height="100" fill="transparent" stroke="${
            theme.phoneFrameAccent
          }" stroke-width="2" rx="2" />
          <rect x="400" y="250" width="10" height="75" fill="transparent" stroke="${
            theme.phoneFrameAccent
          }" stroke-width="2" rx="2" />

          <rect x="0" y="0" width="400" height="800" fill="transparent" stroke="${
            theme.phoneFrame
          }" stroke-width="10" rx="10" />
          <rect x="0" y="8" width="400" height="8" fill="transparent" stroke="${
            theme.phoneFrame
          }" stroke-width="10" rx="10" />
          <rect x="0" y="16" width="400" height="8" fill="transparent" stroke="${theme.phoneFrame}" stroke-width="10" />
          <rect x="150" y="12" width="100" height="2" fill="transparent" stroke="${
            theme.phoneFrameAccent
          }" stroke-width="2" rx="10" />
          <circle cx="300" cy="12" r="8" fill="${theme.phoneFrameAccent}" stroke="${theme.phoneFrameAccent}" />
          
          <rect x="400" y="100" width="10" height="100" fill="${theme.phoneFrame}" stroke="${
          theme.phoneFrame
        }" stroke-width="2" rx="2" />
          <rect x="400" y="250" width="10" height="75" fill="${theme.phoneFrame}" stroke="${
          theme.phoneFrame
        }" stroke-width="2" rx="2" />

          <rect x="0" y="792" width="400" height="8" fill="transparent" stroke="${
            theme.phoneFrame
          }" stroke-width="10" rx="10" />
          <rect x="0" y="784" width="400" height="8" fill="transparent" stroke="${
            theme.phoneFrame
          }" stroke-width="10" />
          
          <rect x="-5" y="-5" width="410" height="810" fill="transparent" stroke="${
            theme.phoneFrameAccent
          }" stroke-width="1" rx="10" />
        </g>
        <g opacity="0" transform="translate(-100 90)">
          ${animateFadeIn({
            duration: '1s',
            begin: previousSlideId == undefined ? undefined : `${previousSlideId}-slide-anim.begin+1s`,
          })}
          <rect 
            width="1050"
            height="810"
            x="850"
            y="50"
            rx="50"
            fill="transparent"
            stroke="${theme.secondary}"
            stroke-width="3"
          />

          <text x="890" y="120" fill="${theme.controlForeground}" font-size="30">
            One of the strategies used
          </text>
          <text x="890" y="150" fill="${theme.controlForeground}" font-size="20">
            For Rabobank Wrap/Recap
          </text>
            
          ${drawPoint(theme, 2)}
          ${drawText(theme, 2, 'Animating the Rabo line')}
          ${drawText(theme, 3, 'Have the list of points for the before state', 25, 'font-style="italic"')}
          ${drawText(theme, 4, 'Have the list of points for the after state', 25, 'font-style="italic"')}
          ${drawText(theme, 5, 'Use the &lt;animate /&gt; tag', 25, 'font-style="italic"')}
            
          ${drawPoint(theme, 7)}
          ${drawText(theme, 7, 'Animating the position of Rabo line')}
          ${drawText(theme, 8, 'Draw a long version of the line', 25, 'font-style="italic"')}
          ${drawText(theme, 9, 'Move the line along the viewable window', 25, 'font-style="italic"')}
          ${drawText(theme, 10, '   Gives a sense of movement', 25, 'font-style="italic"')}
        </g>

        <g opacity="0" transform="scale(0.15) translate(9000 2500)">
          ${animateFadeIn({
            duration: '1s',
            begin: previousSlideId == undefined ? undefined : `${previousSlideId}-slide-anim.begin+2s`,
          })}
          <path id="squiggle-line" d="M 9 10 C 613 331 1599 -302 2385 7" 
            stroke="${theme.exampleColour}" 
            stroke-width="50" 
            stroke-linecap="round"
            fill="transparent"
          >
            <animate id="twistStart" attributeName="d"
              from="M 9 10 C 613 331 1599 -302 2385 7" to="M 2134 -1179 C -1623 652 3432 712 -293 -1191" 
              begin="1s;twistEnd.end+1" dur="1s" fill="freeze"
            />
            <animate id="twistEnd" attributeName="d"
              to="M 9 10 C 613 331 1599 -302 2385 7" from="M 2134 -1179 C -1623 652 3432 712 -293 -1191" 
              begin="twistStart.end+1" dur="1s" fill="freeze"
            />
            
          </path>
        </g>
        `,
        ...sharedProperties,
      }),
    ...sharedProperties,
  };
};
