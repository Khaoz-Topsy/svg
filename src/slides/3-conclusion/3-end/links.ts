import { animateFadeIn } from '@/components/core/animate';
import { usePublicImage } from '@/constants/image';
import { themes, type ITheme } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
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
        
          <text x="100" y="150" 
            fill="${theme.controlForeground}" font-size="30">
            This presentation was an SVG 🤯
          </text>


          <clipPath id="presentation-in-presentation">
            <rect x="0" y="0" width="820" height="650" rx="20" />
          </clipPath>
          <g transform="translate(100, 150)" clip-path="url(#presentation-in-presentation)">
            <foreignObject x="0" y="0" width="1200" height="800">
              <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 1.5em;">
                <img src="https://svg.kurtlourens.com/assets/img/generated/ssg-css.svg" />
              </div>
            </foreignObject>
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
            ${downloadButton(theme, 1250, 175, 'https://svg.kurtlourens.com', 'Interactive SVG')}
            ${downloadButton(theme, 1250, 235, 'https://svg.kurtlourens.com', 'Auto slide SVG (Best compatibility)')}
            ${downloadButton(theme, 1250, 295, 'https://svg.kurtlourens.com', 'Auto slide SVG (Chromium browsers)')}

            <text x="1450" y="420" text-anchor="middle" font-style="italic"
              fill="${theme.controlForeground}" font-size="20">
              Totally safe QR code
            </text>
            <g transform="translate(1230, 400) scale(1.5)">
              ${usePublicImage('qrCode')}
            </g>
          </g>


          <text>
          {{svgNumLines}}
          </text>
        `,
        ...sharedProperties,
      }),
    ...sharedProperties,
  };
};

const downloadButton = (theme: ITheme, x: number, y: number, link: string, title: string) => {
  return `
    <g transform="translate(${x} ${y})">
      <a xlink:href="${link}" target="_blank">
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
