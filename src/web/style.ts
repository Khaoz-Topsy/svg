import { svgConstants } from '@/constants/svg';
import type { ITheme } from '@/constants/theme';
import { formatForCssRoot } from '@/helpers/stringHelper';

export const setRootCss = (theme: ITheme) => {
  const root = document.querySelector<HTMLElement>(':root');
  if (root == null) return;

  for (const colourProp of Object.keys(theme)) {
    const value = (theme as unknown as { [x: string]: string })[colourProp];
    const cssRootProp = formatForCssRoot(colourProp);
    root.style.setProperty(cssRootProp, value);
  }

  root.style.setProperty('--font-family', svgConstants.font);
};
