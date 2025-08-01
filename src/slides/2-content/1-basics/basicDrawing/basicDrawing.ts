import { svgCode } from '../../../../components/code/codeSpan';
import { windowTitle } from '../../../../components/window/windowTitle';
import type { SlideContext } from '../../../../contracts/slideContext';
import type { ISvgSlide } from '../../../../contracts/svgSlide';
import { slideBase } from '../../../slideBase';
import { slideBasicDrawingCard } from './basicDrawingCard';
import { readSrcFile } from '../../../../helpers/fileHelper';

import notesMd from './basicDrawing.md';

export const slideBasicDrawing = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const notes = await readSrcFile(notesMd);
  return {
    content: slideBase({
      ctx: ctx,
      content: `
        ${await windowTitle('Basics of drawing')}

        ${slideBasicDrawingCard({
          x: 100,
          y: 120,
          ctx: ctx,
          animatePosition: 1,
          overrideForeignObjectX: 280,
          svgContent: `<line x1="50" y1="200" x2="225" y2="50" stroke="#64E9BA" stroke-width="5" />`,
          codeContent: `
            ${svgCode.tag('&lt;line')}<br />
            ${svgCode.keyValue(['x1', '=', '"50"'], { tabLevel: 1 })}
            ${svgCode.keyValue(['y1', '=', '"200"'])}<br />
            ${svgCode.keyValue(['x2', '=', '"200"'], { tabLevel: 1 })}
            ${svgCode.keyValue(['y2', '=', '"50"'])}<br />
            ${svgCode.keyValue(['stroke', '=', '"#64E9BA"'], { tabLevel: 1 })}
            ${svgCode.keyValue(['stroke-width', '=', '"5"'])}<br />
            ${svgCode.tag('/&gt;')}
          `,
        })}

        ${slideBasicDrawingCard({
          x: 1000,
          y: 120,
          ctx: ctx,
          animatePosition: 2,
          overrideForeignObjectX: 280,
          svgContent: `<rect x="50" y="50" width="165" height="150" fill="transparent" stroke="#64E9BA" stroke-width="5" />`,
          codeContent: `
            ${svgCode.tag('&lt;rect')}<br />
            ${svgCode.keyValue(['x', '=', '"50"'], { tabLevel: 1 })}
            ${svgCode.keyValue(['y', '=', '"50"'])}
            ${svgCode.keyValue(['fill', '=', '"transparent"'])}<br />
            ${svgCode.keyValue(['width', '=', '"165"'], { tabLevel: 1 })}
            ${svgCode.keyValue(['height', '=', '"150"'])}<br />
            ${svgCode.keyValue(['stroke', '=', '"#64E9BA"'], { tabLevel: 1 })}
            ${svgCode.keyValue(['stroke-width', '=', '"5"'])}<br />
            ${svgCode.tag('/&gt;')}
          `,
        })}

        ${slideBasicDrawingCard({
          x: 100,
          y: 420,
          ctx: ctx,
          animatePosition: 3,
          overrideForeignObjectX: 280,
          svgContent: `<circle cx="150" cy="125" r="80" fill="transparent" stroke="#64E9BA" stroke-width="5" />`,
          codeContent: `
            ${svgCode.tag('&lt;circle')}<br />
            ${svgCode.keyValue(['cx', '=', '"150"'], { tabLevel: 1 })}
            ${svgCode.keyValue(['cy', '=', '"125"'])}
            ${svgCode.keyValue(['r', '=', '"80"'])}<br />
            ${svgCode.keyValue(['fill', '=', '"transparent"'], { tabLevel: 1 })}<br />
            ${svgCode.keyValue(['stroke', '=', '"#64E9BA"'], { tabLevel: 1 })}
            ${svgCode.keyValue(['stroke-width', '=', '"5"'])}<br />
            ${svgCode.tag('/&gt;')}
          `,
        })}

        ${slideBasicDrawingCard({
          x: 1000,
          y: 420,
          ctx: ctx,
          animatePosition: 4,
          overrideForeignObjectX: 280,
          svgContent: `<polygon points="130,50 200,110 180,190 80,190 60,110" 
              fill="transparent" stroke="#64E9BA" stroke-width="5" />`,
          codeContent: `
            ${svgCode.tag('&lt;polygon')}<br />
            ${svgCode.keyValue(['points', '=', '"130,50 200,110 180,200 80,200 60,110"'], { tabLevel: 1 })}<br />
            ${svgCode.keyValue(['fill', '=', '"transparent"'], { tabLevel: 1 })}<br />
            ${svgCode.keyValue(['stroke', '=', '"#64E9BA"'], { tabLevel: 1 })}
            ${svgCode.keyValue(['stroke-width', '=', '"5"'])}<br />
            ${svgCode.tag('/&gt;')}
          `,
        })}

        ${slideBasicDrawingCard({
          x: 100,
          y: 720,
          ctx: ctx,
          animatePosition: 5,
          overrideForeignObjectX: 280,
          overrideCardHeight: 275,
          svgContent: `<polyline points="120,140 180,140 210,100 180,60 110,60 70,100 70,170 110,210 180,210" 
              fill="transparent" stroke="#64E9BA" stroke-width="5" />`,
          codeContent: `
            ${svgCode.tag('&lt;polyline')}<br />
            ${svgCode.keyValue(['points', '=', '"120,130 180,130 210,90 180,50'], { tabLevel: 1 })}<br />
            ${svgCode.value('110,50 70,90 70,150 110,190 180,190"', { tabLevel: 4 })}<br />
            ${svgCode.keyValue(['fill', '=', '"transparent"'], { tabLevel: 1 })}<br />
            ${svgCode.keyValue(['stroke', '=', '"#64E9BA"'], { tabLevel: 1 })}
            ${svgCode.keyValue(['stroke-width', '=', '"5"'])}<br />
            ${svgCode.tag('/&gt;')}
          `,
        })}

        ${slideBasicDrawingCard({
          x: 1000,
          y: 720,
          ctx: ctx,
          animatePosition: 6,
          overrideForeignObjectX: 280,
          overrideCardHeight: 275,
          svgContent: `<use href="#entelect-logo"
              fill="transparent" stroke="#64E9BA" stroke-width="5" transform="translate(-170 -230)"  />`,
          codeContent: `
            ${svgCode.tag('&lt;path')}<br />
            ${svgCode.keyValue(['d', '=', '"M 287.038 363.406 C 285.514 366.2 ...'], { tabLevel: 1 })}<br />
            ${svgCode.value('... 291.403 361.384 287.038 363.406 Z"', { tabLevel: 3 })}<br />
            ${svgCode.keyValue(['fill', '=', '"transparent"'], { tabLevel: 1 })}<br />
            ${svgCode.keyValue(['stroke', '=', '"#64E9BA"'], { tabLevel: 1 })}
            ${svgCode.keyValue(['stroke-width', '=', '"5"'])}<br />
            ${svgCode.tag('/&gt;')}
          `,
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
