import { svgConstants } from '@/constants/svg';
import type { ITheme } from '@/constants/theme';

export const windowBarLine = (theme: ITheme) => {
  const yCoord = 65;
  return `<path d="M4 ${yCoord} l${svgConstants.width - 8} 0" stroke="${
    theme.controlForeground
  }" stroke-opacity="0.3" />`;
};
