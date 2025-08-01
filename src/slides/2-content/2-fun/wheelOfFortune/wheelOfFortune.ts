import { animateFadeIn } from '@/components/core/animate';
import { getSpinner } from '@/components/wheel/spinner';
import { windowTitle } from '@/components/window/windowTitle';
import { svgConstants } from '@/constants/svg';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { readSrcFile } from '@/helpers/fileHelper';
import { slideBase } from '@/slides/slideBase';

import notesMd from './wheelOfFortune.md';

export const wheelOfFortune = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const notes = await readSrcFile(notesMd);

  const circleRadius = 7;
  const drawPoint = (y: number) => `<circle cx="900" cy="${160 + y * 50}" r="${circleRadius}" fill="#64E9BA" />`;
  const drawText = (y: number, text: string, fontSize?: number, attr?: string) =>
    `<text x="930" y="${160 + circleRadius + y * 50}" fill="${svgConstants.colour.controlForeground}" font-size="${
      fontSize ?? 30
    }" ${attr ?? ''}>${text}</text>`;

  return {
    content: slideBase({
      ctx: ctx,
      content: `
        ${await windowTitle('The Fun stuff - complex shapes')}

        
        <g opacity="0" transform="translate(100 100)">
            ${animateFadeIn({ duration: '1s' })}
            <rect 
              width="850"
              height="800"
              x="850"
              y="50"
              rx="50"
              fill="transparent"
              stroke="${svgConstants.colour.secondary}"
              stroke-width="3"
            />

            <text x="890" y="120" fill="${svgConstants.colour.controlForeground}" font-size="30">
              Steps:
            </text>

            ${drawPoint(0)}
            ${drawText(0, 'Draw a Circle')}

            ${drawPoint(1)}
            ${drawText(1, 'Draw a line from the center to the the edge of the circle')}

            ${drawPoint(2)}
            ${drawText(2, 'Calculate the wedge angle (360 / number of options)')}
            ${drawText(3, '360 / 3 = 120', 25, 'font-style="italic"')}

            ${drawPoint(4)}
            ${drawText(4, 'Rotate the line by wedge angle x the index of the line')}

            ${drawPoint(5)}
            ${drawText(5, 'Draw the text of the option')}

            ${drawPoint(6)}
            ${drawText(6, 'Rotate the text by wedge angle x the (index of the text + 0.5)')}
            ${drawText(7, 'This will place the text in the middle of the slice', 25, 'font-style="italic"')}

            ${drawPoint(8)}
            ${drawText(8, 'Draw the center circle')}

            ${drawPoint(9)}
            ${drawText(9, 'Draw the center logo')}

            ${drawPoint(10)}
            ${drawText(10, 'Add rotation animation 💫')}   

            ${drawPoint(12)}
            ${drawText(12, 'Profit?')}              
        </g>

        ${getSpinner({
          options: ['😁', '🕹️', '🧑‍🎨'],
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
