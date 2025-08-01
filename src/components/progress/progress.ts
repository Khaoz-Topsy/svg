import { svgConstants } from '@/constants/svg';
import { arrayOfNLength } from '@/helpers/arrayHelper';
import { progressIcon } from './progressIcon';

export const progress = (props: { slideIndex: number; numberOfSlides: number }) => {
  const progressIconOffset = svgConstants.progress.iconSize * 2.5;
  const spaceBetweenIcons = svgConstants.progress.iconSize * 4.5;
  const totalWidth = props.numberOfSlides * spaceBetweenIcons + svgConstants.progress.iconSize * 2;
  const leftPadding = (svgConstants.width - totalWidth) / 2;
  const yCoord = svgConstants.height - 35;
  return `<g id="progress">
    ${arrayOfNLength(props.numberOfSlides).map((_, index) =>
      progressIcon({
        x: leftPadding + progressIconOffset + index * spaceBetweenIcons,
        y: yCoord,
        index,
        isActive: index <= props.slideIndex,
      }),
    )}
  </g>`;
};
