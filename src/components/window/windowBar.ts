import { windowBarLine } from './windowBarLine';
import { windowButtons } from './windowButtons';
import { windowTitle } from './windowTitle';

export const windowBar = async (props: {
  title?: string; //
}) => {
  return `<g id="window-bar">
    ${props.title ? await windowTitle(props.title) : ''}
    ${windowButtons()}
    ${windowBarLine()}
  </g>`;
};
