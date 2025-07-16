import { codeColours, svgCode } from '../../../components/code/codeSpan';
import { slideBeginValue } from '../../../components/common/slideAnimation.ts';
import { animateFadeIn } from '../../../components/core/animate';
import { tooltipAction } from '../../../components/core/tooltipAction';
import { windowTitle } from '../../../components/window/windowTitle';
import { svgConstants } from '../../../constants/svg';
import type { SlideContext } from '../../../contracts/slideContext';
import type { ISvgSlide } from '../../../contracts/svgSlide';
import { getPreviousSlideIndex } from '../../../helpers/contextHelper.ts';
import { readSrcFile } from '../../../helpers/fileHelper.ts';
import { slideBase } from '../../slideBase';

import notes from './whatIsSvg.md';

const tooltipWhatIsSvg = 'what-is-svg-tooltip';
const letterDelay = 500;

export const slideWhatIsAnSvg = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const previousSlideId = getPreviousSlideIndex(ctx);
  const getBegin = (numTicksDelay: number) => slideBeginValue(previousSlideId, letterDelay * numTicksDelay);

  return {
    content: slideBase({
      ctx: ctx,
      content: `
        ${await windowTitle('What is an SVG')}

        <g class="noselect" opacity="0" transform="translate(100 150)">
          ${animateFadeIn({ duration: '1s' })}
          <rect 
              width="${svgConstants.width / 3}"
              height="350"
              x="0"
              y="0"
              rx="50"
              fill="transparent"
              stroke="${svgConstants.colour.secondary}"
              stroke-width="3"
          >
          </rect>
          <text x="55" y="105" opacity="0" fill="${svgConstants.colour.controlForeground}" font-size="100">
            ${animateFadeIn({ duration: '1s', begin: getBegin(0) })}
            S
          </text>
          <text x="47" y="205" opacity="0" fill="${svgConstants.colour.controlForeground}" font-size="100">
            ${animateFadeIn({ duration: '1s', begin: getBegin(1) })}
            V
          </text>
          <text x="45" y="310" opacity="0" fill="${svgConstants.colour.controlForeground}" font-size="100">
            ${animateFadeIn({ duration: '1s', begin: getBegin(2) })}
            G
          </text>

          <text x="100" y="105" opacity="0" fill="${svgConstants.colour.controlForeground}" font-size="50">
            ${animateFadeIn({ duration: '1s', begin: getBegin(3) })}
            calar
          </text>
          <text x="97" y="205" opacity="0" fill="${svgConstants.colour.controlForeground}" font-size="50">
            ${animateFadeIn({ duration: '1s', begin: getBegin(4) })}
            ector
          </text>
          <text x="105" y="305" opacity="0" fill="${svgConstants.colour.controlForeground}" font-size="50">
            ${animateFadeIn({ duration: '1s', begin: getBegin(5) })}
            raphic
          </text>
        
          <text id="tooltip-reveal"
            x="200" y="150" font-size="25" opacity="0"
            fill="${svgConstants.colour.controlForeground}"
            transform="rotate(30 400 300) translate(80 -80)"
          >
            A picture from maths
          </text>

          <g id="${tooltipWhatIsSvg}">
            <use  href="#tooltip" transform="scale(2) translate(275, 15)" />
          </g>
          ${tooltipAction({ srcId: tooltipWhatIsSvg, targetId: 'tooltip-reveal' })}

        </g>


        <g class="noselect" opacity="0" transform="translate(800 150)">
          ${animateFadeIn({ duration: '1s' })}
          <rect 
              width="1000"
              height="350"
              x="0"
              y="0"
              rx="50"
              fill="transparent"
              stroke="${svgConstants.colour.secondary}"
              stroke-width="3"
          >
          </rect>
          

          <foreignObject x="40" y="25" width="600" height="600">
            <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 1.5em;">
              ${svgCode.tag('&lt;svg')}
              ${svgCode.key('version')}
              ${svgCode.tag('=')}
              ${svgCode.value('"1.1"')}
              <br />
              ${svgCode.keyValue(['width', '=', '"300"'], { tabLevel: 1 })}
              ${svgCode.keyValue(['height', '=', '"200"'])}
              <br />
              ${svgCode.keyValue(['xmlns', '=', '"http://www.w3.org/2000/svg"'], { tabLevel: 1 })}
              ${svgCode.tag('&gt;')}
              <br />
              <br />

              ${svgCode.tag('&lt;rect', { colour: codeColours.tag, tabLevel: 1 })}
              ${svgCode.keyValue(['width', '=', '"250"'])}
              ${svgCode.keyValue(['height', '=', '"250"'])}
              ${svgCode.keyValue(['fill', '=', '"purple"'])}
              ${svgCode.tag('/&gt;')}
              <br />
              ${svgCode.tag('&lt;circle', { colour: codeColours.tag, tabLevel: 1 })}
              ${svgCode.keyValue(['cx', '=', '"125"'])}
              ${svgCode.keyValue(['cy', '=', '"125"'])}
              ${svgCode.keyValue(['r', '=', '"80"'])}
              ${svgCode.keyValue(['fill', '=', '"lightblue"'])}
              ${svgCode.tag('/&gt;')}
              <br />
              <br />

              ${svgCode.tag('&lt;/svg&gt;')}
              
            </div>
          </foreignObject>
            

          <g transform="translate(700 40)">
            <rect width="250" height="250" fill="purple" />
            <circle cx="125" cy="125" r="80" fill="lightblue" />
          </g>


        </g>
        
        
        <g class="noselect" opacity="0" transform="translate(100 550)">
          ${animateFadeIn({ duration: '1s' })}
          <rect 
              width="${svgConstants.width - 220}"
              height="400"
              x="0"
              y="0"
              rx="50"
              fill="transparent"
              stroke="${svgConstants.colour.secondary}"
              stroke-width="3"
          >
          </rect>

          <text x="50" y="85" fill="${svgConstants.colour.controlForeground}" font-size="40">
            Fun facts
          </text>

          <circle cx="55" cy="167" r="7" fill="#64E9BA" />
          <text x="75" y="175" fill="${svgConstants.colour.controlForeground}" font-size="30">
            The first proposed SVG file format was in 1994 by a Dutch software engineer Martijn Koster.
          </text>

          <circle cx="55" cy="217" r="7" fill="#64E9BA" />
          <text x="75" y="225" fill="${svgConstants.colour.controlForeground}" font-size="30">
            It wasn't until 2003 that the SVG file format was finalised and approved as an ISO standard.
          </text>
          
        </g>
        
        `,
    }),
    notes: await readSrcFile(notes),
    ssg: {
      secondsToDisplay: 3,
    },
  };
};
