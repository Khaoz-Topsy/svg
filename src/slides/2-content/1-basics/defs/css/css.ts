import { codeBlockWithExample } from '../../../../../components/code/codeBlockWithExample.ts';
import { svgCode } from '../../../../../components/code/codeSpan.ts';
import { windowTitle } from '../../../../../components/window/windowTitle.ts';
import type { SlideContext } from '../../../../../contracts/slideContext.ts';
import type { ISvgSlide } from '../../../../../contracts/svgSlide.ts';
import { readSrcFile } from '../../../../../helpers/fileHelper.ts';
import { slideBase } from '../../../../slideBase.ts';

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
          height: 450,
          animatePosition: 1,
          svgContent: `
            <rect class="my-rect" x="550" y="85" width="150" height="150" />
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
            ${svgCode.key('.my-rect', { tabLevel: 2 })}
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
            ${svgCode.keyValue(['class', '=', '"my-rect"'])}
            ${svgCode.keyValue(['x', '=', '"50"'], notFocussedStyle)}
            ${svgCode.keyValue(['y', '=', '"50"'], notFocussedStyle)}
            ${svgCode.keyValue(['width', '=', '"165"'], notFocussedStyle)}
            ${svgCode.keyValue(['height', '=', '"150"'], notFocussedStyle)}
            ${svgCode.tag('/&gt;')}
            <br />
            ${svgCode.tag('&lt;/svg&gt;', notFocussedStyle)}
          `,
        })}

        ${codeBlockWithExample({
          ctx,
          x: 900,
          y: 120,
          width: 910,
          height: 630,
          animatePosition: 1,
          svgContent: `
            <rect class="my-rect my-rect-anim" x="600" y="75" width="150" height="150" />
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
            ${svgCode.keyValue(['@keyframes', ' anim-my-rect-anim ', '{'], { tabLevel: 2 })}<br />
            ${svgCode.tag('0% { transform: translate(0, 0); }', { tabLevel: 3 })}<br />
            ${svgCode.tag('100% { transform: translate(0, 12em); }', { tabLevel: 3 })}<br />

            ${svgCode.value('}', { tabLevel: 2 })}
            <br />
            <br />
            ${svgCode.key('.my-rect-anim', { tabLevel: 2 })}
            ${svgCode.value('{')}
            <br />

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
