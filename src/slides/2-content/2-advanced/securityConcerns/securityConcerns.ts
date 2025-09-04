import { animateFadeIn } from '@/components/core/animate';
import { isServerMode } from '@/constants/env';
import { PublicImage } from '@/constants/image';
import { themes } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { getPreviousSlideIndex } from '@/helpers/contextHelper.ts';
import { readLocalFile } from '@/helpers/fileHelper';
import { drawLine, drawPoint, drawText } from '@/helpers/svgHelper';
import { slideBase } from '@/slides/slideBase';

import notesMd from './securityConcerns.md';

export const slideSecurityConcerns = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const theme = themes[ctx.themeKey];
  const previousSlideId = getPreviousSlideIndex(ctx);
  const sharedProperties = {
    ssg: { secondsToDisplay: 3 },
    notes: await readLocalFile(notesMd),
  };
  return {
    content: slideBase({
      ctx: ctx,
      title: 'Security Concerns',
      content: `
        <foreignObject x="100" y="200" width="1200" height="800">
          <img src="${PublicImage.hacker}" 
            ${isServerMode(ctx.env) ? '' : `onload="alert('Image is loaded')"`}
          />
        </foreignObject>
                        
        <g opacity="0" transform="translate(300 90)">
          ${animateFadeIn({
            duration: '1s',
            begin: previousSlideId == undefined ? undefined : `${previousSlideId}-slide-anim.end+1s`,
          })}
          <rect 
            width="650"
            height="800"
            x="850"
            y="50"
            rx="50"
            fill="transparent"
            stroke="${theme.secondary}"
            stroke-width="3"
          />

          <text x="890" y="120" fill="${theme.controlForeground}" font-size="30">
            SVGs: the hacker's canvas
          </text>

          <text x="890" y="450" fill="${theme.controlForeground}" font-size="30">
            Mitigations
          </text>

          ${drawPoint(theme, 1)}
          ${drawText(theme, 1, 'Redirectors')}

          ${drawPoint(theme, 2)}
          ${drawText(theme, 2, 'Phishing pages')}

          ${drawPoint(theme, 3)}
          ${drawText(theme, 3, 'DOM injection & script abuse')}

          ${drawPoint(theme, 7)}
          ${drawText(theme, 7, `Don't allow users to upload SVGs`)}
          ${drawText(theme, 8, `else sanitise them`, 25, 'font-style="italic"')}

          ${drawPoint(theme, 12)}
          ${drawText(theme, 12, 'For more details:')}
          <a xlink:href="https://www.cloudflare.com/en-gb/threat-intelligence/research/report/svgs-the-hackers-canvas/" target="_blank">
            ${drawText(theme, 12.75, 'https://cloudflare.com/threat/report...', 30, 'font-style="italic"')}
          </a>
          ${drawLine(theme, 12.8, 500)}
          
        </g>
      `,
      ...sharedProperties,
    }),
    ...sharedProperties,
  };
};
