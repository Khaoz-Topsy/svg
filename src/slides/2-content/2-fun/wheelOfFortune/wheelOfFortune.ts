import { animateFadeIn } from '@/components/core/animate';
import { getSpinner } from '@/components/wheel/spinner';
import { themes } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { readSrcFile } from '@/helpers/fileHelper';
import { slideBase } from '@/slides/slideBase';
import { drawLine, drawPoint, drawText } from '@/helpers/svgHelper';

import notesMd from './wheelOfFortune.md';
import { getPreviousSlideIndex } from '@/helpers/contextHelper.ts';

export const wheelOfFortune = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const theme = themes[ctx.themeKey];
  const previousSlideId = getPreviousSlideIndex(ctx);

  const options = ['😁', '🕹️', '🧑‍🎨', '💫', '🥪'];

  const notes = await readSrcFile(notesMd);
  return {
    content: slideBase({
      ctx: ctx,
      title: 'The Fun stuff - complex shapes',
      content: `
        <g opacity="0" transform="translate(100 90)">${animateFadeIn({
          duration: '1s',
          begin: previousSlideId == undefined ? undefined : `${previousSlideId}-slide-anim.begin+1s`,
        })}
            <rect 
              width="850"
              height="800"
              x="850"
              y="50"
              rx="50"
              fill="transparent"
              stroke="${theme.secondary}"
              stroke-width="3"
            />

            <text x="890" y="120" fill="${theme.controlForeground}" font-size="30">
              Steps:
            </text>

            ${drawPoint(theme, 0)}
            ${drawText(theme, 0, 'Draw a Circle')}

            ${drawPoint(theme, 1)}
            ${drawText(theme, 1, 'Draw a line from the center to the the edge of the circle')}

            ${drawPoint(theme, 2)}
            ${drawText(theme, 2, 'Calculate the wedge angle (360 / number of options)')}
            ${drawText(theme, 3, `360 / ${options.length} = ${360 / options.length}`, 25, 'font-style="italic"')}

            ${drawPoint(theme, 4)}
            ${drawText(theme, 4, 'Rotate the line by wedge angle x the index of the line')}

            ${drawPoint(theme, 5)}
            ${drawText(theme, 5, 'Draw the text of the option')}

            ${drawPoint(theme, 6)}
            ${drawText(theme, 6, 'Rotate the text by wedge angle x the (index of the text + 0.5)')}
            ${drawText(theme, 7, 'This will place the text in the middle of the slice', 25, 'font-style="italic"')}

            ${drawPoint(theme, 8)}
            ${drawText(theme, 8, 'Draw the center circle')}

            ${drawPoint(theme, 9)}
            ${drawText(theme, 9, 'Draw the center logo')}

            ${drawPoint(theme, 10)}
            ${drawText(theme, 10, 'Add rotation animation 💫')}   

          ${drawPoint(theme, 12)}
          ${drawText(theme, 12, 'I used this on:')}
          <a xlink:href="https://nomads.kurtlourens.com" target="_blank">
            ${drawText(theme, 12.75, 'https://nomads.kurtlourens.com', 30, 'font-style="italic"')}
          </a>
          ${drawLine(theme, 12.8, 395)}
        </g>

        ${getSpinner({
          options,
          theme,
          attr: 'transform="scale(1.5) translate(50 110)"',
          rotate: true,
        })}
        `,
      notes,
    }),
    notes,
    ssg: {
      secondsToDisplay: 3,
    },
  };
};
