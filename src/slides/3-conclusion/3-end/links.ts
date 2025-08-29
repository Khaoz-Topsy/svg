import { usePublicImage } from '@/constants/image';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { slideBase } from '@/slides/slideBase';

export const slideLinks = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const sharedProperties = {
    ssg: { secondsToDisplay: 3 },
    notes: '',
  };
  return {
    content: slideBase({
      ctx: ctx,
      title: 'Links',
      content: `
        ${usePublicImage('qrCode', 'transform="translate(750, 315) scale(1.5)"')}
        `,
      ...sharedProperties,
    }),
    ...sharedProperties,
  };
};
