import { codeBlockWithExample } from '../../../../components/code/codeBlockWithExample.ts';
import { svgCode } from '../../../../components/code/codeSpan';
import { animateSlideIn } from '../../../../components/core/animate';
import { gradientSphere } from '../../../../components/spheres/gradientSphere';
import { windowTitle } from '../../../../components/window/windowTitle';
import { usePublicImage } from '../../../../constants/image.ts';
import { svgConstants, svgGradients } from '../../../../constants/svg';
import type { SlideContext } from '../../../../contracts/slideContext';
import type { ISvgSlide } from '../../../../contracts/svgSlide';
import { getPreviousSlideIndex } from '../../../../helpers/contextHelper.ts';
import { readSrcFile } from '../../../../helpers/fileHelper';
import { slideBase } from '../../../slideBase';

import notesMd from './defsTag.md';

export const slideBasicDrawingDefs = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const notFocussedStyle = { opacity: 0.3 };
  const previousSlideId = getPreviousSlideIndex(ctx);
  const alienDelay = ctx.env == 'ssg' ? '1ms' : '10s';
  const alienPositionY = ctx.env == 'ssg' ? '-50' : '0';

  const notes = await readSrcFile(notesMd);
  return {
    content: slideBase({
      ctx: ctx,
      content: `
        ${await windowTitle('Basics of drawing - defs')}

        ${codeBlockWithExample({
          ctx,
          x: 100,
          y: 120,
          width: 925,
          height: 450,
          animatePosition: 1,
          svgContent: `
            <use href="#star-for-def-example" x="600" y="100" stroke="#64E9BA" />
            <use href="#star-for-def-example" x="700" y="210" stroke="#007ca3" />
          `,
          codeContent: `
            ${svgCode.tag('&lt;svg', notFocussedStyle)}
            ${svgCode.keyValue(['version', '=', '"1.1"'], notFocussedStyle)}
            ${svgCode.keyValue(['width', '=', '"300"'], notFocussedStyle)}
            ${svgCode.keyValue(['height', '=', '"200"'], notFocussedStyle)}
            ${svgCode.keyValue(['xmlns', '=', '"http://www.w3.org/2000/svg"'], notFocussedStyle)}
            ${svgCode.tag('&gt;', notFocussedStyle)}
            <br />
            
            ${svgCode.tag('&lt;defs&gt;', { tabLevel: 1 })}
            <br />
            ${svgCode.tag('&lt;polygon', { tabLevel: 2 })}
            ${svgCode.keyValue(['id', '=', '"star"'])}
            ${svgCode.keyValue(['fill', '=', '"transparent"'])}
            <br />
            ${svgCode.keyValue(['points', '=', '"96,0,125.38926261462,55.5491.....'], { tabLevel: 3 })}
            <br />
            ${svgCode.keyValue(['stroke-width', '=', '"5"'], { tabLevel: 3 })}${svgCode.tag('&gt;')}
            <br />
            ${svgCode.tag('&lt;/polygon&gt;', { tabLevel: 2 })}
            <br />

            ${svgCode.tag('&lt;/defs&gt;', { tabLevel: 1 })}
            <br />
            <br />

            ${svgCode.tag('&lt;use', { tabLevel: 1 })}
            ${svgCode.keyValue(['href', '=', '"#star"'])}
            ${svgCode.keyValue(['x', '=', '"600"'])}
            ${svgCode.keyValue(['y', '=', '"100"'])}
            ${svgCode.keyValue(['stroke', '=', '"#64E9BA"'])}
            ${svgCode.tag('/&gt;')}
            <br />
            
            ${svgCode.tag('&lt;use', { tabLevel: 1 })}
            ${svgCode.keyValue(['href', '=', '"#star"'])}
            ${svgCode.keyValue(['x', '=', '"700"'])}
            ${svgCode.keyValue(['y', '=', '"210"'])}
            ${svgCode.keyValue(['stroke', '=', '"#007CA3"'])}
            ${svgCode.tag('/&gt;')}
            <br />
            ${svgCode.tag('&lt;/svg&gt;', notFocussedStyle)}
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
              gradientId: svgGradients.SphereBlue1Gradient.id,
              x: 600,
              y: 320,
              size: 100,
              rotateDeg: 0,
            })}
          `,
          codeContent: `
            ${svgCode.tag('&lt;svg', notFocussedStyle)}
            ${svgCode.keyValue(['version', '=', '"1.1"'], notFocussedStyle)}
            ${svgCode.keyValue(['width', '=', '"300"'], notFocussedStyle)}
            ${svgCode.keyValue(['height', '=', '"200"'], notFocussedStyle)}
            ${svgCode.keyValue(['xmlns', '=', '"http://w...."'], notFocussedStyle)}
            ${svgCode.tag('&gt;', notFocussedStyle)}
            <br />
            
            ${svgCode.tag('&lt;defs&gt;', { tabLevel: 1 })}
            <br />
            ${svgCode.tag('&lt;linearGradient', { tabLevel: 2 })}
            ${svgCode.keyValue(['id', '=', '"SphereBlue1Gradient"'])}${svgCode.tag('&gt;')}
            <br />
            ${svgCode.tag('&lt;stop', { tabLevel: 3 })}
            ${svgCode.keyValue(['offset', '=', '"0%'])}
            ${svgCode.keyValue(['stop-color', '=', '"#8497F2"'])}
            ${svgCode.tag('&gt;&lt;/stop&gt;')}
            <br />
            ${svgCode.tag('&lt;stop', { tabLevel: 3 })}
            ${svgCode.keyValue(['offset', '=', '"100%'])}
            ${svgCode.keyValue(['stop-color', '=', '"#4A66ED"'])}
            ${svgCode.tag('&gt;&lt;/stop&gt;')}
            <br />
            ${svgCode.tag('&lt;/linearGradient&gt;', { tabLevel: 2 })}
            <br />

            ${svgCode.tag('&lt;/defs&gt;', { tabLevel: 1 })}
            <br />
            <br />

            ${svgCode.tag('&lt;circle', { tabLevel: 1 })}
            ${svgCode.keyValue(['cx', '=', '"100"'])}
            ${svgCode.keyValue(['cy', '=', '"100"'])}
            ${svgCode.keyValue(['r', '=', '"100"'])}
            <br />
            ${svgCode.keyValue(['fill', '=', '"url(#SphereBlue1Gradient)"'], { tabLevel: 2 })}
            ${svgCode.tag('/&gt;')}
            <br />
            ${svgCode.tag('&lt;/svg&gt;', notFocussedStyle)}
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
            ${svgCode.tag('&lt;svg', notFocussedStyle)}
            ${svgCode.keyValue(['version', '=', '"1.1"'], notFocussedStyle)}
            ${svgCode.keyValue(['width', '=', '"300"'], notFocussedStyle)}
            ${svgCode.keyValue(['height', '=', '"200"'], notFocussedStyle)}
            ${svgCode.keyValue(['xmlns', '=', '"http://www.w3.org/2000/svg"'], notFocussedStyle)}
            ${svgCode.tag('&gt;', notFocussedStyle)}
            <br />
            
            ${svgCode.tag('&lt;defs&gt;', { tabLevel: 1 })}
            <br />
            ${svgCode.tag('&lt;pattern', { tabLevel: 2 })}
            ${svgCode.keyValue(['id', '=', '"my-pattern"'])}${svgCode.tag('&gt;')}
            <br />
            ${svgCode.tag('&lt;circle', { tabLevel: 3 })}
            ${svgCode.keyValue(['cx', '=', '"10"'])}
            ${svgCode.keyValue(['cy', '=', '"10"'])}
            ${svgCode.keyValue(['r', '=', '"10"'])}
            ${svgCode.keyValue(['fill', '=', '"#64E9BA"'])}
            ${svgCode.tag('/&gt;')}
            <br />
            ${svgCode.tag('&lt;/pattern&gt;', { tabLevel: 2 })}
            <br />

            ${svgCode.tag('&lt;/defs&gt;', { tabLevel: 1 })}
            <br />
            <br />
            
            ${svgCode.tag('&lt;rect', { tabLevel: 1 })}
            ${svgCode.keyValue(['width', '=', '"200"'])}
            ${svgCode.keyValue(['height', '=', '"100"'])}
            ${svgCode.keyValue(['x', '=', '"0"'])}
            ${svgCode.keyValue(['y', '=', '"0"'])}
            ${svgCode.keyValue(['fill', '=', '"url(#my-pattern)"'])}
            ${svgCode.tag('/&gt;')}
            <br />
            ${svgCode.tag('&lt;/svg&gt;', notFocussedStyle)}
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
                fill="${svgConstants.colour.illustrationSuit}"
                stroke="${svgConstants.colour.secondary}"
                stroke-width="3"
              >
              </rect>
              <text x="220" y="100" fill="${svgConstants.colour.controlForeground}" font-size="30">
                Tired of SVG tags?
              </text>
              <text x="220" y="150" fill="${svgConstants.colour.controlForeground}" font-size="30">
                Do you want to see something more
              </text>
              <text x="220" y="190" fill="${svgConstants.colour.controlForeground}" font-size="30">
                more familiar?
              </text>
              <polyline
                points="650,228 690,250 690,170"
                fill="${svgConstants.colour.illustrationSuit}"
                stroke="${svgConstants.colour.secondary}"
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
