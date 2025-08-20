import { codeBlockWithExample } from '@/components/code/codeBlockWithExample.ts';
import { svgCode } from '@/components/code/codeSpan.ts';
import type { SlideContext } from '@/contracts/slideContext.ts';
import type { ISvgSlide } from '@/contracts/svgSlide.ts';
import { readSrcFile } from '@/helpers/fileHelper.ts';
import { slideBase } from '@/slides/slideBase.ts';

import notesMd from '../defsTag.md';

export const slideBasicDrawingDefsWithCss = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const notFocussedStyle = { opacity: 0.3 };
  const code = svgCode(ctx.themeKey);

  const notes = await readSrcFile(notesMd);
  return {
    content: slideBase({
      ctx: ctx,
      title: 'Basics of drawing - CSS',
      content: `
        ${codeBlockWithExample({
          ctx,
          x: 100,
          y: 120,
          width: 750,
          height: 670,
          animatePosition: 1,
          svgContent: `
            <circle class="cool-circle" cx="580" cy="270" r="75" />
          `,
          codeContent: `
            ${code.tag('&lt;svg', notFocussedStyle)}
            ${code.keyValue(['version', '=', '"1.1"'], notFocussedStyle)}
            ${code.keyValue(['width', '=', '"300"'], notFocussedStyle)}
            ${code.keyValue(['height', '=', '"200"'], notFocussedStyle)}
            ${code.keyValue(['xmlns', '=', '"http://ww..."'], notFocussedStyle)}
            ${code.tag('&gt;', notFocussedStyle)}
            <br />
            
            ${code.tag('&lt;defs&gt;', { ...notFocussedStyle, tabLevel: 1 })}<br />
            ${code.value('...', { ...notFocussedStyle, tabLevel: 2 })}<br />
            ${code.tag('&lt;/defs&gt;', { ...notFocussedStyle, tabLevel: 1 })}
            <br />
            <br />
            
            ${code.tag('&lt;style&gt;', { tabLevel: 1 })}
            <br />
            ${code.key('.cool-circle', { tabLevel: 2 })}
            ${code.value('{')}
            <br />

            ${code.keyValue(['fill', ': ', '#FF0000;'], { tabLevel: 3 })}<br />
            ${code.keyValue(['stroke', ': ', '#FFFF00;'], { tabLevel: 3 })}<br />
            ${code.keyValue(['stroke-width', ': ', '10px;'], { tabLevel: 3 })}
            <br />            

            ${code.value('}', { tabLevel: 2 })}
            <br />
            ${code.tag('&lt;/style&gt;', { tabLevel: 1 })}
            <br />
            <br />

            ${code.tag('&lt;rect', { tabLevel: 1 })}
            ${code.keyValue(['class', '=', '"cool-circle"'])}
            ${code.keyValue(['cx', '=', '"50"'], notFocussedStyle)}
            ${code.keyValue(['cy', '=', '"50"'], notFocussedStyle)}
            ${code.keyValue(['r', '=', '"170"'], notFocussedStyle)}
            ${code.tag('/&gt;')}
            <br />
            <br />
            <br />
            ${code.tag('&lt;/svg&gt;', notFocussedStyle)}
          `,
        })}

        ${codeBlockWithExample({
          ctx,
          x: 900,
          y: 120,
          width: 910,
          height: 670,
          animatePosition: 2,
          svgContent: `
            <circle class="cool-circle cool-circle-anim" cx="650" cy="150" r="75" />
          `,
          codeContent: `
            ${code.tag('&lt;svg', notFocussedStyle)}
            ${code.keyValue(['version', '=', '"1.1"'], notFocussedStyle)}
            ${code.keyValue(['width', '=', '"300"'], notFocussedStyle)}
            ${code.keyValue(['height', '=', '"200"'], notFocussedStyle)}
            ${code.keyValue(['xmlns', '=', '"http://ww..."'], notFocussedStyle)}
            ${code.tag('&gt;', notFocussedStyle)}
            <br />
            
            ${code.tag('&lt;style&gt;', { tabLevel: 1 })}
            <br />
            ${code.keyValue(['@keyframes', ' anim-cool-circle ', '{'], { tabLevel: 2 })}<br />
            ${code.tag('0% { transform: translate(0, 0); }', { tabLevel: 3 })}<br />
            ${code.tag('100% { transform: translate(0, 12em); }', { tabLevel: 3 })}<br />

            ${code.value('}', { tabLevel: 2 })}
            <br />
            <br />
            ${code.key('.cool-circle-anim', { tabLevel: 2 })}
            ${code.value('{')}
            <br />

            ${code.keyValue(['animation', ': ', 'anim-cool-circle;'], { tabLevel: 3 })}<br />
            ${code.keyValue(['animation-direction', ': ', 'alternate;'], { tabLevel: 3 })}<br />
            ${code.keyValue(['animation-duration', ': ', '3s;'], { tabLevel: 3 })}<br />
            ${code.keyValue(['animation-iteration-count', ': ', 'infinite;'], { tabLevel: 3 })}<br />

            ${code.value('}', { tabLevel: 2 })}
            <br />
            ${code.tag('&lt;/style&gt;', { tabLevel: 1 })}
            <br />
            <br />

            ${code.tag('&lt;rect', { tabLevel: 1 })}
            ${code.keyValue(['class', '=', '"my-rect my-rect-anim"'])}
            ${code.keyValue(['x', '=', '"50"'], notFocussedStyle)}
            ${code.keyValue(['y', '=', '"50"'], notFocussedStyle)}
            ${code.keyValue(['width', '=', '"165"'], notFocussedStyle)}
            ${code.keyValue(['height', '=', '"150"'], notFocussedStyle)}
            ${code.tag('/&gt;')}
            <br />
            ${code.tag('&lt;/svg&gt;', notFocussedStyle)}
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
