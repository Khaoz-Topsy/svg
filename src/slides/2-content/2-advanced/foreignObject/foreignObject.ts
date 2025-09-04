import { codeBlockWithExample } from '@/components/code/codeBlockWithExample';
import { svgCode } from '@/components/code/codeSpan';
import { themes } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { readLocalFile } from '@/helpers/fileHelper';
import { notFocussedStyle } from '@/helpers/svgHelper';
import { slideBase } from '@/slides/slideBase';

import { isServerMode } from '@/constants/env';
import notesMd from './foreignObject.md';

export const slideForeignObject = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const theme = themes[ctx.themeKey];
  const code = svgCode(theme.code);

  const sharedProperties = {
    ssg: { secondsToDisplay: 3 },
    notes: await readLocalFile(notesMd),
  };
  return {
    content: slideBase({
      ctx: ctx,
      title: 'Special Tags - foreignObject',
      content: `
        ${codeBlockWithExample({
          ctx,
          x: 100,
          y: 120,
          width: 1700,
          height: 415,
          animatePosition: 1,
          svgContent: `
            <g transform="scale(1.5) translate(850, 40)">
              <use href="#star-for-def-example" x="0" y="0" stroke="${theme.exampleColour2}" fill="${
            theme.exampleColour2
          }" />
              <foreignObject x="50" y="65" width="1200" height="160">
                <div xmlns="http://www.w3.org/1999/xhtml" style="font-size:16px; color: ${theme.controlForeground};">
                  Hello from HTML inside SVG!
                </div>
                <input type="date" value="${new Date().toISOString().slice(0, 10)}" />
              </foreignObject>
            </g>
          `,
          codeContent: `
            ${code.tag('&lt;svg', notFocussedStyle)}
            ${code.keyValue(['version', '=', '"1.1"'], notFocussedStyle)}
            ${code.keyValue(['width', '=', '"300"'], notFocussedStyle)}
            ${code.keyValue(['height', '=', '"200"'], notFocussedStyle)}
            ${code.keyValue(['xmlns', '=', '"http://www.w3.org/2000/svg"'], notFocussedStyle)}
            ${code.tag('&gt;', notFocussedStyle)}
            <br />

            ${code.tag('&lt;use', { tabLevel: 1 })}
            ${code.keyValue(['href', '=', '"#star"'])}
            ${code.keyValue(['x', '=', '"0"'])}
            ${code.keyValue(['y', '=', '"10"'])}
            ${code.keyValue(['stroke', '=', `"${theme.exampleColour2}"`])}
            ${code.keyValue(['fill', '=', `"${theme.exampleColour2}"`])}
            ${code.tag('/&gt;')}
            <br />
            <br />
            
            ${code.tag('&lt;foreignObject', { tabLevel: 1 })}
            ${code.keyValue(['x', '=', '"50"'])}
            ${code.keyValue(['y', '=', '"65"'])}
            ${code.keyValue(['width', '=', '"1200"'])}
            ${code.keyValue(['height', '=', '"160"'])}
            <br/>
            ${code.tag('&lt;div', { tabLevel: 2 })}
            ${code.keyValue(['xmlns', '=', '"http://www.w3.org/1999/xhtml"'])}
            ${code.keyValue(['style', '=', `"font-size:16px; color: ${theme.controlForeground};"`])}
            <br />
            ${code.value('Hello from HTML inside SVG!', { tabLevel: 3 })}
            <br />
            ${code.tag('&lt;/div&gt;', { tabLevel: 2 })}
            <br />

            ${code.tag('&lt;input', { tabLevel: 2 })}
            ${code.keyValue(['type', '=', '"date"'])}
            ${code.keyValue(['value', '=', `"${new Date().toISOString().slice(0, 10)}"`])}
            ${code.tag('/&gt;')}
            <br />
            
            ${code.tag('&lt;/foreignObject&gt;', { tabLevel: 1 })}
            <br />
            ${code.tag('&lt;/svg&gt;', notFocussedStyle)}
          `,
        })}
        
        ${codeBlockWithExample({
          ctx,
          x: 100,
          y: 580,
          width: 1700,
          height: 415,
          animatePosition: 2,
          svgContent: `
            <g transform="scale(1.5) translate(800, 40)">
              <clipPath id="movieClip">
                <use href="#star-for-def-example" x="50" y="14" />
              </clipPath>
              <foreignObject x="0" y="0" width="300" height="3000" clip-path="url(#movieClip)">
                <video xmlns="http://www.w3.org/1999/xhtml" width="300" height="200" autoPlay="true" muted="true" loop="true" 
                  ${isServerMode(ctx.env) ? 'controls="true"' : ''}>
                  <source src="https://download.blender.org/peach/trailer/trailer_iphone.m4v" type="video/mp4" />
                </video>
              </foreignObject>
            </g>
          `,
          codeContent: `
            ${code.tag('&lt;svg', notFocussedStyle)}
            ${code.keyValue(['version', '=', '"1.1"'], notFocussedStyle)}
            ${code.keyValue(['width', '=', '"300"'], notFocussedStyle)}
            ${code.keyValue(['height', '=', '"200"'], notFocussedStyle)}
            ${code.keyValue(['xmlns', '=', '"http://www.w3.org/2000/svg"'], notFocussedStyle)}
            ${code.tag('&gt;', notFocussedStyle)}
            <br />
            
            ${code.tag('&lt;clipPath', { tabLevel: 1 })}
            ${code.keyValue(['id', '=', '"#movieClip"'])}${code.tag('&gt;')}
            <br/>
            ${code.tag('&lt;use', { tabLevel: 2 })}
            ${code.keyValue(['href', '=', '"#star"'])}
            ${code.keyValue(['x', '=', '"50"'])}
            ${code.keyValue(['y', '=', '"14"'])}
            ${code.tag('/&gt;')}
            <br/>
            ${code.tag('&lt;/clipPath&gt;', { tabLevel: 1 })}
            <br />
            
            ${code.tag('&lt;foreignObject', { tabLevel: 1 })}
            ${code.keyValue(['x', '=', '"0"'])}
            ${code.keyValue(['y', '=', '"0"'])}
            ${code.keyValue(['width', '=', '"1200"'])}
            ${code.keyValue(['height', '=', '"160"'])}
            ${code.keyValue(['clip-path', '=', '"url(#movieClip)"'])}
            <br/>
            ${code.tag('&lt;video', { tabLevel: 2 })}
            ${code.keyValue(['xmlns', '=', '"http://www.w3.org/1999/xhtml"'])}
            ${code.key('autoPlay muted loop')}
            ${code.tag('&gt;')}
            <br />
            ${code.tag('&lt;source', { tabLevel: 3 })}
            ${code.keyValue(['src', '=', '"https://download.blender.org/peach/trailer/trailer_iphone.m4v"'])}
            ${code.keyValue(['type', '=', '"video/mp4"'])}
            ${code.tag('/&gt;')}
            <br />
            ${code.tag('&lt;/video&gt;', { tabLevel: 2 })}
            <br />
            ${code.tag('&lt;/foreignObject&gt;', { tabLevel: 1 })}
            <br />
            ${code.tag('&lt;/svg&gt;', notFocussedStyle)}
          `,
        })}
        `,
      ...sharedProperties,
    }),
    ...sharedProperties,
  };
};
