import { codeBlockWithExample } from '@/components/code/codeBlockWithExample';
import { svgCode } from '@/components/code/codeSpan';
import { themes } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { readSrcFile } from '@/helpers/fileHelper';
import { slideBase } from '@/slides/slideBase';

import notesMd from './basicSetup.md';

export const slideBasicSetup = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const code = svgCode(ctx.themeKey);
  const theme = themes[ctx.themeKey];

  const notes = await readSrcFile(notesMd);
  return {
    content: slideBase({
      ctx: ctx,
      title: 'Basic setup',
      content: `
        ${codeBlockWithExample({
          ctx,
          x: 100,
          y: 120,
          width: 925,
          height: 450,
          animatePosition: 1,
          svgContent: `
            <g transform="translate(990 0) scale(1.58)">
              <rect x="0" y="0" fill="transparent" width="450" height="285" rx="35" stroke="${theme.controlForeground}" stroke-width="2" />
              
              <rect x="100" y="100" fill="transparent" width="150" height="150" stroke="red" stroke-width="5" />
              <text x="0" y="0" text-anchor="middle" transform="translate(80, 180) rotate(90)" fill="red">ViewBox</text>
              <text x="175" y="90" text-anchor="middle" fill="red">200</text>
              <text x="275" y="180" text-anchor="middle" fill="red">200</text>

              <circle cx="350" cy="40" r="7" fill="${theme.controlForeground}"></circle>
              <text x="350" y="65" text-anchor="middle" fill="${theme.controlForeground}">x: 350, y: 40</text>
              <text x="350" y="85" text-anchor="middle" fill="${theme.controlForeground}">Not visible</text>
              
              <circle cx="175" cy="150" r="7" fill="${theme.exampleColour}"></circle>
              <text x="175" y="185" text-anchor="middle" fill="${theme.exampleColour}">x: 175, y: 150</text>
              <text x="175" y="210" text-anchor="middle" fill="${theme.exampleColour}">Visible</text>
            </g>
          `,
          codeContent: `
            ${code.tag('&lt;svg')}
            ${code.keyValue(['xmlns', '=', '"http://www.w3.org/2000/svg"'])}
            <br />
            ${code.keyValue(['viewBox', '=', '"100 100 200 200"'], { tabLevel: 1 })}
            <br />
            ${code.keyValue(['width', '=', '"300"'], { tabLevel: 1 })}
            ${code.keyValue(['height', '=', '"200"'])}
            <br />
            ${code.tag('&gt;')}
            <br />
            <br />
            <br />
            ${code.value('// SVG content', { tabLevel: 1 })}
            <br />
            <br />
            <br />
            <br />
            ${code.tag('&lt;/svg&gt;')}
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
              <text x="50" y="50" text-anchor="middle" font-size="25" fill="${theme.controlForeground}">viewBox</text>
              <text x="50" y="80" text-anchor="middle" font-size="25" fill="${theme.controlForeground}">0 0 100 100</text>
              <circle cx="50" cy="150" r="50" fill="${theme.exampleColour}"></circle>
              <rect x="0" y="100" fill="transparent" width="100" height="100" stroke="red" stroke-width="5" />
            </g>

            <g id="basic-setup-example-1" transform="translate(500 50)">
              <text x="50" y="50" text-anchor="middle" font-size="25" fill="${theme.controlForeground}">viewBox</text>
              <text x="50" y="80" text-anchor="middle" font-size="25" fill="${theme.controlForeground}">50 0 100 100</text>
              <circle cx="50" cy="150" r="50" transform="translate(-50 0)" fill="${theme.exampleColour}" clip-path="url(#basic-setup-example-1)"></circle>
              <rect x="0" y="100" fill="transparent" width="100" height="100" stroke="red" stroke-width="5" />
            </g>

            <g id="basic-setup-example-2" transform="translate(800 50)">
              <text x="50" y="50" text-anchor="middle" font-size="25" fill="${theme.controlForeground}">viewBox</text>
              <text x="50" y="80" text-anchor="middle" font-size="25" fill="${theme.controlForeground}">0 50 100 100</text>
              <circle cx="50" cy="150" r="50" transform="translate(0 -50)" fill="${theme.exampleColour}" clip-path="url(#basic-setup-example-2)"></circle>
              <rect x="0" y="100" fill="transparent" width="100" height="100" stroke="red" stroke-width="5" />
            </g>

            <g id="basic-setup-example-3" transform="translate(1100 50)">
              <text x="50" y="50" text-anchor="middle" font-size="25" fill="${theme.controlForeground}">viewBox</text>
              <text x="50" y="80" text-anchor="middle" font-size="25" fill="${theme.controlForeground}">50 50 100 100</text>
              <circle cx="50" cy="150" r="50" transform="translate(-50 -50)" fill="${theme.exampleColour}" clip-path="url(#basic-setup-example-3)"></circle>
              <rect x="0" y="100" fill="transparent" width="100" height="100" stroke="red" stroke-width="5" />
            </g>

            <g id="basic-setup-example-4" transform="translate(1400 50)">
              <text x="50" y="50" text-anchor="middle" font-size="25" fill="${theme.controlForeground}">viewBox</text>
              <text x="50" y="80" text-anchor="middle" font-size="25" fill="${theme.controlForeground}">-50 -50 100 100</text>
              <circle cx="50" cy="150" r="50" transform="translate(50 50)" fill="${theme.exampleColour}" clip-path="url(#basic-setup-example-4)"></circle>
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
