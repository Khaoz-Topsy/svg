import { windowTitle } from '../../../components/window/windowTitle';
import { svgConstants } from '../../../constants/svg';
import { readSrcFile } from '../../../helpers/fileHelper';
import { slideBase } from '../../slideBase';

import notes from './svgSize.md';

export const slideSvgSize = async () => {
  return {
    content: slideBase({
      id: 'slide-svg-size',
      animation: 'fadeIn',
      content: `
        ${await windowTitle('SVG vs PNG')}

        <rect 
            width="${svgConstants.width}"
            height="${svgConstants.height}"
            x="${(svgConstants.width / 3) * 2}"
            y="100"
            rx="50"
            fill="${svgConstants.colour.primary}"
        />  
        `,
    }),
    notes: await readSrcFile(notes),
  };
};
