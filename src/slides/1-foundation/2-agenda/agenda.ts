import { windowTitle } from '../../../components/window/windowTitle';
import { PublicImage } from '../../../constants/image';
import { svgConstants } from '../../../constants/svg';
import { readAssetFile, readSvg } from '../../../helpers/fileHelper';
import { slideBase } from '../../slideBase';
import { agendaCard } from './agendaCard';

import notes from './agenda.md';

export const slideAgenda = async () => {
  const agendaImage = await readSvg(PublicImage.pitch, (doc) => {
    const innerSvg = doc?.children?.[0]?.innerHTML ?? '';
    if (innerSvg == null) return '';

    return `<g transform="translate(100, 225) scale(1.5)">${innerSvg}</g>`;
  });

  return {
    content: slideBase({
      id: 'slide-agenda',
      animation: 'fadeIn',
      content: `
        ${await windowTitle('Agenda')}

        <rect 
            width="${svgConstants.width}"
            height="${svgConstants.height}"
            x="${(svgConstants.width / 3) * 2}"
            y="100"
            rx="50"
            fill="${svgConstants.colour.primary}"
        />
        
        ${await agendaCard({
          y: 200,
          icon: 'about',
          heading: 'Introduction',
          description: 'What is an SVG? How does it compare to other image formats? \nHow is it made?',
          iconTransformProp: 'scale(0.75) translate(55, 67)',
        })}
        ${await agendaCard({
          y: 450,
          icon: 'cool',
          heading: 'Cool use cases',
          description: 'Examples of clever ways to use SVGs',
          iconTransformProp: 'scale(0.1) translate(400, 450)',
        })}
        ${await agendaCard({
          y: 700,
          icon: 'review',
          heading: 'Considerations',
          description: 'What are some concerns or negatives when using SVGs',
          iconTransformProp: 'scale(0.05) translate(1000, 950)',
        })}

        ${agendaImage}       
        `,
    }),
    notes: await readAssetFile(notes),
  };
};
