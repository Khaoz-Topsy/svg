import { windowTitle } from '@/components/window/windowTitle';
import { usePublicImage } from '@/constants/image';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { readSrcFile } from '@/helpers/fileHelper';
import { slideBase } from '@/slides/slideBase';

import notesMd from './themedIllustrations.md';

export const themedIllustrations = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const notes = await readSrcFile(notesMd);

  return {
    content: slideBase({
      ctx: ctx,
      title: 'The Fun stuff - Themed Illustrations',
      content: `
        ${usePublicImage('undraw')}
        `,
      notes,
    }),
    notes,
    ssg: {
      secondsToDisplay: 3,
    },
  };
};
