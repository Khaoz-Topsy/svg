import { animateFadeIn } from '@/components/core/animate';
import { svgLoaders, usePublicLoaderImage } from '@/constants/image';
import { svgConstants } from '@/constants/svg';
import { themes } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { getPreviousSlideIndex } from '@/helpers/contextHelper.ts';
import { readLocalFile } from '@/helpers/fileHelper';
import { drawLine, drawPoint, drawText } from '@/helpers/svgHelper';
import { slideBase } from '@/slides/slideBase';

import notesMd from './loaders.md';

const squareSize = 200;
export const slideLoaders = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const theme = themes[ctx.themeKey];
  const previousSlideId = getPreviousSlideIndex(ctx);

  const sharedProperties = {
    ssg: { secondsToDisplay: 3 },
    notes: await readLocalFile(notesMd),
  };
  return {
    content: () =>
      slideBase({
        ctx: ctx,
        title: 'The Fun stuff - Loaders',
        content: `
          <g transform="translate(150 220)">
            <a xlink:href="https://samherbert.net/svg-loaders/" target="_blank">
              <text x="0" y="0" fill="${theme.controlForeground}" font-size="30">
                samherbert.net/svg-loaders
              </text>
            </a>
          <line x1="0" y1="10" x2="340" y2="10" stroke="${theme.controlForeground}" stroke-width="2" />
          </g>
          <g transform="translate(200 300)" fill="${theme.controlForeground}" color="${theme.controlForeground}">
            ${svgLoaders
              .map(
                (loader, idx) => `
                <g transform="${getTransformFromIndex(idx)}">
                <rect x="0" y="0" width="${squareSize + 1}" height="${squareSize + 1}" fill="${
                  loader.colour
                }" transform="translate(-${squareSize / 4} -${squareSize / 4})" />
                ${usePublicLoaderImage(loader.id)}
                </g>`,
              )
              .join('')}
          </g>
          
        <g opacity="0" transform="translate(300 90)">
          ${animateFadeIn({
            duration: '1s',
            begin: previousSlideId == undefined ? undefined : `${previousSlideId}-slide-anim.begin+1s`,
          })}
          <rect 
            width="650"
            height="810"
            x="850"
            y="50"
            rx="50"
            fill="transparent"
            stroke="${theme.secondary}"
            stroke-width="3"
          />

          <text x="890" y="120" fill="${theme.controlForeground}" font-size="30">
            Example of a custom made loader:
          </text>

          <g transform="translate(1075 150)">
            <g id="atlas-loader" transform="translate(800 200)">
              <polygon  points="100,20 190,130 100,300" stroke-linecap="round" />
              <circle cx="100" cy="130" r="45" fill="url(#atlas)">
                <animateTransform attributeName="transform" type="rotate" from="0 100 130" to="360 100 130" dur="2s" repeatCount="indefinite" />
              </circle>
              <polygon points="100,32 180,130 100,110" stroke-linecap="round"  fill="#FFFFFF" stroke="#FFFFFF" stroke-width="1"/>
              <line x1="185" y1="132" x2="100" y2="110" stroke-linecap="round" />
              <polygon points="100,20 10,130 100,300" stroke-linecap="round" />
              <line x1="100" y1="20" x2="190" y2="130" stroke-linecap="round" stroke="white" stroke-width="4" />
              <line x1="190" y1="130" x2="100" y2="300" stroke-linecap="round" stroke="white" stroke-width="4" />
              <line x1="100" y1="300" x2="10" y2="130" stroke-linecap="round" stroke="white" stroke-width="4" />
              <line x1="10" y1="130" x2="100" y2="20" stroke-linecap="round" stroke="white" stroke-width="4" />
            </g>
          </g>

          
          ${drawPoint(theme, 12)}
          ${drawText(theme, 12, 'Used on:')}
          <a xlink:href="https://nmsassistant.com??${svgConstants.linkRef}" target="_blank">
            ${drawText(theme, 12.75, 'nmsassistant.com', 30, 'font-style="italic"')}
          </a>
          ${drawLine(theme, 12.8, 210)}
        </g>
        `,
        ...sharedProperties,
      }),
    ...sharedProperties,
  };
};

const getTransformFromIndex = (index: number) => {
  const col = index % 4;
  const row = Math.floor(index / 4);
  return `translate(${col * squareSize} ${row * squareSize})`;
};
