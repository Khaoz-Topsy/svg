import type { ITheme } from '@/constants/theme';
import { windowBarLine } from './windowBarLine';
import { windowButtons } from './windowButtons';
import { windowTitle } from './windowTitle';

export const windowBar = async (props: {
  theme: ITheme;
  title?: string; //
}) => {
  return `<g id="window-bar">
    ${props.title ? windowTitle(props.theme, props.title) : ''}
    ${windowButtons()}
    ${windowBarLine(props.theme)}
  </g>`;
};
