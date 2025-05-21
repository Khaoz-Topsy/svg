import { windowTitle } from '../../../components/window/windowTitle';
import { PublicImage } from '../../../constants/image';
import { svgConstants } from '../../../constants/svg';
import type { SlideContext } from '../../../contracts/slideContext';
import type { ISvgSlide } from '../../../contracts/svgSlide';
import { readSrcFile, readSvg } from '../../../helpers/fileHelper';
import { slideBase } from '../../slideBase';
import { agendaCard } from './agendaCard';

import notes from './agenda.md';

export const slideAgenda = async (ctx: SlideContext): Promise<ISvgSlide> => {
  const agendaImage = await readSvg(PublicImage.pitch, (doc) => {
    const innerSvg = doc?.children?.[0]?.innerHTML ?? '';
    if (innerSvg == null) return '';

    return `<g transform="translate(100, 225) scale(1.5)">${innerSvg}</g>`;
  });

  return {
    content: slideBase({
      ctx: ctx,
      content: `
        ${await windowTitle('Agenda')}

        <rect 
          width="${svgConstants.width - (svgConstants.width / 3) * 2}"
          height="${svgConstants.height - 100}"
          x="${(svgConstants.width / 3) * 2}"
          y="100"
          rx="25"
          fill="${svgConstants.colour.primary}"
        />
        <rect 
          width="50" height="50"
          x="${svgConstants.width - 50}"
          y="100"
          fill="${svgConstants.colour.primary}"
        />
        <rect 
          width="50" height="50"
          x="${(svgConstants.width / 3) * 2}"
          y="${svgConstants.height - 50}"
          fill="${svgConstants.colour.primary}"
        />
        
        ${await agendaCard({
          y: 200,
          ctx: ctx,
          icon: 'about',
          heading: 'Introduction',
          description: 'What is an SVG? How does it compare to other image formats? \nHow is it made?',
          iconTransformProp: 'scale(0.75) translate(55, 67)',
        })}
        ${await agendaCard({
          y: 450,
          ctx: ctx,
          icon: 'cool',
          heading: 'Cool use cases',
          description: 'Examples of clever ways to use SVGs',
          iconTransformProp: 'scale(0.1) translate(400, 450)',
        })}
        ${await agendaCard({
          y: 700,
          ctx: ctx,
          icon: 'review',
          heading: 'Considerations',
          description: 'What are some concerns or negatives when using SVGs',
          iconTransformProp: 'scale(0.05) translate(1000, 950)',
        })}

        ${agendaImage}       
        `,
    }),
    notes: await readSrcFile(notes),
    ssg: {
      secondsToDisplay: 3,
    },
  };
};
