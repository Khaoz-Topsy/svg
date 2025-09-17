import { codeSpan, getStyleValue, svgCode } from '@/components/code/codeSpan';
import { themes } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { readLocalFile } from '@/helpers/fileHelper';
import { notFocussedStyle } from '@/helpers/svgHelper';
import { slideBase } from '@/slides/slideBase';
import { whyIsSvgCard } from '../whyIsSvg/whyIsSvgCard';

import notesMd from './whenToUseAnSvg.md';

export const slideWhenToUseAnSvg = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const theme = themes[ctx.themeKey];
  const code = svgCode(theme.code);

  const sharedProperties = {
    ssg: { secondsToDisplay: 3 },
    notes: await readLocalFile(notesMd),
  };
  return {
    content: slideBase({
      ctx: ctx,
      title: 'When to use an SVG?',
      content: `
        ${whyIsSvgCard({
          ctx,
          x: 100,
          y: 150,
          animatePosition: 1,
          svgContent: `
            <text x="250" y="75" fill="${theme.controlForeground}" text-anchor="middle" font-size="50">
              Reduce file sizes
            </text>

            <g transform="translate(50 175)">
              <use href="#duckPixelArt" /> 
              <text x="45" y="120" fill="${theme.code.key}" text-anchor="middle" font-size="25">
                PNG
              </text>
              <polygon
                points="100,103 135,103 135,90 165,110 135,130 135,117 100,117"
                fill="${theme.code.key}"
                stroke="${theme.code.key}" stroke-width="5"
              />
            </g>
            <g transform="translate(250 175) scale(2)" filter="url(#GaussianBlur)">
              <use href="#duckPixelArt" /> 
            </g>

            <g transform="translate(50 500)">
              <use href="#duckPixelArt" /> 
              <text x="45" y="120" fill="${theme.code.key}" text-anchor="middle" font-size="25">
                SVG
              </text>
              <polygon
                points="100,103 135,103 135,90 165,110 135,130 135,117 100,117"
                fill="${theme.code.key}"
                stroke="${theme.code.key}" stroke-width="5"
              />
            </g>
            <g transform="translate(250 500) scale(2)">
              <use href="#duckPixelArt" /> 
            </g>
          `,
        })}

        ${whyIsSvgCard({
          ctx,
          x: 700,
          y: 150,
          animatePosition: 2,
          svgContent: `
            <text x="250" y="75" fill="${theme.controlForeground}" text-anchor="middle" font-size="50">
              Flexibility
            </text>
          `,
        })}

        ${whyIsSvgCard({
          ctx,
          x: 1300,
          y: 150,
          animatePosition: 3,
          svgContent: `
            <text x="250" y="75" fill="${theme.controlForeground}" text-anchor="middle" font-size="50">
              Accessibility
            </text>
          `,
        })}
      

        `,
      ...sharedProperties,
    }),
    ...sharedProperties,
  };
};
