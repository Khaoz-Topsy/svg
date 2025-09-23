import { isServerMode } from '@/constants/env';
import { themes, type ITheme } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { readLocalFile } from '@/helpers/fileHelper';
import { slideBase } from '@/slides/slideBase';
import { flexibilityHtml, flexibilitySvgResult } from '../whyIsSvg/flexibility';
import { whyIsSvgCard } from '../whyIsSvg/whyIsSvgCard';

import notesMd from './whenToUseAnSvg.md';

export const slideWhenToUseAnSvg = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const theme = themes[ctx.themeKey];

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
              <text x="120" y="35" fill="${theme.code.key}" font-size="25">
                SVG
              </text>
              <text x="120" y="65" fill="${theme.code.value}" font-size="25">
                0.6 kb
              </text>
            </g>

            <g transform="translate(50 400)">
              <use href="#duckPixelArt" />
              <text x="120" y="35" fill="${theme.code.key}" font-size="25">
                PNG
              </text>
              <text x="175" y="35" fill="${theme.code.tag}" font-size="25">
                (256 x 256)
              </text>
              <text x="120" y="65" fill="${theme.code.value}" font-size="25">
                3.57 kb
              </text>
            </g>

            <g transform="translate(50 500)">
              <use href="#duckPixelArt" /> 
              <text x="120" y="35" fill="${theme.code.key}" font-size="25">
                PNG
              </text>
              <text x="175" y="35" fill="${theme.code.tag}" font-size="25">
                (512 x 512)
              </text>
              <text x="120" y="65" fill="${theme.code.value}" font-size="25">
                7.08 kb
              </text>
            </g>

            <g transform="translate(50 600)">
              <use href="#duckPixelArt" /> 
              <text x="120" y="35" fill="${theme.code.key}" font-size="25">
                PNG
              </text>
              <text x="175" y="35" fill="${theme.code.tag}" font-size="25">
                (1024 x 1024)
              </text>
              <text x="120" y="65" fill="${theme.code.value}" font-size="25">
                18.40 kb
              </text>
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
              Icons
            </text>

            ${
              isServerMode(ctx.env)
                ? `
                  <g transform="translate(100 135) scale(3)" fill="${theme.controlForeground}">
                    <g>
                      <circle cx="16" cy="16" r="8.4"></circle>
                      <path d="M18.3 3.2c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3S14.7.9 16 .9s2.3 1 2.3 2.3zm-4.6 25.6c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3-1 2.3-2.3 2.3-2.3-1-2.3-2.3zm15.1-10.5c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zM3.2 13.7c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3S.9 17.3.9 16s1-2.3 2.3-2.3zm5.8-7C9 7.9 7.9 9 6.7 9S4.4 8 4.4 6.7s1-2.3 2.3-2.3S9 5.4 9 6.7zm16.3 21c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm2.4-21c0 1.3-1 2.3-2.3 2.3S23 7.9 23 6.7s1-2.3 2.3-2.3 2.4 1 2.4 2.3zM6.7 23C8 23 9 24 9 25.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3 1-2.3 2.3-2.3z"></path>
                    </g>
                  </g>

                  <g transform="translate(300 110) scale(4.2)" fill="${theme.controlForeground}">
                    <clipPath id="theme-toggle-cutout1">
                      <path d="M-9 3h25a1 1 0 0017 13v30H0Z" transform="translate3d(-9 14 0)"></path>
                    </clipPath>
                    <g clip-path="url(#theme-toggle-cutout1)">
                      <circle cx="16" cy="16" r="8.4"></circle>
                    </g>
                  </g>`
                : `
                  ${interactiveSvg(theme)}
                  <g transform="translate(60 85)">
                    <polygon
                      points="200,103 165,103 165,90 135,110 165,130 165,117 200,117"
                      fill="${theme.code.key}"
                      stroke="${theme.code.key}" stroke-width="5"
                    />
                    <text x="315" y="90" fill="${theme.controlForeground}" text-anchor="middle" font-size="30">
                      Interactive 😱
                    </text>
                    <text x="315" y="130" fill="${theme.controlForeground}" text-anchor="middle" font-size="30">
                      try me!
                    </text>
                  </g>
                `
            }

            <foreignObject x="30" y="365" width="600" height="700">
              <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 1.5em;">
                ${flexibilityHtml(theme, { fileName: 'green', colourValue: 'green' })}
              </div>
            </foreignObject>
            
            ${flexibilitySvgResult(425, 420, 'green')}
            ${flexibilitySvgResult(75, 730, ctx.themeKey == 'dark' ? 'lightblue' : 'blue')}
            ${flexibilitySvgResult(250, 730, ctx.themeKey == 'dark' ? 'red' : 'red')}
            ${flexibilitySvgResult(425, 730, ctx.themeKey == 'dark' ? 'yellow' : 'yellow')}
          `,
        })}

        ${whyIsSvgCard({
          ctx,
          x: 1300,
          y: 150,
          animatePosition: 3,
          svgContent: `
            <text x="250" y="75" fill="${theme.controlForeground}" text-anchor="middle" font-size="50">
              Animation
            </text>

            <g transform="translate(85 85)">
              <path id="line-animation" class="path" fill="transparent" stroke="${theme.controlForeground}" stroke-width="4" d="M66.039,133.545c0,0-21-57,18-67s49-4,65,8 s30,41,53,27s66,4,58,32s-5,44,18,57s22,46,0,45s-54-40-68-16s-40,88-83,48s11-61-11-80s-79-7-70-41 C46.039,146.545,53.039,128.545,66.039,133.545z"/>
            </g>

            <a xlink:href="https://css-tricks.com/svg-line-animation-works/" target="_blank">
              <text x="250" y="460" fill="${theme.controlForeground}" text-anchor="middle" font-size="25" font-style="italic">css-tricks.com/svg-line-animation-works</text>
              <line x1="50" y1="470" x2="450" y2="470" stroke="${theme.controlForeground}" stroke-width="2" />
            </a>
          `,
        })}
      

        `,
      ...sharedProperties,
    }),
    ...sharedProperties,
  };
};

