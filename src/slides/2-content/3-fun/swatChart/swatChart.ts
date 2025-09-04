import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { readLocalFile } from '@/helpers/fileHelper';
import { slideBase } from '@/slides/slideBase';

import { usePublicImage } from '@/constants/image';
import notesMd from './swatChart.md';
import { animateFadeIn } from '@/components/core/animate';
import { getPreviousSlideIndex } from '@/helpers/contextHelper.ts';
import { themes } from '@/constants/theme';
import { drawPoint, drawText, drawRect, drawLine } from '@/helpers/svgHelper';

export const slideSwatChart = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const previousSlideId = getPreviousSlideIndex(ctx);
  const theme = themes[ctx.themeKey];

  const sharedProperties = {
    ssg: { secondsToDisplay: 3 },
    notes: await readLocalFile(notesMd),
  };
  return {
    content: slideBase({
      ctx: ctx,
      title: 'The Fun stuff - Custom charts',
      content: `
        <g transform="translate(125, 220)">
          ${usePublicImage('swatChart')}
        </g>
        
        <g opacity="0" transform="translate(200 100)">
          ${animateFadeIn({
            duration: '1s',
            begin: previousSlideId == undefined ? undefined : `${previousSlideId}-slide-anim.begin+1s`,
          })}
          <rect 
            width="750"
            height="810"
            x="850"
            y="40"
            rx="50"
            fill="transparent"
            stroke="${theme.secondary}"
            stroke-width="3"
          />

          <text x="890" y="120" fill="${theme.controlForeground}" font-size="30">
            Steps:
          </text>

          ${drawPoint(theme, 0)}
          ${drawText(theme, 0, 'Install my npm package')}
          ${drawRect(theme, 1, 415, 40)}
          ${drawText(
            ctx.themeKey == 'light' ? { ...theme, controlForeground: theme.controlBackground } : theme,
            1,
            'npm install @assistantapps/swat-chart ',
            25,
            'font-style="italic"',
          )}
          
          ${drawPoint(theme, 2)}
          ${drawText(theme, 2, 'Change the config to your liking')}
          ${drawText(theme, 3, 'You can play around with the live version:', 25, 'font-style="italic"')}
          ${drawText(theme, 3.75, 'https://assistantapps.github.io/Swat-Chart', 25, 'font-style="italic"')}
          ${drawLine(theme, 3.75, 430)}
          

          ${drawPoint(theme, 6)}
          ${drawText(theme, 6, 'Profit?')}          
        </g>
        `,
      ...sharedProperties,
    }),
    ...sharedProperties,
  };
};
