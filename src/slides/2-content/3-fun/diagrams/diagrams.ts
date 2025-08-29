import { svgCode } from '@/components/code/codeSpan';
import { animateFadeIn } from '@/components/core/animate';
import { themes } from '@/constants/theme';
import type { SlideContext } from '@/contracts/slideContext';
import type { ISvgSlide } from '@/contracts/svgSlide';
import { getPreviousSlideIndex } from '@/helpers/contextHelper.ts';
import { readDiagramSvg, readLocalFile } from '@/helpers/fileHelper';
import { drawLine, drawText } from '@/helpers/svgHelper';
import { slideBase } from '@/slides/slideBase';

import notesMd from './diagrams.md';

export const slideDiagrams = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const previousSlideId = getPreviousSlideIndex(ctx);
  const theme = themes[ctx.themeKey];
  const topLevelCode = svgCode({
    tag: theme.d2Code.tag,
    key: theme.d2Code.tag,
    equals: theme.d2Code.equals,
    value: theme.d2Code.equals,
  });
  const innerLevelCode = svgCode({
    tag: theme.d2Code.key,
    key: theme.d2Code.key,
    equals: theme.d2Code.equals,
    value: theme.d2Code.value,
  });

  const sharedProperties = {
    ssg: { secondsToDisplay: 3 },
    notes: await readLocalFile(notesMd),
  };
  return {
    content: slideBase({
      ctx: ctx,
      title: 'The Fun stuff - Diagrams',
      content: `
        <g transform="translate(125, 220)">
          ${await readDiagramSvg(theme, ctx.themeKey, 'cloud', [
            { reg: /(.fill-N7{fill:#)(\w+)(;})/, newColour: theme.slideBackground },
          ])}
        </g>
        <g opacity="0" transform="translate(100 90)">${animateFadeIn({
          duration: '1s',
          begin: previousSlideId == undefined ? undefined : `${previousSlideId}-slide-anim.begin+1s`,
        })}
            <rect 
              width="850"
              height="800"
              x="850"
              y="50"
              rx="50"
              fill="transparent"
              stroke="${theme.secondary}"
              stroke-width="3"
            />

            <text x="890" y="120" fill="${theme.controlForeground}" font-size="30">
              D2: Declarative Diagramming
            </text>

            <g transform="translate(490 -45)">
              <a xlink:href="https://d2lang.com" target="_blank">
                ${drawText(theme, 0, 'https://d2lang.com', 30, 'font-style="italic"')}
              </a>
              ${drawLine(theme, -0.05, 235)}
            </g>

            
            <g transform="translate(850 140)">
              <foreignObject x="40" y="15" width="1200" height="800">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 1.5em;">
                    ${topLevelCode.keyValue(['cloud', ': ', '{'])}<br/>
                    ${topLevelCode.keyValue(['disks', ': ', '{'], { tabLevel: 1 })}<br/>
                    ${innerLevelCode.keyValue(['shape', ': ', 'sql_table'], { tabLevel: 2 })}<br/>
                    ${topLevelCode.keyValue(['id', ': ', ''], { tabLevel: 2 })}
                    ${innerLevelCode.value('int')}
                    ${topLevelCode.value(' {')}
                    ${innerLevelCode.keyValue(['constraint', ': ', 'primary_key'])}${topLevelCode.value(' }')}<br/>
                    ${topLevelCode.value(' }', { tabLevel: 1 })}
                    <br/>
                    
                    ${topLevelCode.keyValue(['blocks', ': ', '{'], { tabLevel: 1 })}<br/>
                    ${innerLevelCode.keyValue(['shape', ': ', 'sql_table'], { tabLevel: 2 })}<br/>
                    ${topLevelCode.keyValue(['id', ': ', ''], { tabLevel: 2 })}
                    ${innerLevelCode.value('int')}
                    ${topLevelCode.value(' {')}
                    ${innerLevelCode.keyValue(['constraint', ': ', 'primary_key'])}${topLevelCode.value(' }')}<br/>
                    ${topLevelCode.keyValue(['disk', ': ', ''], { tabLevel: 2 })}
                    ${innerLevelCode.value('int')}
                    ${topLevelCode.value(' {')}
                    ${innerLevelCode.keyValue(['constraint', ': ', 'foreign_key'])}${topLevelCode.value(' }')}<br/>
                    ${topLevelCode.keyValue(['blob', ': ', ''], { tabLevel: 2 })}
                    ${innerLevelCode.value('blob')}
                    <br/>
                    ${topLevelCode.value(' }', { tabLevel: 1 })}
                    <br/>
                    <br/>

                    ${topLevelCode.keyValue(['blocks', '.', ''], { tabLevel: 1 })}${topLevelCode.key('disk')}
                    ${topLevelCode.value('->')}
                    ${topLevelCode.keyValue(['disks', '.', ''])}${topLevelCode.key('id')}
                    <br />
                    <br />
                    ${topLevelCode.key('AWS S3 Vancouver', { tabLevel: 1 })}
                    ${topLevelCode.value('->')}
                    ${topLevelCode.keyValue(['disks', ':', ' {'])}<br/>
                    ${innerLevelCode.keyValue(['style', '.', ''], { tabLevel: 2 })}
                    ${innerLevelCode.keyValue(['animated', ': ', 'true'])}<br/>
                    ${topLevelCode.value('}', { tabLevel: 1 })}
                    <br />
                    ${topLevelCode.value(' }')}
                </div>
              </foreignObject>
            </g>
        </g>
        `,
      ...sharedProperties,
    }),
    ...sharedProperties,
  };
};

/*

  AWS S3 Vancouver -> disks: {
    style.animated: true
  }
*/
