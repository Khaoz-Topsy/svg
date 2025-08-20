import { codeBlockWithExample } from '@/components/code/codeBlockWithExample';
import { svgCode } from '@/components/code/codeSpan';
import { slideBeginValue } from '@/components/common/slideAnimation';
import { animateFadeIn } from '@/components/core/animate';
import { themes } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { getPreviousSlideIndex } from '@/helpers/contextHelper.ts';
import { readSrcFile } from '@/helpers/fileHelper';
import { slideBase } from '@/slides/slideBase';

import notesMd from './animate.md';

export const slideAnimate = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const notFocussedStyle = { opacity: 0.3 };
  const previousSlideId = getPreviousSlideIndex(ctx);
  const code = svgCode(ctx.themeKey);
  const theme = themes[ctx.themeKey];

  const tableContent = `
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 1.33em;">
      <style>
        table {
          color: white;
          border: 1px solid white;
          border-radius: 1em;
          border-collapse: collapse;
        }
        
        table thead {
          background-color: #2d303aff;
          height: 3em;
        }
        
        table tbody td {
          border: 1px solid white;
          padding-inline: 0.5em;
        }
      </style>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>SVG Animation Tags</th>
            <th>CSS Animation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Browser Compatibility</td>	
            <td>❌ Inconsistent</td>	
            <td>✅ Reliable</td>
          </tr>
          <tr>
            <td>Complexity Handling</td>
            <td>✅ Rich features</td>
            <td>❌ Limited for intricate SVG-specific animations</td>
          </tr>
          <tr>
            <td>Maintenance &amp; Flexibility</td>
            <td>❌ Harder to manage inside SVG</td>
            <td>✅ Cleaner and more flexible</td>
          </tr>
          <tr>
            <td>Triggering Interaction</td>
            <td>❌ Limited</td>
            <td>✅ Great with hover/click/class toggles</td>
          </tr>
          <tr>
            <td>Path/Motion Animation</td>
            <td>✅ Possible with SMIL</td>
            <td>❌ Limited unless using JS or Motion Path</td>
          </tr>
        </tbody>
      </table>
    </div>`;

  const notes = await readSrcFile(notesMd);
  return {
    content: slideBase({
      ctx: ctx,
      title: 'Animation - CSS or SVG',
      content: `
        ${codeBlockWithExample({
          ctx,
          x: 100,
          y: 120,
          width: 1700,
          height: 415,
          animatePosition: 1,
          svgContent: `
            <circle class="cool-circle" cx="1000" cy="150" r="75">              
              <animateTransform id="left" attributeName="transform" type="translate" from="0 0" to="500 0" begin="0s;right.end" dur="1s" />
              <animateTransform id="right" attributeName="transform" type="translate" from="500 0" to="0 0" begin="left.end" dur="1s" />
            </circle>
          `,
          codeContent: `
            ${code.tag('&lt;svg', notFocussedStyle)}
            ${code.keyValue(['version', '=', '"1.1"'], notFocussedStyle)}
            ${code.keyValue(['width', '=', '"300"'], notFocussedStyle)}
            ${code.keyValue(['height', '=', '"200"'], notFocussedStyle)}
            ${code.keyValue(['xmlns', '=', '"http://www.w3.org/2000/svg"'], notFocussedStyle)}
            ${code.tag('&gt;', notFocussedStyle)}
            <br />
            
            ${code.tag('&lt;rect', { tabLevel: 1 })}
            ${code.keyValue(['class', '=', '"my-rect"'])}
            ${code.keyValue(['x', '=', '"550"'])}
            ${code.keyValue(['y', '=', '"85"'])}
            ${code.keyValue(['width', '=', '"150"'])}
            ${code.keyValue(['height', '=', '"150"'])}${code.tag('&gt;')}
            <br />
            ${code.tag('&lt;animateTransform', { tabLevel: 2 })}
            ${code.keyValue(['id', '=', '"left"'])}
            ${code.keyValue(['attributeName', '=', '"transform"'])}
            ${code.keyValue(['type', '=', '"translate"'])}
            <br />
            ${code.keyValue(['from', '=', '"0 0"'], { tabLevel: 3 })}
            ${code.keyValue(['to', '=', '"500 0"'])}
            ${code.keyValue(['begin', '=', '"0s;right.end"'])}
            ${code.keyValue(['dur', '=', '"1s"'])}
            <br />
            ${code.tag('/&gt;', { tabLevel: 2 })}
            <br />
            ${code.tag('&lt;animateTransform', { tabLevel: 2 })}
            ${code.keyValue(['id', '=', '"right"'])}
            ${code.keyValue(['attributeName', '=', '"transform"'])}
            ${code.keyValue(['type', '=', '"translate"'])}
            <br />
            ${code.keyValue(['from', '=', '"500 0"'], { tabLevel: 3 })}
            ${code.keyValue(['to', '=', '"0 0"'])}
            ${code.keyValue(['begin', '=', '"left.end"'])}
            ${code.keyValue(['dur', '=', '"1s"'])}
            <br />
            ${code.tag('/&gt;', { tabLevel: 2 })}
            <br />

            ${code.tag('&lt;/rect&gt;', { tabLevel: 1 })}
            <br />
            ${code.tag('&lt;/svg&gt;', notFocussedStyle)}
          `,
        })}
        
        ${codeBlockWithExample({
          ctx,
          x: 100,
          y: 580,
          width: 850,
          height: 415,
          animatePosition: 2,
          svgContent: `
            <text x="60" y="85" fill="${theme.controlForeground}" font-size="25">
              Provides a way to animate an attribute of an element over time.
            </text>
            <text x="60" y="190" fill="${theme.controlForeground}" font-size="25">
              Provides a way to define how an element moves along a motion path.
            </text>
            <text x="60" y="300" fill="${theme.controlForeground}" font-size="25">
              Animates a transformation attribute on its target element, allowing 
            </text>
            <text x="60" y="335" fill="${theme.controlForeground}" font-size="25">
              animations to control translation, scaling, rotation, and/or skewing.
            </text>
          `,
          codeContent: `
            ${code.tag('&lt;animate')}
            ${code.keyValue(['attributeName', '=', '"..."'])}
            ${code.tag('/&gt;')}
            <br />
            <br />
            <br />
            ${code.tag('&lt;animateMotion')}
            ${code.keyValue(['attributeName', '=', '"..."'])}
            ${code.tag('/&gt;')}
            <br />
            <br />
            <br />
            ${code.tag('&lt;animateTransform')}
            ${code.keyValue(['attributeName', '=', '"..."'])}
            ${code.tag('/&gt;')}
          `,
        })}

        <g opacity="0" transform="translate(1000 590)">
            ${animateFadeIn({ duration: '1s', begin: slideBeginValue(previousSlideId, 1000) })}
                   
            <foreignObject x="0" y="0" width="800" height="600">
              ${tableContent}
            </foreignObject>
        </g>
        `,
      notes,
    }),
    notes,
    ssg: {
      secondsToDisplay: 3,
    },
  };
};
