import { svgCode } from '@/components/code/codeSpan';
import { slideBeginValue } from '@/components/common/slideAnimation.ts';
import { animateFadeIn } from '@/components/core/animate';
import { svgConstants } from '@/constants/svg';
import { themes } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { getPreviousSlideIndex } from '@/helpers/contextHelper.ts';
import { readLocalFile } from '@/helpers/fileHelper.ts';
import { slideBase } from '@/slides/slideBase';

import notesMd from './whatIsSvg.md';

// const tooltipWhatIsSvg = 'what-is-svg-tooltip';
const letterDelay = 500;

export const slideWhatIsAnSvg = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const previousSlideId = getPreviousSlideIndex(ctx);
  const theme = themes[ctx.themeKey];
  const code = svgCode(theme.code);

  const getBegin = (numTicksDelay: number) => slideBeginValue(previousSlideId, letterDelay * numTicksDelay);

  const sharedProperties = {
    ssg: { secondsToDisplay: 3 },
    notes: await readLocalFile(notesMd),
  };
  return {
    content: slideBase({
      ctx: ctx,
      title: 'What is an SVG?',
      content: `
        <g class="noselect" opacity="0" transform="translate(100 150)">
          ${animateFadeIn({ duration: '1s', begin: getBegin(0) })}
          <rect 
              width="${svgConstants.width / 3}"
              height="350"
              x="0"
              y="0"
              rx="50"
              fill="transparent"
              stroke="${theme.secondary}"
              stroke-width="3"
          >
          </rect>
          <text x="55" y="105" opacity="0" fill="${theme.controlForeground}" font-size="100">
            ${animateFadeIn({ duration: '1s', begin: getBegin(1) })}
            S
          </text>
          <text x="47" y="205" opacity="0" fill="${theme.controlForeground}" font-size="100">
            ${animateFadeIn({ duration: '1s', begin: getBegin(1) })}
            V
          </text>
          <text x="45" y="310" opacity="0" fill="${theme.controlForeground}" font-size="100">
            ${animateFadeIn({ duration: '1s', begin: getBegin(1) })}
            G
          </text>

          <text x="100" y="105" opacity="0" fill="${theme.controlForeground}" font-size="50">
            ${animateFadeIn({ duration: '1s', begin: getBegin(4) })}
            calar
          </text>
          <text x="97" y="205" opacity="0" fill="${theme.controlForeground}" font-size="50">
            ${animateFadeIn({ duration: '1s', begin: getBegin(5) })}
            ector
          </text>
          <text x="105" y="305" opacity="0" fill="${theme.controlForeground}" font-size="50">
            ${animateFadeIn({ duration: '1s', begin: getBegin(6) })}
            raphic
          </text>
        
          <g class="noselect" opacity="0" transform="translate(0 50)">
            ${animateFadeIn({ duration: '1s', begin: getBegin(10) })}
            <text x="550" y="60 " text-anchor="middle" font-size="35" fill="${theme.controlForeground}">A</text>
            <text x="550" y="100" text-anchor="middle" font-size="35" fill="${theme.controlForeground}">picture</text>
            <text x="550" y="145" text-anchor="middle" font-size="35" fill="${theme.controlForeground}">from</text>
            <text x="550" y="190" text-anchor="middle" font-size="35" fill="${theme.controlForeground}">maths</text>
          </g>
        </g>

        <g opacity="0" transform="translate(800 150)">
          ${animateFadeIn({ duration: '1s', begin: getBegin(1) })}
          <rect 
              width="1000"
              height="350"
              x="0"
              y="0"
              rx="50"
              fill="transparent"
              stroke="${theme.secondary}"
              stroke-width="3"
          >
          </rect>
          
          <foreignObject x="40" y="40" width="600" height="600">
            <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 1.5em;">
              ${code.tag('&lt;svg')}
              ${code.keyValue(['xmlns', '=', '"http://www.w3.org/2000/svg"'])}
              <br />
              ${code.keyValue(['width', '=', '"300"'], { tabLevel: 1 })}
              ${code.keyValue(['height', '=', '"300"'])}
              ${code.tag('&gt;')}
              <br />
              <br />
              
              ${code.tag('&lt;rect', { colour: theme.code.tag, tabLevel: 1 })}
              ${code.keyValue(['width', '=', '"250"'])}
              ${code.keyValue(['height', '=', '"250"'])}
              ${code.keyValue(['fill', '=', '"purple"'])}
              ${code.tag('/&gt;')}
              <br />
              ${code.tag('&lt;circle', { colour: theme.code.tag, tabLevel: 1 })}
              ${code.keyValue(['cx', '=', '"125"'])}
              ${code.keyValue(['cy', '=', '"125"'])}
              ${code.keyValue(['r', '=', '"80"'])}
              ${code.keyValue(['fill', '=', '"lightblue"'])}
              ${code.tag('/&gt;')}
              <br />
              <br />

              ${code.tag('&lt;/svg&gt;')}
              
            </div>
          </foreignObject>
            

          <g transform="translate(700 40)">
            <rect width="250" height="250" fill="purple" />
            <circle cx="125" cy="125" r="80" fill="lightblue" />
          </g>


        </g>
        
        
        <g class="noselect" opacity="0" transform="translate(100 550)">
          ${animateFadeIn({ duration: '1s', begin: getBegin(2) })}
          <rect 
              width="${svgConstants.width - 220}"
              height="400"
              x="0"
              y="0"
              rx="50"
              fill="transparent"
              stroke="${theme.secondary}"
              stroke-width="3"
          >
          </rect>

          <text x="50" y="85" fill="${theme.controlForeground}" font-size="40">
            Fun facts
          </text>

          <circle cx="55" cy="167" r="7" fill="${theme.exampleColour}" />
          <text x="75" y="175" fill="${theme.controlForeground}" font-size="30">
            The first proposed SVG file format was in 1994 by a Dutch software engineer Martijn Koster.
          </text>

          <circle cx="55" cy="217" r="7" fill="${theme.exampleColour}" />
          <text x="75" y="225" fill="${theme.controlForeground}" font-size="30">
            It wasn't until 2003 that the SVG file format was finalised and approved as an ISO standard.
          </text>
          
        </g>
        
        `,
      ...sharedProperties,
    }),
    ...sharedProperties,
  };
};

/*

          <g id="${tooltipWhatIsSvg}">
            <use  href="#tooltip" transform="scale(2) translate(275, 15)" />
          </g>
          ${tooltipAction({ srcId: tooltipWhatIsSvg, targetId: 'tooltip-reveal' })}
*/
