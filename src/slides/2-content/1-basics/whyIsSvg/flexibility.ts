import { svgCode } from '@/components/code/codeSpan';
import type { ITheme } from '@/constants/theme';
import { notFocussedStyle } from '@/helpers/svgHelper';

export const flexibilityHtml = (
  theme: ITheme,
  opts: {
    fileName: string;
    colourValue: string;
  },
) => {
  const code = svgCode(theme.code);

  return `
    ${code.tag(`// ${opts.fileName}.html`, { colour: 'lightgrey', opacity: 0.5 })}
    <br />
    ${code.tag('&lt;div')}
    ${code.keyValue(['style', '=', `"color: ${opts.colourValue};"`])}${code.tag('&gt;')}
    <br />

    ${code.tag('&lt;svg', { ...notFocussedStyle, tabLevel: 1 })}
    ${code.keyValue(['version', '=', '"1.1"'], notFocussedStyle)}
    ${code.value('...', notFocussedStyle)}
    <br />
    
    ${code.tag('&lt;circle', { tabLevel: 2 })}
    ${code.keyValue(['cx', '=', '"125"'])}
    ${code.keyValue(['cy', '=', '"125"'])}
    ${code.keyValue(['r', '=', '"80"'])}
    <br />
    ${code.keyValue(['fill', '=', '"currentcolor"'], { tabLevel: 3 })}
    <br />
    ${code.tag('/&gt;', { tabLevel: 2 })}
    <br />

    ${code.tag('&lt;/svg&gt;', { ...notFocussedStyle, tabLevel: 1 })}

    <br />
    ${code.tag('&lt;/div&gt;')}
    <br />
    <br />`;
};

export const flexibilitySvgResult = (x: number, y: number, colourValue: string) => {
  return `    
    <circle
        cx="${x}" cy="${y}" r="20" fill="${colourValue}"
    />`;
};
