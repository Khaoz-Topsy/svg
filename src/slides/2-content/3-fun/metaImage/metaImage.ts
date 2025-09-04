import { isServerMode } from '@/constants/env';
import { PublicImage } from '@/constants/image';
import { themes } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { readBase64Image, readLocalFile } from '@/helpers/fileHelper';
import { slideBase } from '@/slides/slideBase';

import { animateFadeIn } from '@/components/core/animate';
import { getPreviousSlideIndex } from '@/helpers/contextHelper.ts';
import { drawLine, drawPoint, drawText } from '@/helpers/svgHelper';
import notesMd from './metaImage.md';

export const slideMetaImage = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const theme = themes[ctx.themeKey];
  const previousSlideId = getPreviousSlideIndex(ctx);

  const userInChat = (y: number, length: number) => `
    <rect x="50" y="${y}" width="${length}" height="2" rx="5" opacity="0.3"
      fill="${theme.cardBackground}" stroke="${theme.cardBackground}" stroke-width="3"
    />`;

  const sharedProperties = {
    ssg: { secondsToDisplay: 3 },
    notes: await readLocalFile(notesMd),
  };
  //https://cassettebeasts.assistantapps.com/assets/img/meta/en/monsters/traffikrab.png
  return {
    content: slideBase({
      ctx: ctx,
      title: 'The Fun stuff - meta image / templates',
      content: `
        <g transform="translate(100, 150)">
          <rect x="0" y="0" width="900" height="700" rx="25" fill="#1A1D21"
            stroke="${themes.dark.exampleColour}" stroke-width="3"
          />
          <line x1="0" y1="50" x2="900" y2="50" opacity="0.3"
            stroke="${themes.dark.exampleColour}" stroke-width="3"
          />
          <line x1="200" y1="52" x2="200" y2="700" opacity="0.3"
            stroke="${themes.dark.cardBackground}" stroke-width="1"
          />
          ${userInChat(100, 100)}
          ${userInChat(140, 80)}
          
          <line x1="0" y1="200" x2="200" y2="200" opacity="0.1"
            stroke="${themes.dark.exampleColour}" stroke-width="2"
          />

          ${userInChat(400, 100)}
          ${userInChat(440, 120)}
          ${userInChat(480, 60)}
          ${userInChat(520, 80)}
          ${userInChat(560, 100)}
          ${userInChat(600, 120)}
          <rect x="250" y="620" width="600" height="50" rx="25" fill="transparent"
            stroke="${themes.dark.cardBackground}" stroke-width="3"
          />
          <text x="450" y="34" fill="${themes.dark.controlForeground}" font-size="30" text-anchor="middle">
            Lax - messaging client
          </text>
          
          <image x="225" y="250" href="${
            isServerMode(ctx.env)
              ? await readBase64Image(PublicImage.metaDataExample)
              : './assets/img/metaDataExample.png'
          }" alt="Description of the image" />
          metaDataExample
        </g>
        
        <g opacity="0" transform="translate(250 90)">
          ${animateFadeIn({
            duration: '1s',
            begin: previousSlideId == undefined ? undefined : `${previousSlideId}-slide-anim.end+1s`,
          })}
          <rect 
            width="700"
            height="800"
            x="850"
            y="50"
            rx="50"
            fill="transparent"
            stroke="${theme.secondary}"
            stroke-width="3"
          />

          <text x="890" y="120" fill="${theme.controlForeground}" font-size="30">
            What the template looks like:
          </text>

          ${drawPoint(theme, 0)}
          ${drawText(theme, 0, 'Draw a Hexagon')}
          ${drawText(theme, 1, 'Using &lt;polygon&gt;', 25, 'font-style="italic"')}


          ${drawPoint(theme, 11)}
          ${drawText(theme, 11, 'I used this on:')}
          <a xlink:href="https://cassettebeasts.assistantapps.com" target="_blank">
            ${drawText(theme, 11.75, 'https://cassettebeasts.assistantapps.com', 30, 'font-style="italic"')}
          </a>
          ${drawLine(theme, 11.8, 500)}
          
        </g>
        `,
      ...sharedProperties,
    }),
    ...sharedProperties,
  };
};
