import { svgConstants } from '@/constants/svg';

export const windowBarLine = () => {
  const yCoord = 65;
  return `<path d="M4 ${yCoord} l${svgConstants.width - 8} 0" stroke="white" stroke-opacity="0.3" />`;
};
