import { gradientSphere } from '../../../components/spheres/gradientSphere';
import { windowTitle } from '../../../components/window/windowTitle';
import { usePublicImage } from '../../../constants/image';
import { svgConstants, svgGradients } from '../../../constants/svg';
import { AppText } from '../../../constants/text';
import type { SlideContext } from '../../../contracts/slideContext';
import type { ISvgSlide } from '../../../contracts/svgSlide';
import { readSrcFile } from '../../../helpers/fileHelper';
import { slideBase } from '../../slideBase';

import notes from './intro.md';

export const slideIntro = async (ctx: SlideContext): Promise<ISvgSlide> => {
  return {
    content: slideBase({
      ctx: ctx,
      content: `
        ${await windowTitle(AppText.title)}

        ${usePublicImage('standing', 'transform="translate(750, 315) scale(1.5)"')}
        <g id="intro-spheres">
          ${gradientSphere({
            gradientId: svgGradients.SpherePurple1Gradient.id,
            className: 'slide-up-down',
            styleOverrides: '--delay: -3s;',
            x: svgConstants.width - 400,
            y: 200,
            size: 50,
          })}
          ${gradientSphere({
            gradientId: svgGradients.SphereBlue1Gradient.id,
            className: 'slide-left-right',
            styleOverrides: '--duration: 10s',
            x: svgConstants.width - 600,
            y: 350,
            size: 150,
          })}
          ${gradientSphere({
            gradientId: svgGradients.SphereGreen1Gradient.id,
            className: 'slide-left-right',
            styleOverrides: '--duration: 7s; animation-direction: alternate-reverse',
            x: svgConstants.width - 800,
            y: svgConstants.height - 200,
            size: 100,
          })}

        </g>
        
        <g id="intro-heading" class="noselect" transform="translate(150, ${svgConstants.height / 2})">
          <text x="0" y="0" fill="white" font-size="250">SVG</text>
          <rect 
            x="-50" y="75" 
            width="${svgConstants.width / 2}" 
            height="100" rx="50" ry="50" 
            fill="url(#${svgGradients.ButtonSecondaryGradient.id})" 
          />
          <text x="0" y="140" fill="white" font-size="50">${AppText.subTitle}</text>
        </g>
        `,
    }),
    notes: await readSrcFile(notes),
    ssg: {
      secondsToDisplay: 3,
    },
  };
};
