import { codeBlockWithExample } from '@/components/code/codeBlockWithExample.ts';
import { svgCode } from '@/components/code/codeSpan';
import { animateSlideIn } from '@/components/core/animate';
import { gradientSphere } from '@/components/spheres/gradientSphere';
import { usePublicImage } from '@/constants/image.ts';
import { svgGradients } from '@/constants/svg';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { getPreviousSlideIndex } from '@/helpers/contextHelper.ts';
import { readSrcFile } from '@/helpers/fileHelper';
import { slideBase } from '@/slides/slideBase';

import { themes } from '@/constants/theme';
import notesMd from './defsTag.md';

export const slideBasicDrawingDefs = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const notFocussedStyle = { opacity: 0.3 };
  const previousSlideId = getPreviousSlideIndex(ctx);
  const gradients = svgGradients(ctx.themeKey);
  const code = svgCode(ctx.themeKey);
  const theme = themes[ctx.themeKey];

  const alienDelay = ctx.env == 'ssg' ? '1ms' : '10s';
  const alienPositionY = ctx.env == 'ssg' ? '-50' : '0';

  const notes = await readSrcFile(notesMd);
  return {
    content: slideBase({
      ctx: ctx,
      title: 'Basics of drawing - defs',
      content: `
        ${codeBlockWithExample({
          ctx,
          x: 100,
          y: 120,
          width: 925,
          height: 450,
          animatePosition: 1,
          svgContent: `
            <use href="#star-for-def-example" x="600" y="100" stroke="${theme.exampleColour}" />
            <use href="#star-for-def-example" x="700" y="210" stroke="#007ca3" />
          `,
          codeContent: `
            ${code.tag('&lt;svg', notFocussedStyle)}
            ${code.keyValue(['version', '=', '"1.1"'], notFocussedStyle)}
            ${code.keyValue(['width', '=', '"300"'], notFocussedStyle)}
            ${code.keyValue(['height', '=', '"200"'], notFocussedStyle)}
            ${code.keyValue(['xmlns', '=', '"http://www.w3.org/2000/svg"'], notFocussedStyle)}
            ${code.tag('&gt;', notFocussedStyle)}
            <br />
            
            ${code.tag('&lt;defs&gt;', { tabLevel: 1 })}
            <br />
            ${code.tag('&lt;polygon', { tabLevel: 2 })}
            ${code.keyValue(['id', '=', '"star"'])}
            ${code.keyValue(['fill', '=', '"transparent"'])}
            <br />
            ${code.keyValue(['points', '=', '"96,0,125.38926261462,55.5491.....'], { tabLevel: 3 })}
            <br />
            ${code.keyValue(['stroke-width', '=', '"5"'], { tabLevel: 3 })}${code.tag('&gt;')}
            <br />
            ${code.tag('&lt;/polygon&gt;', { tabLevel: 2 })}
            <br />

            ${code.tag('&lt;/defs&gt;', { tabLevel: 1 })}
            <br />
            <br />

            ${code.tag('&lt;use', { tabLevel: 1 })}
            ${code.keyValue(['href', '=', '"#star"'])}
            ${code.keyValue(['x', '=', '"600"'])}
            ${code.keyValue(['y', '=', '"100"'])}
            ${code.keyValue(['stroke', '=', '"#64E9BA"'])}
            ${code.tag('/&gt;')}
            <br />
            
            ${code.tag('&lt;use', { tabLevel: 1 })}
            ${code.keyValue(['href', '=', '"#star"'])}
            ${code.keyValue(['x', '=', '"700"'])}
            ${code.keyValue(['y', '=', '"210"'])}
            ${code.keyValue(['stroke', '=', '"#007CA3"'])}
            ${code.tag('/&gt;')}
            <br />
            ${code.tag('&lt;/svg&gt;', notFocussedStyle)}
          `,
        })}
        
        ${codeBlockWithExample({
          ctx,
          x: 1075,
          y: 120,
          width: 735,
          height: 450,
          animatePosition: 2,
          svgContent: `
            ${gradientSphere({
              gradientId: gradients.SphereBlue1Gradient.id,
              x: 600,
              y: 320,
              size: 100,
              rotateDeg: 0,
            })}
          `,
          codeContent: `
            ${code.tag('&lt;svg', notFocussedStyle)}
            ${code.keyValue(['version', '=', '"1.1"'], notFocussedStyle)}
            ${code.keyValue(['width', '=', '"300"'], notFocussedStyle)}
            ${code.keyValue(['height', '=', '"200"'], notFocussedStyle)}
            ${code.keyValue(['xmlns', '=', '"http://w...."'], notFocussedStyle)}
            ${code.tag('&gt;', notFocussedStyle)}
            <br />
            
            ${code.tag('&lt;defs&gt;', { tabLevel: 1 })}
            <br />
            ${code.tag('&lt;linearGradient', { tabLevel: 2 })}
            ${code.keyValue(['id', '=', '"Blue1Gradient"'])}${code.tag('&gt;')}
            <br />
            ${code.tag('&lt;stop', { tabLevel: 3 })}
            ${code.keyValue(['offset', '=', '"0%'])}
            ${code.keyValue(['stop-color', '=', '"#8497F2"'])}
            ${code.tag('&gt;&lt;/stop&gt;')}
            <br />
            ${code.tag('&lt;stop', { tabLevel: 3 })}
            ${code.keyValue(['offset', '=', '"100%'])}
            ${code.keyValue(['stop-color', '=', '"#4A66ED"'])}
            ${code.tag('&gt;&lt;/stop&gt;')}
            <br />
            ${code.tag('&lt;/linearGradient&gt;', { tabLevel: 2 })}
            <br />

            ${code.tag('&lt;/defs&gt;', { tabLevel: 1 })}
            <br />
            <br />

            ${code.tag('&lt;circle', { tabLevel: 1 })}
            ${code.keyValue(['cx', '=', '"100"'])}
            ${code.keyValue(['cy', '=', '"100"'])}
            ${code.keyValue(['r', '=', '"100"'])}
            <br />
            ${code.keyValue(['fill', '=', '"url(#Blue1Gradient)"'], { tabLevel: 2 })}
            ${code.tag('/&gt;')}
            <br />
            ${code.tag('&lt;/svg&gt;', notFocussedStyle)}
          `,
        })}
        
        ${codeBlockWithExample({
          ctx,
          x: 100,
          y: 620,
          width: 925,
          // width: 1710,
          height: 380,
          animatePosition: 3,
          svgContent: `
            <rect width="200" height="100" x="650" y="100" fill="url(#pattern-for-def-example)" />
          `,
          codeContent: `
            ${code.tag('&lt;svg', notFocussedStyle)}
            ${code.keyValue(['version', '=', '"1.1"'], notFocussedStyle)}
            ${code.keyValue(['width', '=', '"300"'], notFocussedStyle)}
            ${code.keyValue(['height', '=', '"200"'], notFocussedStyle)}
            ${code.keyValue(['xmlns', '=', '"http://www.w3.org/2000/svg"'], notFocussedStyle)}
            ${code.tag('&gt;', notFocussedStyle)}
            <br />
            
            ${code.tag('&lt;defs&gt;', { tabLevel: 1 })}
            <br />
            ${code.tag('&lt;pattern', { tabLevel: 2 })}
            ${code.keyValue(['id', '=', '"my-pattern"'])}${code.tag('&gt;')}
            <br />
            ${code.tag('&lt;circle', { tabLevel: 3 })}
            ${code.keyValue(['cx', '=', '"10"'])}
            ${code.keyValue(['cy', '=', '"10"'])}
            ${code.keyValue(['r', '=', '"10"'])}
            ${code.keyValue(['fill', '=', '"#64E9BA"'])}
            ${code.tag('/&gt;')}
            <br />
            ${code.tag('&lt;/pattern&gt;', { tabLevel: 2 })}
            <br />

            ${code.tag('&lt;/defs&gt;', { tabLevel: 1 })}
            <br />
            <br />
            
            ${code.tag('&lt;rect', { tabLevel: 1 })}
            ${code.keyValue(['width', '=', '"200"'])}
            ${code.keyValue(['height', '=', '"100"'])}
            ${code.keyValue(['x', '=', '"0"'])}
            ${code.keyValue(['y', '=', '"0"'])}
            ${code.keyValue(['fill', '=', '"url(#my-pattern)"'])}
            ${code.tag('/&gt;')}
            <br />
            ${code.tag('&lt;/svg&gt;', notFocussedStyle)}
          `,
        })}
        
        ${codeBlockWithExample({
          ctx,
          x: 1075,
          y: 620,
          width: 0,
          height: 0,
          animatePosition: 4,
          svgContent: `
            <g class="transition-slide noselect" transform="translate(700 ${alienPositionY})">
                ${animateSlideIn({
                  from: `700 ${alienPositionY}`,
                  to: `0 ${alienPositionY}`,
                  begin: previousSlideId == undefined ? undefined : `${previousSlideId}-slide-anim.begin+1s`,
                  initialDelay: alienDelay,
                })}
              <rect 
                width="500"
                height="180"
                x="190"
                y="50"
                rx="50"
                fill="${theme.illustrationShoes}"
                stroke="${theme.secondary}"
                stroke-width="3"
              >
              </rect>
              <text x="220" y="100" fill="${theme.controlForeground}" font-size="30">
                Tired of SVG tags?
              </text>
              <text x="220" y="150" fill="${theme.controlForeground}" font-size="30">
                Do you want to see something more
              </text>
              <text x="220" y="190" fill="${theme.controlForeground}" font-size="30">
                more familiar?
              </text>
              <polyline
                points="650,228 690,250 690,170"
                fill="${theme.illustrationShoes}"
                stroke="${theme.secondary}"
                stroke-width="3"
              />
              ${usePublicImage('alien', 'transform="translate(-90, -700) scale(1.5)"')}
            </g>
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
