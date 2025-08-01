import { usePublicImage } from '@/constants/image';

export const windowTitleIcon = () => {
  return `<g id="window-title-icon">
    ${usePublicImage('kurtLourens', 'transform="scale(0.2) translate(100, 50)"')}
  </g>`;
};
