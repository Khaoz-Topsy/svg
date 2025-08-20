import { codeBlockWithExample } from '@/components/code/codeBlockWithExample.ts';
import { svgCode } from '@/components/code/codeSpan.ts';
import { windowTitle } from '@/components/window/windowTitle.ts';
import type { SlideContext } from '@/contracts/slideContext.ts';
import type { ISvgSlide } from '@/contracts/svgSlide.ts';
import { readSrcFile } from '@/helpers/fileHelper.ts';
import { slideBase } from '@/slides/slideBase.ts';

import notesMd from '../defsTag.md';

export const slideBasicDrawingDefsWithCss = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const notes = await readSrcFile(notesMd);
  const notFocussedStyle = { opacity: 0.3 };

  return {
    content: slideBase({
      ctx: ctx,
      content: `
        ${await windowTitle('Basics of drawing - CSS')}

        
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
            ${svgCode.tag('&lt;svg', notFocussedStyle)}
            ${svgCode.keyValue(['version', '=', '"1.1"'], notFocussedStyle)}
            ${svgCode.keyValue(['width', '=', '"300"'], notFocussedStyle)}
            ${svgCode.keyValue(['height', '=', '"200"'], notFocussedStyle)}
            ${svgCode.keyValue(['xmlns', '=', '"http://ww..."'], notFocussedStyle)}
            ${svgCode.tag('&gt;', notFocussedStyle)}
            <br />
            
            ${svgCode.tag('&lt;defs&gt;', { ...notFocussedStyle, tabLevel: 1 })}<br />
            ${svgCode.value('...', { ...notFocussedStyle, tabLevel: 2 })}<br />
            ${svgCode.tag('&lt;/defs&gt;', { ...notFocussedStyle, tabLevel: 1 })}
            <br />
            <br />
            
            ${svgCode.tag('&lt;style&gt;', { tabLevel: 1 })}
            <br />
            ${svgCode.key('.cool-circle', { tabLevel: 2 })}
            ${svgCode.value('{')}
            <br />

            ${svgCode.keyValue(['fill', ': ', '#FF0000;'], { tabLevel: 3 })}<br />
            ${svgCode.keyValue(['stroke', ': ', '#FFFF00;'], { tabLevel: 3 })}<br />
            ${svgCode.keyValue(['stroke-width', ': ', '10px;'], { tabLevel: 3 })}
            <br />            

            ${svgCode.value('}', { tabLevel: 2 })}
            <br />
            ${svgCode.tag('&lt;/style&gt;', { tabLevel: 1 })}
            <br />
            <br />

            ${svgCode.tag('&lt;rect', { tabLevel: 1 })}
            ${svgCode.keyValue(['class', '=', '"cool-circle"'])}
            ${svgCode.keyValue(['cx', '=', '"50"'], notFocussedStyle)}
            ${svgCode.keyValue(['cy', '=', '"50"'], notFocussedStyle)}
            ${svgCode.keyValue(['r', '=', '"170"'], notFocussedStyle)}
            ${svgCode.tag('/&gt;')}
            <br />
            <br />
            <br />
            ${svgCode.tag('&lt;/svg&gt;', notFocussedStyle)}
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
            ${svgCode.tag('&lt;svg', notFocussedStyle)}
            ${svgCode.keyValue(['version', '=', '"1.1"'], notFocussedStyle)}
            ${svgCode.keyValue(['width', '=', '"300"'], notFocussedStyle)}
            ${svgCode.keyValue(['height', '=', '"200"'], notFocussedStyle)}
            ${svgCode.keyValue(['xmlns', '=', '"http://ww..."'], notFocussedStyle)}
            ${svgCode.tag('&gt;', notFocussedStyle)}
            <br />
            
            ${svgCode.tag('&lt;style&gt;', { tabLevel: 1 })}
            <br />
            ${svgCode.keyValue(['@keyframes', ' anim-cool-circle ', '{'], { tabLevel: 2 })}<br />
            ${svgCode.tag('0% { transform: translate(0, 0); }', { tabLevel: 3 })}<br />
            ${svgCode.tag('100% { transform: translate(0, 12em); }', { tabLevel: 3 })}<br />

            ${svgCode.value('}', { tabLevel: 2 })}
            <br />
            <br />
            ${svgCode.key('.cool-circle-anim', { tabLevel: 2 })}
            ${svgCode.value('{')}
            <br />

            ${svgCode.keyValue(['animation', ': ', 'anim-cool-circle;'], { tabLevel: 3 })}<br />
            ${svgCode.keyValue(['animation-direction', ': ', 'alternate;'], { tabLevel: 3 })}<br />
            ${svgCode.keyValue(['animation-duration', ': ', '3s;'], { tabLevel: 3 })}<br />
            ${svgCode.keyValue(['animation-iteration-count', ': ', 'infinite;'], { tabLevel: 3 })}<br />

            ${svgCode.value('}', { tabLevel: 2 })}
            <br />
            ${svgCode.tag('&lt;/style&gt;', { tabLevel: 1 })}
            <br />
            <br />

            ${svgCode.tag('&lt;rect', { tabLevel: 1 })}
            ${svgCode.keyValue(['class', '=', '"my-rect my-rect-anim"'])}
            ${svgCode.keyValue(['x', '=', '"50"'], notFocussedStyle)}
            ${svgCode.keyValue(['y', '=', '"50"'], notFocussedStyle)}
            ${svgCode.keyValue(['width', '=', '"165"'], notFocussedStyle)}
            ${svgCode.keyValue(['height', '=', '"150"'], notFocussedStyle)}
            ${svgCode.tag('/&gt;')}
            <br />
            ${svgCode.tag('&lt;/svg&gt;', notFocussedStyle)}
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
