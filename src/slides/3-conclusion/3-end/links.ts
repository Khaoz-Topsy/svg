import { windowTitle } from '../../../components/window/windowTitle';
import { PublicImage } from '../../../constants/image';
import { readSvg } from '../../../helpers/fileHelper';
import { slideBase } from '../../slideBase';

export const slideLinks = async () => {
  const introImage = await readSvg(PublicImage.qrCode, (doc) => {
    const innerSvg = doc?.children?.[0]?.innerHTML ?? '';
    if (innerSvg == null) return '';

    return `<g transform="translate(750, 315) scale(1.5)">${innerSvg}</g>`;
  });

  return {
    content: slideBase({
      id: 'slide-links',
      animation: 'fadeIn',
      content: `
        ${await windowTitle('Links')}

        ${introImage}
        `,
    }),
    notes: '',
  };
};
