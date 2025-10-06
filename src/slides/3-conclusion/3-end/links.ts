import { animateFadeIn } from '@/components/core/animate';
import { isServerMode } from '@/constants/env';
import { usePublicImage } from '@/constants/image';
import { svgMeta } from '@/constants/svgMeta';
import { themes, type ITheme } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { formatBytes } from '@/helpers/byteHelper';
import { getPreviousSlideIndex } from '@/helpers/contextHelper.ts';
import { slideBase } from '@/slides/slideBase';

export const slideLinks = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const previousSlideId = getPreviousSlideIndex(ctx);
  const theme = themes[ctx.themeKey];

  const sharedProperties = {
    ssg: { secondsToDisplay: 3 },
    notes: '',
  };
  return {
    content: () =>
      slideBase({
        ctx: ctx,
        title: 'Links',
        content: `
          <g opacity="0">
            ${animateFadeIn({
              duration: '1s',
              begin: previousSlideId == undefined ? undefined : `${previousSlideId}-slide-anim.begin+1s`,
            })}
            <rect 
              width="1100"
              height="810"
              x="100"
              y="140"
              rx="50"
              fill="transparent"
              stroke="${theme.secondary}"
              stroke-width="3"
            />
            <text x="150" y="220" 
              fill="${theme.controlForeground}" font-size="40">
              Presentation Statistics:
            </text>

            ${renderStats(theme, 300, 'Interactive SVG', 'ssg-click.svg')}
            ${renderStats(theme, 450, 'Auto slide SVG (CSS)', 'ssg-css.svg')}
            ${renderStats(theme, 600, 'Auto slide SVG (SMIL)', 'ssg-svg-animation.svg')}

            ${
              isServerMode(ctx.env)
                ? ''
                : `<g transform="translate(500 560)">
                  <foreignObject x="50" y="0" width="600" height="700">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 1.5em;">
                      <img src="https://svg.kurtlourens.com/assets/img/generated/ssg-css.svg" alt="slides" />
                    </div>
                  </foreignObject>
                </g>`
            }
            <g transform="translate(550 300)">
              <text x="0" y="0" fill="${theme.controlForeground}" font-size="30">
                PNGs used
              </text>
              <text x="10" y="40" fill="${theme.controlForeground}" font-size="25">
                - 4 files
              </text>
              <text x="10" y="80" fill="${theme.controlForeground}" font-size="25">
                - ${formatBytes(160308)}
              </text>
            </g>

            <g transform="translate(950 350)">
              <circle cx="0" cy="0" r="100" fill="transparent" stroke="red" stroke-width="10" />

              <text x="0" y="5" fill="${theme.controlForeground}" 
                font-size="125" text-anchor="middle" font-weight="bold"
                alignment-baseline="middle">AI</text>

              <line
                x1="70" y1="70"
                x2="-70" y2="-70"
                stroke="red" stroke-width="10"
              />
            </g>

          </g>

          <g opacity="0" transform="translate(100 90)">
            ${animateFadeIn({
              duration: '1s',
              begin: previousSlideId == undefined ? undefined : `${previousSlideId}-slide-anim.begin+1s`,
            })}
            <rect 
              width="500"
              height="810"
              x="1200"
              y="50"
              rx="50"
              fill="transparent"
              stroke="${theme.secondary}"
              stroke-width="3"
            />

            <a xlink:href="https://svg.kurtlourens.com" target="_blank">
              <text x="1450" y="115" text-anchor="middle" font-style="italic"
                fill="${theme.controlForeground}" font-size="30">
                svg.kurtlourens.com
              </text>
            </a>

            <text x="1450" y="150" text-anchor="middle" font-style="italic"
              fill="${theme.controlForeground}" font-size="20">
              Downloads:
            </text>
            ${downloadButton(theme, 1250, 175, 'ssg-click.svg', 'Interactive SVG')}
            ${downloadButton(theme, 1250, 235, 'ssg-css.svg', 'Auto slide SVG (Best compatibility)')}
            ${downloadButton(theme, 1250, 295, 'ssg-svg-animation.svg', 'Auto slide SVG (Chromium browsers)')}

            <text x="1450" y="420" text-anchor="middle" font-style="italic"
              fill="${theme.controlForeground}" font-size="20">
              Totally safe QR code
            </text>
            <g transform="translate(1230, 400) scale(1.5)">
              ${usePublicImage('qrCode')}
            </g>
          </g>
        `,
        ...sharedProperties,
      }),
    ...sharedProperties,
  };
};

const downloadButton = (theme: ITheme, x: number, y: number, partialLink: string, title: string) => {
  return `
    <g transform="translate(${x} ${y})">
      <a xlink:href="https://svg.kurtlourens.com/assets/img/generated/${partialLink}" target="_blank">
        <rect 
          width="400"
          height="40"
          x="0"
          y="0"
          rx="10"
          fill="transparent"
          stroke="${theme.primary}"
          stroke-width="3"
        />
        <line x1="50" x2="50" y1="0" y2="40"
          stroke="${theme.primary}" stroke-width="3" />
        <g transform="translate(10 3) scale(1.25)">
          <path d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12" stroke="${theme.controlForeground}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <text x="65" y="27"font-style="italic"
          fill="${theme.controlForeground}" font-size="20">
          ${title}
        </text>
      </a>
    </g>`;
};

const renderStats = (theme: ITheme, y: number, title: string, metaKey: keyof typeof svgMeta) => `
  <g transform="translate(150 ${y})">
    <text x="0" y="0" fill="${theme.controlForeground}" font-size="30">
      ${title}
    </text>
  
    <text x="10" y="40" fill="${theme.controlForeground}" font-size="25">
      - ${svgMeta[metaKey].numLines} lines
    </text>
    <text x="10" y="80" fill="${theme.controlForeground}" font-size="25">
      - ${formatBytes(svgMeta[metaKey].numChars)}
    </text>
  </g>`;
