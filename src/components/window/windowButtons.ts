import { svgConstants } from '../../constants/svg';

export const windowButtons = () => {
  const yCoord = svgConstants.windowIconSize * 3;
  const rightPadding = 0;
  const iconPadding = svgConstants.windowIconSize * 3.5;
  return `<g id="window-buttons">
    <circle
      id="window-minimize"
      cx="${svgConstants.width - iconPadding * 3 - rightPadding}"
      cy="${yCoord}"
      r="${svgConstants.windowIconSize}"
      fill="#126BBF"
    />
    <circle
      id="window-maximize"
      cx="${svgConstants.width - iconPadding * 2 - rightPadding}"
      cy="${yCoord}"
      r="${svgConstants.windowIconSize}"
      fill="#00B133"
    />
    <circle
      id="window-close"
      cx="${svgConstants.width - iconPadding * 1 - rightPadding}"
      cy="${yCoord}"
      r="${svgConstants.windowIconSize}"
      fill="#F4C700"
    />
  </g>`;
};
