import { codeSpan, getStyleValue, svgCode } from '@/components/code/codeSpan';
import { themes } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { readSrcFile } from '@/helpers/fileHelper';
import { notFocussedStyle } from '@/helpers/svgHelper';
import { slideBase } from '@/slides/slideBase';
import { slideWhyIsSvgCard } from './whyIsSvgCard';

import notesMd from './whyIsSvg.md';

export const slideWhyIsSvg = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const notes = await readSrcFile(notesMd);
  const code = svgCode(ctx.themeKey);
  const theme = themes[ctx.themeKey];

  return {
    content: slideBase({
      ctx: ctx,
      title: 'Why is an SVG?',
      content: `
        ${slideWhyIsSvgCard({
          ctx,
          x: 100,
          y: 150,
          animatePosition: 1,
          svgContent: `
            <text x="250" y="75" fill="${theme.controlForeground}" text-anchor="middle" font-size="50">
              Scalability
            </text>

            <g transform="translate(50 175)">
              <use href="#duckPixelArt" /> 
              <text x="45" y="120" fill="${theme.codeKey}" text-anchor="middle" font-size="25">
                PNG
              </text>
              <polygon
                points="100,103 135,103 135,90 165,110 135,130 135,117 100,117"
                fill="${theme.codeKey}"
                stroke="${theme.codeKey}" stroke-width="5"
              />
            </g>
            <g transform="translate(250 175) scale(2)" filter="url(#GaussianBlur)">
              <use href="#duckPixelArt" /> 
            </g>

            <g transform="translate(50 500)">
              <use href="#duckPixelArt" /> 
              <text x="45" y="120" fill="${theme.codeKey}" text-anchor="middle" font-size="25">
                SVG
              </text>
              <polygon
                points="100,103 135,103 135,90 165,110 135,130 135,117 100,117"
                fill="${theme.codeKey}"
                stroke="${theme.codeKey}" stroke-width="5"
              />
            </g>
            <g transform="translate(250 500) scale(2)">
              <use href="#duckPixelArt" /> 
            </g>
          `,
        })}

        ${slideWhyIsSvgCard({
          ctx,
          x: 700,
          y: 150,
          animatePosition: 1,
          svgContent: `
            <text x="250" y="75" fill="${theme.controlForeground}" text-anchor="middle" font-size="50">
              Flexibility
            </text>
          `,
        })}

        ${slideWhyIsSvgCard({
          ctx,
          x: 1300,
          y: 150,
          animatePosition: 1,
          svgContent: `
            <text x="250" y="75" fill="${theme.controlForeground}" text-anchor="middle" font-size="50">
              Accessibility
            </text>


          <foreignObject x="30" y="150" width="600" height="600">
            <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 1.5em;">
              ${code.tag('&lt;svg', notFocussedStyle)}
              ${code.key('version', notFocussedStyle)}
              ${code.tag('=', notFocussedStyle)}
              ${code.value('"1.1"', notFocussedStyle)}
              <br />
              ${code.keyValue(['width', '=', '"300"'], { ...notFocussedStyle, tabLevel: 1 })}
              ${code.keyValue(['height', '=', '"300"'], notFocussedStyle)}
              <br />
              ${code.keyValue(['xmlns', '=', '"http://www.w3.org/2000/svg"'], { ...notFocussedStyle, tabLevel: 1 })}
              ${code.tag('&gt;', notFocussedStyle)}
              <br />
              <br />
              
              ${code.tag('&lt;title', { tabLevel: 1 })}${code.tag('&gt;')}${codeSpan(
            'Hand crafted SVG',
            getStyleValue({ colour: theme.controlForeground }),
          )}${code.tag('&lt;/title&gt;')}              
              <br />
              <br />

              ${code.tag('&lt;desc', { tabLevel: 1 })}${code.tag('&gt;')}
              <br />
              ${codeSpan(
                'A hand crafted artisanal SVG',
                getStyleValue({ tabLevel: 2, colour: theme.controlForeground }),
              )}
              <br />
              ${code.tag('&lt;/desc&gt;', { tabLevel: 1 })}

              <br />
              <br />

              ${code.tag('&lt;rect', { ...notFocussedStyle, tabLevel: 1 })}
              ${code.keyValue(['width', '=', '"250"'], notFocussedStyle)}
              ${code.keyValue(['height', '=', '"250"'], notFocussedStyle)}
              ${code.keyValue(['fill', '=', '"pur...'], notFocussedStyle)}
              <br />
              ${code.tag('&lt;circle', { ...notFocussedStyle, tabLevel: 1 })}
              ${code.keyValue(['cx', '=', '"125"'], notFocussedStyle)}
              ${code.keyValue(['cy', '=', '"125"'], notFocussedStyle)}
              ${code.keyValue(['r', '=', '"80"'], notFocussedStyle)}
              ${code.keyValue(['fill', '=', '"lig...'], notFocussedStyle)}
              <br />
              <br />

              ${code.tag('&lt;/svg&gt;', notFocussedStyle)}
              
            </div>
          </foreignObject>
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
