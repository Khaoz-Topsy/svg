import { codeBlockWithExample } from '../../../../components/code/codeBlockWithExample';
import { svgCode } from '../../../../components/code/codeSpan';
import { windowTitle } from '../../../../components/window/windowTitle';
import { svgConstants } from '../../../../constants/svg';
import type { SlideContext } from '../../../../contracts/slideContext';
import type { ISvgSlide } from '../../../../contracts/svgSlide';
import { readSrcFile } from '../../../../helpers/fileHelper';
import { slideBase } from '../../../slideBase';

import notesMd from './calendarIcon.md';

export const calendarIcon = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const notes = await readSrcFile(notesMd);

  const date = new Date();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return {
    content: slideBase({
      ctx: ctx,
      content: `
        ${await windowTitle('The Fun stuff - complex icons')}

        <g transform="scale(0.5) translate(200, 300)">
          <path
            d="M512 455c0 32-25 57-57 57H57c-32 0-57-25-57-57V128c0-31 25-57 57-57h398c32 0 57 26 57 57z"
            fill="#e0e7ec"
          />
          <path
            d="M484 0h-47c2 4 4 9 4 14a28 28 0 1 1-53-14H124c3 4 4 9 4 14A28 28 0 1 1 75 0H28C13 0 0 13 0 28v157h512V28c0-15-13-28-28-28z"
            fill="#dd2f45"
          />
          <rect x="50" y="0" width="400" height="85" fill="#dd2f45" />
          <g fill="#f3aab9">
            <circle cx="470" cy="142" r="14" />
            <circle cx="470" cy="100" r="14" />
            <circle cx="427" cy="142" r="14" />
            <circle cx="427" cy="100" r="14" />
            <circle cx="384" cy="142" r="14" />
            <circle cx="384" cy="100" r="14" />
          </g>
          <text id="year" y="155" fill="#fff" font-family="monospace" font-size="130px" x="16">
            ${date.getFullYear()}
          </text>
          <text id="day" x="256" y="370" fill="#000" font-family="monospace" style="text-anchor: middle" font-size="210px">
            ${date.getDate()}
          </text>
          <text id="month" x="256" y="470" fill="#000" font-family="monospace" style="text-anchor: middle" font-size="90px">
            ${months[date.getMonth()]}
          </text>
          
          <rect
            x="0" y="0" rx="40"
            width="510" height="508"
            fill="transparent"
            stroke="#dd2f45"
            stroke-width="10px"
          />
        </g>
        `,
      notes,
    }),
    notes,
    ssg: {
      secondsToDisplay: 3,
    },
  };
};
