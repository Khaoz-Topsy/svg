import { svgConstants } from '@/constants/svg';
import { type ITheme } from '@/constants/theme';

export const windowTitle = (theme: ITheme, title: string) => {
  return `<g id="window-title" class="noselect">
    <rect x="60" y="10" height="47" fill="${theme.slideBackground}" width="${svgConstants.width / 2}" />
    <text x="70" y="44" fill="${theme.controlForeground}" font-size="35">${title}</text>
  </g>`;
};
