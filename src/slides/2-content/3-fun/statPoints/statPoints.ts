import { animateFadeIn } from '@/components/core/animate';
import { themes } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { getPreviousSlideIndex } from '@/helpers/contextHelper.ts';
import { readLocalFile } from '@/helpers/fileHelper';
import { circleRadius, drawLine, drawPoint, drawText } from '@/helpers/svgHelper';
import { slideBase } from '@/slides/slideBase';

import notesMd from './statPoints.md';

export const slideStatPoints = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const theme = themes[ctx.themeKey];
  const previousSlideId = getPreviousSlideIndex(ctx);

  const sharedProperties = {
    ssg: { secondsToDisplay: 3 },
    notes: await readLocalFile(notesMd),
  };
  return {
    content: slideBase({
      ctx: ctx,
      title: 'The Fun stuff - complex shapes',
      content: `
        <g transform="scale(3) translate(50, 80)">
          <g fill="#9dacc2" stroke="${theme.controlForeground}">
            <polygon points="100,0 14,50 14,150 100,200 186,150 186,50 100,0"></polygon>
            <line x1="100" y1="100" x2="100" y2="0"></line>
            <line x1="100" y1="100" x2="14" y2="50"></line>
            <line x1="100" y1="100" x2="14" y2="150"></line>
            <line x1="100" y1="100" x2="100" y2="200"></line>
            <line x1="100" y1="100" x2="186" y2="150"></line>
            <line x1="100" y1="100" x2="186" y2="50"></line>
          </g>

          <g fill="${theme.controlForeground}">
            <animate attributeName="opacity" dur="500ms" from="0" to="1"></animate>
            <text font-size="10px" text-anchor="middle" y="-15">
              <tspan x="100">Max HP</tspan>
              <tspan dy="10px" x="100">120</tspan>
            </text>
            <text font-size="10px" text-anchor="middle" y="45">
              <tspan x="0">R. Atk</tspan>
              <tspan dy="10px" x="0">145</tspan>
            </text>
            <text font-size="10px" text-anchor="middle" y="160">
              <tspan x="0">R. Def</tspan>
              <tspan dy="10px" x="0">110</tspan>
            </text>
            <text font-size="10px" text-anchor="middle" y="210">
              <tspan x="100">Speed</tspan>
              <tspan dy="10px" x="100">130</tspan>
            </text>
            <text font-size="10px" text-anchor="middle" y="160">
              <tspan x="200">M. Def</tspan>
              <tspan dy="10px" x="200">110</tspan>
            </text>
            <text font-size="10px" text-anchor="middle" y="45">
              <tspan x="200">M. Atk</tspan>
              <tspan dy="10px" x="200">125</tspan>
            </text>
          </g>
          <polygon
            points="100,100 100,100 100,100 100,100 100,100 100,100"
            fill="#3fbb9f" opacity="0.75" stroke="#ab75e8" stroke-width="2px">
            <animate 
              from="100,100 100,100 100,100 100,100 100,100 100,100" 
              to="100,60.00 58.14,75.83 68.25,118.33 100,143.33 131.75,118.33 136.08,79.17" 
              attributeName="points" 
              fill="freeze"
              begin="${previousSlideId == undefined ? '500ms' : `${previousSlideId}-slide-anim.end+750ms`}"
              dur="1s"
            ></animate>
          </polygon>
        </g>
        
        <g opacity="0" transform="translate(100 90)">
          ${animateFadeIn({
            duration: '1s',
            begin: previousSlideId == undefined ? undefined : `${previousSlideId}-slide-anim.end+1s`,
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
            Steps:
          </text>

          ${drawPoint(theme, 0)}
          ${drawText(theme, 0, 'Draw a Hexagon')}
          ${drawText(theme, 1, 'Using &lt;polygon&gt;', 25, 'font-style="italic"')}

          ${drawPoint(theme, 2)}
          ${drawText(theme, 2, 'Draw a line from the center to the the edge of the hexagon')}
          ${drawText(theme, 3, '6 times, one for each point', 25, 'font-style="italic"')}

          ${drawPoint(theme, 4)}
          ${drawText(theme, 4, 'Add the text descriptions and values for each corner')}

          ${drawPoint(theme, 5)}
          ${drawText(theme, 5, 'Draw the value of each attribute')}
          ${drawText(theme, 6, 'Defining the point for each attribute in a', 25, 'font-style="italic"')}
          <text x="1345" y="${
            160 + circleRadius + 6 * 50
          }" fill="#ab75e8" font-size="25" font-style="italic">&lt;polyline&gt;</text>

          ${drawPoint(theme, 7)}
          ${drawText(theme, 7, 'Add some colour to the')}
          <text x="1223" y="${
            160 + circleRadius + 7 * 50
          }" fill="#ab75e8" font-size="30" font-style="italic">&lt;polyline&gt;</text>

          ${drawPoint(theme, 8)}
          ${drawText(theme, 8, 'Add an animation 💫')}

          ${drawPoint(theme, 12)}
          ${drawText(theme, 12, 'I used this on:')}
          <a xlink:href="https://cassettebeasts.assistantapps.com" target="_blank">
            ${drawText(theme, 12.75, 'https://cassettebeasts.assistantapps.com', 30, 'font-style="italic"')}
          </a>
          ${drawLine(theme, 12.8, 500)}
          
        </g>
        `,
      ...sharedProperties,
    }),
    ...sharedProperties,
  };
};
