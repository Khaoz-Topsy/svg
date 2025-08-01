import { svgConstants } from '@/constants/svg';
import { formatForCssRoot } from '@/helpers/stringHelper';

export const setRootCss = () => {
  const root = document.querySelector<HTMLElement>(':root');
  if (root == null) return;

  for (const colourProp of Object.keys(svgConstants.colour)) {
    const value = (svgConstants.colour as { [x: string]: string })[colourProp];
    const cssRootProp = formatForCssRoot(colourProp);
    root.style.setProperty(cssRootProp, value);
  }

  root.style.setProperty('--font-family', svgConstants.font);
};