const interactiveSvg = (theme: ITheme) => `
<foreignObject x="40" y="130" width="500" height="500" clip-path="url(#movieClip)">
  <style>
    svg.icon-theme-toggle {
      fill: ${theme.controlForeground};
      --theme-toggle-duration: .4s
    }

    svg.icon-theme-toggle :first-child path {
      transition-duration: calc(var(--theme-toggle-duration)*.6);
      transition-property: transform,d;
      transition-timing-function: cubic-bezier(0,0,.5,1)
    }

    svg.icon-theme-toggle g circle,svg.icon-theme-toggle g path {
      transform-origin: center;
      transition: transform calc(var(--theme-toggle-duration)*.65) cubic-bezier(0,0,0,1.25) calc(var(--theme-toggle-duration)*.35)
    }

    svg.icon-theme-toggle.moon g circle {
      transform: scale(1.4);
      transition-delay: 0s
    }

    svg.icon-theme-toggle.moon g path {
      transform: scale(.75);
      transition-delay: 0s
    }

    svg.icon-theme-toggle.moon :first-child path {
      d: path("M-9 3h25a1 1 0 0017 13v30H0Z");
      transition-delay: calc(var(--theme-toggle-duration)*.4);
      transition-timing-function: cubic-bezier(0,0,0,1.25)
    }

    @supports not (d: path("")) {
      svg.icon-theme-toggle.moon :first-child path {
        transform: translate3d(-9px,14px,0)
      }
    }
  </style>
  <svg xmlns="http://www.w3.org/2000/svg" id="theme-selector" width="128" height="128"
    viewBox="0 0 32 32" fill="currentColor" class="icon-theme-toggle moon" 
    onclick="document.getElementById('theme-selector').classList.toggle('moon')">

    <clipPath id="theme-toggle-cutout">
      <path d="M0-11h25a1 1 0 0017 13v30H0Z"></path>
    </clipPath>
    <g clip-path="url(#theme-toggle-cutout)">
      <circle cx="16" cy="16" r="8.4"></circle>
      <path d="M18.3 3.2c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3S14.7.9 16 .9s2.3 1 2.3 2.3zm-4.6 25.6c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3-1 2.3-2.3 2.3-2.3-1-2.3-2.3zm15.1-10.5c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zM3.2 13.7c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3S.9 17.3.9 16s1-2.3 2.3-2.3zm5.8-7C9 7.9 7.9 9 6.7 9S4.4 8 4.4 6.7s1-2.3 2.3-2.3S9 5.4 9 6.7zm16.3 21c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm2.4-21c0 1.3-1 2.3-2.3 2.3S23 7.9 23 6.7s1-2.3 2.3-2.3 2.4 1 2.4 2.3zM6.7 23C8 23 9 24 9 25.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3 1-2.3 2.3-2.3z"></path>
    </g>
  </svg>
</foreignObject>`;
