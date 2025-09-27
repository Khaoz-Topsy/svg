import { animateFadeIn } from '@/components/core/animate';
import { themes } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { getPreviousSlideIndex } from '@/helpers/contextHelper.ts';
import { readLocalFile } from '@/helpers/fileHelper';
import { slideBase } from '@/slides/slideBase';
import { isServerMode } from '@/constants/env';
import { svgCode } from '@/components/code/codeSpan';

import notesMd from './githubProfile.md';
import { usePublicImage } from '@/constants/image';
import { drawLine, drawPoint, drawText } from '@/helpers/svgHelper';

export const slideGithubProfile = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const previousSlideId = getPreviousSlideIndex(ctx);
  const theme = themes[ctx.themeKey];
  const code = svgCode(theme.code);

  const sharedProperties = {
    ssg: { secondsToDisplay: 3 },
    notes: await readLocalFile(notesMd),
  };
  return {
    content: () =>
      slideBase({
        ctx: ctx,
        title: 'The Fun stuff - Fancy Github profiles',
        content: `
        <g transform="translate(100 150)">
        ${usePublicImage('kurtGithubHeader')}
        </g>
        <g opacity="0" transform="translate(100 90)">
          ${animateFadeIn({
            duration: '1s',
            begin: previousSlideId == undefined ? undefined : `${previousSlideId}-slide-anim.begin+1s`,
          })}
          <rect 
            width="850"
            height="810"
            x="850"
            y="50"
            rx="50"
            fill="transparent"
            stroke="${theme.secondary}"
            stroke-width="3"
          />

          <text x="890" y="120" fill="${theme.controlForeground}" font-size="30">
            Get around restrictions
          </text>

          <text x="890" y="150" fill="${theme.controlForeground}" font-size="20">
            In this case on Github
          </text>

          <text x="890" y="217" fill="${theme.controlForeground}" font-size="30">What is in this SVG:</text>

          ${drawPoint(theme, 2)}
          ${drawText(theme, 2, 'Animated gradient background')}

          ${drawPoint(theme, 3)}
          ${drawText(theme, 3, 'Line pattern over the background')}

          ${drawPoint(theme, 4)}
          ${drawText(theme, 4, 'Avatar aligned in the center')}

          ${drawPoint(theme, 5)}
          ${drawText(theme, 5, 'Non-SVG images used')}
          ${drawText(theme, 6, 'Ship icon', 25, 'font-style="italic"')}
          <text x="1030" y="467" fill="${theme.exampleColour2}" font-size="20">(2kb)</text>
          ${drawText(theme, 7, 'Ficsit thumbs up', 25, 'font-style="italic"')}
          <text x="1110" y="517" fill="${theme.exampleColour2}" font-size="20">(6kb)</text>

          ${drawPoint(theme, 8)}
          ${drawText(theme, 8, 'Hand emoji (text)')}

          ${drawPoint(theme, 9)}
          ${drawText(theme, 9, 'Text aligned to the bottom center')}

          ${drawPoint(theme, 10)}
          ${drawText(theme, 10, 'CSS animations ✨')}
          
          ${drawPoint(theme, 12)}
          ${drawText(theme, 12, 'View this on:')}
          <a xlink:href="https://github.com/Khaoz-Topsy" target="_blank">
            ${drawText(theme, 12.75, 'https://github.com/Khaoz-Topsy', 30, 'font-style="italic"')}
          </a>
          ${drawLine(theme, 12.8, 500)}
        </g>
        `,
        ...sharedProperties,
      }),
    ...sharedProperties,
  };
};
