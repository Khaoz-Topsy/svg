import { readSvg } from '../../helpers/fileHelper';

export const windowTitleIcon = async () => {
  const kurtIcon = await readSvg('/assets/img/kurtLourens.svg', (doc) => {
    const elem = doc.querySelector('g') as SVGSVGElement;
    if (elem == null) return '';

    elem.setAttribute('transform', 'scale(0.2) translate(100, 50)');
    return elem.outerHTML;
  });

  return `<g id="window-title-icon">
    ${kurtIcon}
  </g>`;
};
