import { codeBlockWithExample } from '@/components/code/codeBlockWithExample';
import { svgCode } from '@/components/code/codeSpan';
import { themes } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { readBase64Image, readLocalFile } from '@/helpers/fileHelper';
import { notFocussedStyle } from '@/helpers/svgHelper';
import { slideBase } from '@/slides/slideBase';

import notesMd from './fakeSvg.md';
import { isServerMode } from '@/constants/env';
import { PublicImage } from '@/constants/image';

export const slideFakeSvg = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const theme = themes[ctx.themeKey];
  const code = svgCode(theme.code);

  const sharedProperties = {
    ssg: { secondsToDisplay: 3 },
    notes: await readLocalFile(notesMd),
  };
  return {
    content: slideBase({
      ctx: ctx,
      title: 'Basics of drawing - Fake SVGs',
      content: `
        ${codeBlockWithExample({
          ctx,
          x: 100,
          y: 120,
          width: 1700,
          height: 350,
          animatePosition: 1,
          svgContent: `
            <g transform="scale(1.5) translate(850, 10)">
              <use href="#star-for-def-example" x="0" y="10" 
                stroke="${theme.exampleColour}" fill="${theme.exampleColour}" 
              />
              <image x="65" y="70"
                href="${await readBase64Image(PublicImage.entelect)}"
                alt="Entelect logo"
               />
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
            ${code.keyValue(['stroke', '=', `"${theme.exampleColour}"`])}
            ${code.keyValue(['fill', '=', `"${theme.exampleColour}"`])}
            ${code.tag('/&gt;')}
            <br />
            <br />
            
            ${code.tag('&lt;image', { tabLevel: 1 })}
            <br />
            ${code.keyValue(['href', '=', '"data:image/png;base64,'], { tabLevel: 2 })}
            ${code.tag('&lt;BASE 64 DATA&gt;')}${code.value('"')}
            <br />
            ${code.keyValue(['x', '=', '"60"'], { tabLevel: 2 })}
            ${code.keyValue(['y', '=', '"70"'])}
            ${code.keyValue(['alt', '=', '"raster image in svg"'])}
            <br />
            ${code.tag('/&gt;', { tabLevel: 1 })}
            <br />

            ${code.tag('&lt;/svg&gt;', notFocussedStyle)}
          `,
        })}
        
        ${codeBlockWithExample({
          ctx,
          x: 100,
          y: 520,
          width: 1700,
          height: 450,
          animatePosition: 1,
          svgContent: `
            <g transform="scale(1.5) translate(850, 50)">
              <clipPath id="httpImageClip">
                <use href="#star-for-def-example" x="0" y="10"/>
              </clipPath>
              <image href="${
                isServerMode(ctx.env)
                  ? await readBase64Image(PublicImage.entelectGithub)
                  : './assets/img/entelect-github.png'
              }" clip-path="url(#httpImageClip)" alt="Description of the image" />
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
            <br />
            
            ${code.tag('&lt;clipPath', { tabLevel: 1 })}
            ${code.keyValue(['id', '=', '"#httpImageClip"'])}
            <br/>
            ${code.tag('&lt;use', { tabLevel: 2 })}
            ${code.keyValue(['href', '=', '"#star"'])}
            ${code.keyValue(['x', '=', '"0"'])}
            ${code.keyValue(['y', '=', '"10"'])}
            ${code.tag('/&gt;')}
            <br />
            ${code.tag('&lt;/clipPath&gt;', { tabLevel: 1 })}
            <br />
            <br />
            
            ${code.tag('&lt;image', { tabLevel: 1 })}
            <br />
            ${code.keyValue(['href', '=', '"https://avatars.githubusercontent.com/u/8133921?s=200&amp;v=4"'], {
              tabLevel: 2,
            })}
            <br />
            ${code.keyValue(['clip-path', '=', '"url(#httpImageClip)"'], { tabLevel: 2 })}
            ${code.keyValue(['alt', '=', '"raster image in svg"'])}
            <br />
            ${code.tag('/&gt;', { tabLevel: 1 })}
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
