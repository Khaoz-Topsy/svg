import { usePublicImage } from '@/constants/image';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { readLocalFile } from '@/helpers/fileHelper';
import { slideBase } from '@/slides/slideBase';

import notesMd from './begins.md';

export const slideFunBegins = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const sharedProperties = {
    ssg: { secondsToDisplay: 3 },
    notes: await readLocalFile(notesMd),
  };
  return {
    content: slideBase({
      ctx: ctx,
      title: 'The Fun begins',
      content: `
        <g transform="scale(20) translate(33 10)">
          ${usePublicImage('ghost')}
        </g>
        `,
      ...sharedProperties,
    }),
    ...sharedProperties,
  };
};
