import { animateFadeIn } from '@/components/core/animate';
import { usePublicImage } from '@/constants/image';
import { themes } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { getPreviousSlideIndex } from '@/helpers/contextHelper.ts';
import { readLocalFile } from '@/helpers/fileHelper';
import { drawLine, drawPoint, drawText } from '@/helpers/svgHelper';
import { slideBase } from '@/slides/slideBase';

import notesMd from './securityConcerns.md';
import { isServerMode } from '@/constants/env';

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
        
        <g transform="translate(100 200)">
          ${usePublicImage('hacker')}
        </g>

        <foreignObject x="100" y="200" width="1200" height="800">
          <dialog id="facebookDialog"
            style="position: relative; background-color: transparent; border:none; border-radius: 30px; outline: none;"
          >
            <img src="./assets/img/facebook-login.jpg" width="300px" class="noselect" style="border-radius: 10px;" draggable="false" />
            <input name="fb-mail" style="background: transparent; border: none; outline: none; position: absolute; top: 127px; left: 47px; width: 235px;" />
            <input name="fb-pass" style="background: transparent; border: none; outline: none; position: absolute; top: 172px; left: 47px; width: 235px;" />
            <div onclick="this.parentNode.close()"
              style="background: transparent; outline: none; position: absolute; top: 210px; left: 40px; width: 252px; height: 32px;"></div>
          </dialog>
        </foreignObject>
        
        ${
          isServerMode(ctx.env)
            ? ''
            : `<g transform="translate(1035 200)">
              ${usePublicImage(
                'facebook',
                `draggable="false" onclick="document.getElementById('facebookDialog').showModal()"`,
              )}
            </g>`
        }
                        
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
          ${drawText(theme, 3, 'DOM injection &amp; script abuse')}

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
