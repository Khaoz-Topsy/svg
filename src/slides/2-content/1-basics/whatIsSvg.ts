import { codeColours, codeSpan, codeSpans } from '../../../components/code/codeSpan';
import { animateFadeIn } from '../../../components/core/animate';
import { windowTitle } from '../../../components/window/windowTitle';
import { svgConstants } from '../../../constants/svg';
import { slideBase } from '../../slideBase';

export const slideWhatIsAnSvg = async () => {
  return {
    content: slideBase({
      id: 'slide-intro',
      animation: 'fadeIn',
      content: `
        ${await windowTitle('What is an SVG')}

        <g opacity="0" transform="translate(100 200)">
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
          <text x="55" y="105" fill="${svgConstants.colour.controlForeground}" font-size="100">S</text>
          <text x="100" y="105" fill="${svgConstants.colour.controlForeground}" font-size="50">calar</text>
          <text x="47" y="205" fill="${svgConstants.colour.controlForeground}" font-size="100">V</text>
          <text x="97" y="205" fill="${svgConstants.colour.controlForeground}" font-size="50">ector</text>
          <text x="45" y="310" fill="${svgConstants.colour.controlForeground}" font-size="100">G</text>
          <text x="105" y="305" fill="${svgConstants.colour.controlForeground}" font-size="50">raphic</text>
        
          <text 
            x="200" y="150" font-size="25" opacity="0"
            fill="${svgConstants.colour.controlForeground}"
            transform="rotate(30 400 300) translate(80 -80)"
          >
            ${animateFadeIn({ duration: '1s', initialDelay: '5s' })}
            A picture from maths
          </text>

        </g>


        <g opacity="0" transform="translate(800 200)">
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
              ${codeSpan('&lt;', `color: ${codeColours.tag};`)}<!--
          --->${codeSpan('svg', `color: ${codeColours.tag};`)}
              ${codeSpan('version', `color: ${codeColours.key};`)}<!--
          --->${codeSpan('=', `color: ${codeColours.tag};`)}<!--
          --->${codeSpan('"1.1"', `color: ${codeColours.value};`)}
              <br />
              ${codeSpans(
                ['width', '=', '"300"'],
                [codeColours.key, codeColours.equals, codeColours.value],
                'margin-left: 1em;',
              )}
              ${codeSpans(['height', '=', '"200"'], [codeColours.key, codeColours.equals, codeColours.value])}
              <br />
              ${codeSpans(
                ['xmlns', '=', '"http://www.w3.org/2000/svg"'],
                [codeColours.key, codeColours.equals, codeColours.value],
                'margin-left: 1em;',
              )}<!--
          --->${codeSpan('&gt;', `color: ${codeColours.tag};`)}
              <br />
              <br />

              ${codeSpan('&lt;rect', 'color: lightblue; margin-left: 1em;')}
              ${codeSpans(['width', '=', '"100%"'], [codeColours.key, codeColours.equals, codeColours.value])}
              ${codeSpans(['height', '=', '"100%"'], [codeColours.key, codeColours.equals, codeColours.value])}
              ${codeSpans(['fill', '=', '"blue"'], [codeColours.key, codeColours.equals, codeColours.value])}
              ${codeSpan('/&gt;', `color: ${codeColours.tag};`)}
              <br />
              ${codeSpan('&lt;circle', 'color: lightblue; margin-left: 1em;')}
              ${codeSpans(['cx', '=', '"150"'], [codeColours.key, codeColours.equals, codeColours.value])}
              ${codeSpans(['cy', '=', '"100"'], [codeColours.key, codeColours.equals, codeColours.value])}
              ${codeSpans(['r', '=', '"80"'], [codeColours.key, codeColours.equals, codeColours.value])}
              ${codeSpans(['fill', '=', '"lightblue"'], [codeColours.key, codeColours.equals, codeColours.value])}
              ${codeSpan('/&gt;', `color: ${codeColours.tag};`)}
              <br />
              <br />

              ${codeSpans(['&lt;/', 'svg', '&gt;'], ['lightblue', 'lightblue', 'lightblue'])}
              
            </div>
          </foreignObject>
            

        </g>
        
        `,
    }),
    notes: 'what is svg',
  };
};
