import { usePublicImage } from '@/constants/image';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { readLocalFile } from '@/helpers/fileHelper';
import { slideBase } from '@/slides/slideBase';

import notesMd from './themedIllustrations.md';

export const themedIllustrations = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const sharedProperties = {
    ssg: { secondsToDisplay: 3 },
    notes: await readLocalFile(notesMd),
  };
  return {
    content: slideBase({
      ctx: ctx,
      title: 'The Fun stuff - Themed Illustrations',
      content: `
        ${usePublicImage('undraw')}
        `,
      ...sharedProperties,
    }),
    ...sharedProperties,
  };
};
