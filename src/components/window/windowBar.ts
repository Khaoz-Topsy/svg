import { svgConstants } from '../../constants/svg';
import { windowButtons } from './windowButtons';
import { windowTitle } from './windowTitle';

export const windowBar = async (props: {
  title?: string; //
}) => {
  const yCoord = 65;
  return `<g id="window-bar">
    ${props.title ? await windowTitle(props.title) : ''}
    ${windowButtons()}
    <path d="M0 ${yCoord} l${svgConstants.width} 0" stroke="white" stroke-opacity="0.3" />
  </g>`;
};
