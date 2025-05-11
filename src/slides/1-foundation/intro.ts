import { windowTitle } from '../../components/window/windowTitle';
import { readSvg } from '../../helpers/fileHelper';
import { slideBase } from '../slideBase';

export const slideIntro = async () => {
  const kurtAvatar = await readSvg('/assets/img/kurtLourens.svg', (doc) => {
    const elem = doc.querySelector('g') as SVGSVGElement;
    if (elem == null) return '';

    elem.setAttribute('transform', 'translate(200,200.5) rotate(10)');
    return elem.outerHTML;
  });

  return {
    content: slideBase({
      id: 'slide-intro',
      content: `
        ${await windowTitle('SVG explained')}
        ${kurtAvatar}
        `,
    }),
    notes: 'intro notes',
  };
};
