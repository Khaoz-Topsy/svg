import type { ITheme } from '@/constants/theme';

export const createDuckSvg = (theme: ITheme, pixelSize: number = 8) => {
  const drawPixel = (x: number, y: number, fill?: string) =>
    `<rect width="8" height="8"
        x="${x * pixelSize}" 
        y="${y * pixelSize}" 
        fill="${fill ?? theme.illustrationDuckFeather}"  
        stroke="${fill ?? theme.illustrationDuckFeather}" 
        stroke-width="1" 
        rx="0.25"
    ></rect>`;

  return [
    drawPixel(7, 1),
    drawPixel(8, 1),
    drawPixel(9, 1),
    drawPixel(6, 2),
    drawPixel(7, 2),
    drawPixel(8, 2),
    drawPixel(9, 2),
    drawPixel(10, 2),
    drawPixel(6, 3),
    drawPixel(7, 3, theme.illustrationDuckEye),
    drawPixel(8, 3),
    drawPixel(9, 3, theme.illustrationDuckBeak),
    drawPixel(10, 3, theme.illustrationDuckBeak),
    drawPixel(1, 4),
    drawPixel(6, 4),
    drawPixel(7, 4),
    drawPixel(8, 4),
    drawPixel(9, 4, theme.illustrationDuckBeak),
    drawPixel(10, 4, theme.illustrationDuckBeak),
    drawPixel(11, 4, theme.illustrationDuckBeak),
    drawPixel(1, 5),
    drawPixel(2, 5),
    drawPixel(3, 5),
    drawPixel(6, 5),
    drawPixel(7, 5),
    drawPixel(8, 5),
    drawPixel(9, 5),
    drawPixel(1, 6),
    drawPixel(2, 6),
    drawPixel(3, 6),
    drawPixel(4, 6),
    drawPixel(5, 6),
    drawPixel(6, 6),
    drawPixel(7, 6),
    drawPixel(8, 6),
    drawPixel(9, 6),
    drawPixel(1, 7),
    drawPixel(2, 7),
    drawPixel(3, 7),
    drawPixel(4, 7, theme.illustrationDuckBeak),
    drawPixel(5, 7, theme.illustrationDuckBeak),
    drawPixel(6, 7, theme.illustrationDuckBeak),
    drawPixel(7, 7),
    drawPixel(8, 7),
    drawPixel(9, 7),
    drawPixel(1, 8),
    drawPixel(2, 8),
    drawPixel(3, 8),
    drawPixel(4, 8, theme.illustrationDuckBeak),
    drawPixel(5, 8, theme.illustrationDuckBeak),
    drawPixel(6, 8, theme.illustrationDuckBeak),
    drawPixel(7, 8),
    drawPixel(8, 8),
    drawPixel(9, 8),
    drawPixel(2, 9),
    drawPixel(3, 9),
    drawPixel(4, 9),
    drawPixel(5, 9),
    drawPixel(6, 9),
    drawPixel(7, 9),
    drawPixel(8, 9),
    drawPixel(3, 6.5, theme.illustrationDuckBeak),
  ].join('');
};
