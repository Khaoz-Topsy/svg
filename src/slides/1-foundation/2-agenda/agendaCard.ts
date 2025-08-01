import { animateFadeIn, animateSlideIn } from '@/components/core/animate';
import { gradientSphere } from '@/components/spheres/gradientSphere';
import { usePublicImage, type PublicImageKey } from '@/constants/image.ts';
import { svgConstants, svgGradients } from '@/constants/svg';
import type { SlideContext } from '@/contracts/slideContext';
import { getPreviousSlideIndex } from '@/helpers/contextHelper.ts';

interface IProps {
  y: number;
  icon: PublicImageKey;
  heading: string;
  ctx: SlideContext;
  description: string;
  iconTransformProp: string;
}

const colours = {
  text: 'black',
  card: '#E3E3E3',
};

export const agendaCard = async (props: IProps) => {
  const descriptionLines = props.description.split('\n');
  const previousSlideId = getPreviousSlideIndex(props.ctx);

  return `<g 
      class="transition-slide noselect" opacity="0" 
      transform="translate(${svgConstants.width + 100} ${props.y})"
    >
    ${animateFadeIn({
      duration: '1s',
      begin: previousSlideId == undefined ? undefined : `${previousSlideId}-slide-anim.begin+50ms`,
    })}
    ${animateSlideIn({
      from: `${svgConstants.width} ${props.y}`,
      to: `${svgConstants.width / 2.5} ${props.y}`,
      begin: previousSlideId == undefined ? undefined : `${previousSlideId}-slide-anim.begin+${props.y / 4}ms`,
      initialDelay: `${props.y / 4}ms`,
    })}
    <rect 
        width="${svgConstants.width / 2}"
        height="200"
        x="0"
        y="0"
        rx="50"
        fill="${colours.card}"
    >
    </rect>
    ${usePublicImage(props.icon, `transform="${props.iconTransformProp}"`)}
    <text x="175" y="70" fill="${colours.text}" font-size="50">${props.heading}</text>
    ${descriptionLines.map(
      (text, index) => `<text x="175" y="${120 + index * 30}" fill="${colours.text}" font-size="25">${text}</text>`,
    )}

    ${gradientSphere({
      gradientId: svgGradients.ButtonSecondaryGradient.id,
      size: 20,
      x: 0,
      y: 100,
      rotateDeg: 90,
    })}
  </g>`;
};
