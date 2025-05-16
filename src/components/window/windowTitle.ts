import { svgConstants } from '../../constants/svg';

export const windowTitle = async (title: string) => {
  return `<g id="window-title" class="noselect">
    <rect x="60" y="10" height="47" fill="${svgConstants.colour.slideBackground}" width="${svgConstants.width / 2}" />
    <text x="70" y="44" fill="white" font-size="35">${title}</text>
  </g>`;
};
