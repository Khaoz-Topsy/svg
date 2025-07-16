import { windowTitle } from '../../../../components/window/windowTitle';
import type { SlideContext } from '../../../../contracts/slideContext';
import type { ISvgSlide } from '../../../../contracts/svgSlide';
import { readSrcFile } from '../../../../helpers/fileHelper';
import { slideBase } from '../../../slideBase';

import notes from './animate.md';

export const slideAnimate = async (ctx: SlideContext): Promise<ISvgSlide> => {
  return {
    content: slideBase({
      ctx: ctx,
      content: `
        ${await windowTitle('Animation')}
        `,
    }),
    notes: await readSrcFile(notes),
    ssg: {
      secondsToDisplay: 3,
    },
  };
};
