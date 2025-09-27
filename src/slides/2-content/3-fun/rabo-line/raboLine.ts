import { animateFadeIn } from '@/components/core/animate';
import { themes } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { getPreviousSlideIndex } from '@/helpers/contextHelper.ts';
import { readLocalFile } from '@/helpers/fileHelper';
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
            TODO: RaboLine content
          </text>
            
          <g transform="translate(650 140)">
            <foreignObject x="40" y="15" width="1200" height="800">
              <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 1.5em;">
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
