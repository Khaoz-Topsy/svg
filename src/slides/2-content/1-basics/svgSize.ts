import { svgConstants } from '@/constants/svg';
import { themes } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { readSrcFile } from '@/helpers/fileHelper';
import { slideBase } from '@/slides/slideBase';

import notesMd from './svgSize.md';

export const slideSvgSize = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const theme = themes[ctx.themeKey];
  const notes = await readSrcFile(notesMd);
  return {
    content: slideBase({
      ctx: ctx,
      title: 'SVG vs PNG',
      content: `
        <rect 
            width="${svgConstants.width}"
            height="${svgConstants.height}"
            x="${(svgConstants.width / 3) * 2}"
            y="100"
            rx="50"
            fill="${theme.primary}"
        />  
        `,
      notes,
    }),
    notes,
    ssg: {
      secondsToDisplay: 3,
    },
  };
};
