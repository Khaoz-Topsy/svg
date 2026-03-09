import { animateFadeIn } from '@/components/core/animate';
import { usePublicImage } from '@/constants/image';
import { svgConstants } from '@/constants/svg';
import { themes } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { getPreviousSlideIndex } from '@/helpers/contextHelper.ts';
import { readLocalFile } from '@/helpers/fileHelper';
import { drawLine, drawPoint, drawText } from '@/helpers/svgHelper';
import { slideBase } from '@/slides/slideBase';

import notesMd from './githubProfile.md';

export const slideGithubProfile = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const previousSlideId = getPreviousSlideIndex(ctx);
  const theme = themes[ctx.themeKey];

  const sharedProperties = {
    ssg: { secondsToDisplay: 3 },
    notes: await readLocalFile(notesMd),
  };
  return {
    content: () =>
      slideBase({
        ctx: ctx,
        title: 'The Fun stuff - Fancy Github profiles',
        content: `
        <g transform="translate(100 150)">
          ${usePublicImage('kurtGithubHeader')}
        </g>
        <clipPath id="github-header-clip">
          <rect x="-25" y="0" width="175" height="85" rx="10" />
        </clipPath>
        <linearGradient id="paint0_linear" x1="169.78" y1="159.992" x2="232.561" y2="8.94658" gradientUnits="userSpaceOnUse">
        <stop stop-color="#66B3B3"/>
        <stop offset="1" stop-color="#95CACA"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="95.547" y1="159.995" x2="158.328" y2="8.94937" gradientUnits="userSpaceOnUse">
        <stop stop-color="#66B3B3"/>
        <stop offset="1" stop-color="#95CACA"/>
        </linearGradient>
        <linearGradient id="paint2_linear" x1="52.6972" y1="105.259" x2="14.1123" y2="154.478" gradientUnits="userSpaceOnUse">
        <stop stop-color="#0CA4A5"/>
        <stop offset="1" stop-color="#097677"/>
        </linearGradient>
        <linearGradient id="paint3_linear" x1="53.5767" y1="63.8427" x2="92.1617" y2="14.6241" gradientUnits="userSpaceOnUse">
        <stop stop-color="#0CA4A5"/>
        <stop offset="1" stop-color="#097677"/>
        </linearGradient>
        <g id="icon" transform="translate(275 560) scale(0.5)">
          <path d="M148.112 150.986C159.606 155.763 172.529 155.785 184.038 151.047C195.548 146.309 204.702 137.199 209.485 125.721L254.375 18.0134C242.882 13.2362 229.959 13.2142 218.449 17.9523C206.939 22.6904 197.786 31.8003 193.002 43.2782L148.112 150.986Z" fill="url(#paint0_linear)"/>
          <path d="M73.8789 150.988C85.3724 155.766 98.2954 155.788 109.805 151.05C121.315 146.311 130.468 137.201 135.252 125.724L180.142 18.0162C168.649 13.239 155.726 13.217 144.216 17.9551C132.706 22.6931 123.553 31.8031 118.769 43.281L73.8789 150.988Z" fill="url(#paint1_linear)"/>
          <g id="darker">
            <path d="M9.18199 130.636C11.6709 124.669 13.7057 118.541 15.6676 112.396C16.6319 109.272 18.2278 106.38 20.3567 103.897C22.4855 101.415 25.1019 99.3947 28.044 97.9628C30.9861 96.5308 34.1912 95.7171 37.4609 95.572C40.7306 95.427 43.9953 95.9537 47.0529 97.1196C50.1106 98.2855 52.896 100.066 55.2369 102.35C57.5778 104.634 59.4242 107.374 60.6619 110.4C61.8996 113.426 62.5023 116.673 62.4326 119.941C62.3628 123.208 61.6222 126.427 60.2566 129.397C59.3419 131.465 58.1411 133.395 56.6895 135.129C50.4653 143.614 41.5646 149.762 31.4186 152.584C21.2726 155.407 10.471 154.74 0.750626 150.69L9.18199 130.636Z" fill="url(#paint2_linear)"/>
            <path d="M97.0919 38.466C94.6031 44.4327 92.5682 50.5615 90.6063 56.7064C89.642 59.8298 88.0461 62.7223 85.9173 65.2049C83.7884 67.6875 81.172 69.7073 78.2299 71.1393C75.2878 72.5713 72.0827 73.385 68.813 73.53C65.5433 73.675 62.2786 73.1483 59.221 71.9825C56.1634 70.8166 53.3779 69.0364 51.037 66.752C48.6962 64.4677 46.8497 61.7279 45.612 58.7021C44.3743 55.6764 43.7716 52.4291 43.8414 49.1614C43.9111 45.8937 44.6517 42.675 46.0173 39.7046C46.9321 37.6368 48.1328 35.7073 49.5845 33.9726C55.8086 25.4878 64.7093 19.3399 74.8553 16.5176C85.0013 13.6953 95.8029 14.3625 105.523 18.412L97.0919 38.466Z" fill="url(#paint3_linear)"/>
          </g>
          <text x="320" y="135" font-size="160" fill="url(#paint0_linear)">
            Waves
          </text>
        </g>
        <g transform="translate(215 560) scale(4.5)" clip-path="url(#github-header-clip)">
          ${usePublicImage('githubHeader')}
        </g>

        <g opacity="0" transform="translate(100 90)">
          ${animateFadeIn({
            duration: '1s',
            begin: previousSlideId == undefined ? undefined : `${previousSlideId}-slide-anim.begin+1s`,
          })}
          <rect 
            width="850"
            height="810"
            x="850"
            y="50"
            rx="50"
            fill="transparent"
            stroke="${theme.secondary}"
            stroke-width="3"
          />

          <text x="890" y="120" fill="${theme.controlForeground}" font-size="30">
            Get around restrictions
          </text>

          <text x="890" y="150" fill="${theme.controlForeground}" font-size="20">
            In this case on Github
          </text>

          <text x="890" y="217" fill="${theme.controlForeground}" font-size="30">What is in this SVG:</text>

          ${drawPoint(theme, 2)}
          ${drawText(theme, 2, 'Animated gradient background')}

          ${drawPoint(theme, 3)}
          ${drawText(theme, 3, 'Line pattern over the background')}

          ${drawPoint(theme, 4)}
          ${drawText(theme, 4, 'Avatar aligned in the center')}

          ${drawPoint(theme, 5)}
          ${drawText(theme, 5, 'Non-SVG images used')}
          ${drawText(theme, 6, 'Ship icon', 25, 'font-style="italic"')}
          <text x="1035" y="467" fill="${theme.exampleColour2}" font-size="20">(2kb)</text>
          ${drawText(theme, 7, 'Ficsit thumbs up', 25, 'font-style="italic"')}
          <text x="1115" y="517" fill="${theme.exampleColour2}" font-size="20">(6kb)</text>

          ${drawPoint(theme, 8)}
          ${drawText(theme, 8, 'Hand emoji (text)')}

          ${drawPoint(theme, 9)}
          ${drawText(theme, 9, 'Text aligned to the bottom center')}

          ${drawPoint(theme, 10)}
          ${drawText(theme, 10, 'CSS animations ✨')}
          
          ${drawPoint(theme, 12)}
          ${drawText(theme, 12, 'View this on:')}
          <a xlink:href="https://github.com/Khaoz-Topsy?${svgConstants.linkRef}" target="_blank">
            ${drawText(theme, 12.75, 'https://github.com/Khaoz-Topsy', 30, 'font-style="italic"')}
          </a>
          ${drawLine(theme, 12.8, 390)}
        </g>
        `,
        ...sharedProperties,
      }),
    ...sharedProperties,
  };
};
