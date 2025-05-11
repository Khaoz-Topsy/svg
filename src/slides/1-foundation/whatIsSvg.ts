import { windowTitle } from '../../components/window/windowTitle';
import { slideBase } from '../slideBase';

export const slideWhatIsAnSvg = async () => {
  return {
    content: slideBase({
      id: 'slide-intro',
      animation: 'fadeIn',
      content: `
        ${await windowTitle('tester test')}
        `,
    }),
    notes: 'what is svg',
  };
};
