import { svgCode } from '@/components/code/codeSpan';
import { themes } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { readLocalFile } from '@/helpers/fileHelper';
import { slideBase } from '@/slides/slideBase';
import { slideBasicDrawingCard } from './basicDrawingCard';

import notesMd from './basicDrawing.md';

export const slideBasicDrawing = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const theme = themes[ctx.themeKey];
  const code = svgCode(theme.code);

  const sharedProperties = {
    ssg: { secondsToDisplay: 3 },
    notes: await readLocalFile(notesMd),
  };
  return {
    content: slideBase({
      ctx: ctx,
      title: 'Basics of drawing',
      content: `
        ${slideBasicDrawingCard({
          x: 100,
          y: 120,
          ctx: ctx,
          animatePosition: 1,
          overrideForeignObjectX: 280,
          svgContent: `<line x1="50" y1="200" x2="225" y2="50" stroke="${theme.exampleColour}" stroke-width="5" />`,
          codeContent: `
            ${code.tag('&lt;line')}<br />
            ${code.keyValue(['x1', '=', '"50"'], { tabLevel: 1 })}
            ${code.keyValue(['y1', '=', '"200"'])}<br />
            ${code.keyValue(['x2', '=', '"200"'], { tabLevel: 1 })}
            ${code.keyValue(['y2', '=', '"50"'])}<br />
            ${code.keyValue(['stroke', '=', `"${theme.exampleColour}"`], { tabLevel: 1 })}
            ${code.keyValue(['stroke-width', '=', '"5"'])}<br />
            ${code.tag('/&gt;')}
          `,
        })}

        ${slideBasicDrawingCard({
          x: 1000,
          y: 120,
          ctx: ctx,
          animatePosition: 2,
          overrideForeignObjectX: 280,
          svgContent: `<rect x="50" y="60" width="165" height="130" fill="transparent" stroke="${theme.exampleColour}" stroke-width="5" />`,
          codeContent: `
            ${code.tag('&lt;rect')}<br />
            ${code.keyValue(['x', '=', '"50"'], { tabLevel: 1 })}
            ${code.keyValue(['y', '=', '"75"'])}
            ${code.keyValue(['fill', '=', '"transparent"'])}<br />
            ${code.keyValue(['width', '=', '"165"'], { tabLevel: 1 })}
            ${code.keyValue(['height', '=', '"130"'])}<br />
            ${code.keyValue(['stroke', '=', `"${theme.exampleColour}"`], { tabLevel: 1 })}
            ${code.keyValue(['stroke-width', '=', '"5"'])}<br />
            ${code.tag('/&gt;')}
          `,
        })}

        ${slideBasicDrawingCard({
          x: 100,
          y: 420,
          ctx: ctx,
          animatePosition: 3,
          overrideForeignObjectX: 280,
          svgContent: `<circle cx="150" cy="125" r="80" fill="transparent" stroke="${theme.exampleColour}" stroke-width="5" />`,
          codeContent: `
            ${code.tag('&lt;circle')}<br />
            ${code.keyValue(['cx', '=', '"150"'], { tabLevel: 1 })}
            ${code.keyValue(['cy', '=', '"125"'])}
            ${code.keyValue(['r', '=', '"80"'])}<br />
            ${code.keyValue(['fill', '=', '"transparent"'], { tabLevel: 1 })}<br />
            ${code.keyValue(['stroke', '=', `"${theme.exampleColour}"`], { tabLevel: 1 })}
            ${code.keyValue(['stroke-width', '=', '"5"'])}<br />
            ${code.tag('/&gt;')}
          `,
        })}

        ${slideBasicDrawingCard({
          x: 1000,
          y: 420,
          ctx: ctx,
          animatePosition: 4,
          overrideForeignObjectX: 280,
          svgContent: `<polygon points="130,50 200,110 180,190 80,190 60,110" 
              fill="transparent" stroke="${theme.exampleColour}" stroke-width="5" />`,
          codeContent: `
            ${code.tag('&lt;polygon')}<br />
            ${code.keyValue(['points', '=', '"130,50 200,110 180,200 80,200 60,110"'], { tabLevel: 1 })}<br />
            ${code.keyValue(['fill', '=', '"transparent"'], { tabLevel: 1 })}<br />
            ${code.keyValue(['stroke', '=', `"${theme.exampleColour}"`], { tabLevel: 1 })}
            ${code.keyValue(['stroke-width', '=', '"5"'])}<br />
            ${code.tag('/&gt;')}
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
              fill="transparent" stroke="${theme.exampleColour}" stroke-width="5" />`,
          codeContent: `
            ${code.tag('&lt;polyline')}<br />
            ${code.keyValue(['points', '=', '"120,130 180,130 210,90 180,50'], { tabLevel: 1 })}<br />
            ${code.value('110,50 70,90 70,150 110,190 180,190"', { tabLevel: 4 })}<br />
            ${code.keyValue(['fill', '=', '"transparent"'], { tabLevel: 1 })}<br />
            ${code.keyValue(['stroke', '=', `"${theme.exampleColour}"`], { tabLevel: 1 })}
            ${code.keyValue(['stroke-width', '=', '"5"'])}<br />
            ${code.tag('/&gt;')}
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
              fill="transparent" stroke="${theme.exampleColour}" stroke-width="5" transform="translate(-170 -230)"  />`,
          codeContent: `
            ${code.tag('&lt;path')}<br />
            ${code.keyValue(['d', '=', '"M 287.038 363.406 C 285.514 366.2 ...'], { tabLevel: 1 })}<br />
            ${code.value('... 291.403 361.384 287.038 363.406 Z"', { tabLevel: 3 })}<br />
            ${code.keyValue(['fill', '=', '"transparent"'], { tabLevel: 1 })}<br />
            ${code.keyValue(['stroke', '=', `"${theme.exampleColour}"`], { tabLevel: 1 })}
            ${code.keyValue(['stroke-width', '=', '"5"'])}<br />
            ${code.tag('/&gt;')}
          `,
        })}
        `,
      ...sharedProperties,
    }),
    ...sharedProperties,
  };
};
