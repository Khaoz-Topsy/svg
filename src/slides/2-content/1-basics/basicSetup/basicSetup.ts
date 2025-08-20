import { svgCode } from '@/components/code/codeSpan';
import { windowTitle } from '@/components/window/windowTitle';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { slideBase } from '@/slides/slideBase';
import { readSrcFile } from '@/helpers/fileHelper';
import { codeBlockWithExample } from '@/components/code/codeBlockWithExample';
import { animateSlideIn } from '@/components/core/animate';
import { usePublicImage } from '@/constants/image';
import { svgConstants } from '@/constants/svg';

import notesMd from './basicSetup.md';

export const slideBasicSetup = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const notFocussedStyle = { opacity: 0.3 };

  const notes = await readSrcFile(notesMd);
  return {
    content: slideBase({
      ctx: ctx,
      content: `
        ${await windowTitle('Basic setup')}

        ${codeBlockWithExample({
          ctx,
          x: 100,
          y: 120,
          width: 925,
          height: 450,
          animatePosition: 1,
          svgContent: `
            <g transform="translate(990 0) scale(1.58)">
              <rect x="0" y="0" fill="transparent" width="450" height="285" rx="35" stroke="${svgConstants.colour.controlForeground}" stroke-width="2" />
              
              <rect x="100" y="100" fill="transparent" width="150" height="150" stroke="red" stroke-width="5" />
              <text x="0" y="0" text-anchor="middle" transform="translate(80, 180) rotate(90)" fill="red">ViewBox</text>
              <text x="175" y="90" text-anchor="middle" fill="red">200</text>
              <text x="275" y="180" text-anchor="middle" fill="red">200</text>

              <circle cx="350" cy="40" r="7" fill="${svgConstants.colour.controlForeground}"></circle>
              <text x="350" y="65" text-anchor="middle" fill="${svgConstants.colour.controlForeground}">x: 350, y: 40</text>
              <text x="350" y="85" text-anchor="middle" fill="${svgConstants.colour.controlForeground}">Not visible</text>
              
              <circle cx="175" cy="150" r="7" fill="${svgConstants.colour.exampleColour}"></circle>
              <text x="175" y="185" text-anchor="middle" fill="${svgConstants.colour.exampleColour}">x: 175, y: 150</text>
              <text x="175" y="210" text-anchor="middle" fill="${svgConstants.colour.exampleColour}">Visible</text>
            </g>
          `,
          codeContent: `
            ${svgCode.tag('&lt;svg')}
            ${svgCode.keyValue(['xmlns', '=', '"http://www.w3.org/2000/svg"'])}
            <br />
            ${svgCode.keyValue(['viewBox', '=', '"100 100 200 200"'], { tabLevel: 1 })}
            <br />
            ${svgCode.keyValue(['width', '=', '"300"'], { tabLevel: 1 })}
            ${svgCode.keyValue(['height', '=', '"200"'])}
            <br />
            ${svgCode.tag('&gt;')}
            <br />
            <br />
            <br />
            ${svgCode.value('// SVG content', { tabLevel: 1 })}
            <br />
            <br />
            <br />
            <br />
            ${svgCode.tag('&lt;/svg&gt;')}
          `,
        })}

        ${codeBlockWithExample({
          ctx,
          x: 100,
          y: 630,
          width: 1700,
          height: 350,
          animatePosition: 1,
          svgContent: `
            <g id="basic-setup-example" transform="translate(200 50)">
              <text x="50" y="50" text-anchor="middle" font-size="25" fill="${svgConstants.colour.controlForeground}">viewBox</text>
              <text x="50" y="80" text-anchor="middle" font-size="25" fill="${svgConstants.colour.controlForeground}">0 0 100 100</text>
              <circle cx="50" cy="150" r="50" fill="${svgConstants.colour.exampleColour}"></circle>
              <rect x="0" y="100" fill="transparent" width="100" height="100" stroke="red" stroke-width="5" />
            </g>

            <g id="basic-setup-example-1" transform="translate(500 50)">
              <text x="50" y="50" text-anchor="middle" font-size="25" fill="${svgConstants.colour.controlForeground}">viewBox</text>
              <text x="50" y="80" text-anchor="middle" font-size="25" fill="${svgConstants.colour.controlForeground}">50 0 100 100</text>
              <circle cx="50" cy="150" r="50" transform="translate(-50 0)" fill="${svgConstants.colour.exampleColour}" clip-path="url(#basic-setup-example-1)"></circle>
              <rect x="0" y="100" fill="transparent" width="100" height="100" stroke="red" stroke-width="5" />
            </g>

            <g id="basic-setup-example-2" transform="translate(800 50)">
              <text x="50" y="50" text-anchor="middle" font-size="25" fill="${svgConstants.colour.controlForeground}">viewBox</text>
              <text x="50" y="80" text-anchor="middle" font-size="25" fill="${svgConstants.colour.controlForeground}">0 50 100 100</text>
              <circle cx="50" cy="150" r="50" transform="translate(0 -50)" fill="${svgConstants.colour.exampleColour}" clip-path="url(#basic-setup-example-2)"></circle>
              <rect x="0" y="100" fill="transparent" width="100" height="100" stroke="red" stroke-width="5" />
            </g>

            <g id="basic-setup-example-3" transform="translate(1100 50)">
              <text x="50" y="50" text-anchor="middle" font-size="25" fill="${svgConstants.colour.controlForeground}">viewBox</text>
              <text x="50" y="80" text-anchor="middle" font-size="25" fill="${svgConstants.colour.controlForeground}">50 50 100 100</text>
              <circle cx="50" cy="150" r="50" transform="translate(-50 -50)" fill="${svgConstants.colour.exampleColour}" clip-path="url(#basic-setup-example-3)"></circle>
              <rect x="0" y="100" fill="transparent" width="100" height="100" stroke="red" stroke-width="5" />
            </g>

            <g id="basic-setup-example-4" transform="translate(1400 50)">
              <text x="50" y="50" text-anchor="middle" font-size="25" fill="${svgConstants.colour.controlForeground}">viewBox</text>
              <text x="50" y="80" text-anchor="middle" font-size="25" fill="${svgConstants.colour.controlForeground}">-50 -50 100 100</text>
              <circle cx="50" cy="150" r="50" transform="translate(50 50)" fill="${svgConstants.colour.exampleColour}" clip-path="url(#basic-setup-example-4)"></circle>
              <rect x="0" y="100" fill="transparent" width="100" height="100" stroke="red" stroke-width="5" />
            </g>
          `,
          codeContent: '',
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
