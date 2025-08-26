import type { ITheme } from '@/constants/theme';

const circleRadius = 7;
export const drawPoint = (theme: ITheme, y: number) =>
  `<circle cx="900" cy="${160 + y * 50}" r="${circleRadius}" fill="${theme.exampleColour}" />`;
export const drawText = (theme: ITheme, y: number, text: string, fontSize?: number, attr?: string) =>
  `<text x="930" y="${160 + circleRadius + y * 50}" fill="${theme.controlForeground}" font-size="${fontSize ?? 30}" ${
    attr ?? ''
  }>${text}</text>`;
export const drawRect = (theme: ITheme, y: number, width: number, height: number, attr?: string) =>
  `<rect x="920" y="${140 + y * 50}" width="${width}" height="${height}" fill="${
    theme.wheelOfFortuneBackground
  }" rx="10" ${attr ?? ''}></rect>`;
export const drawLine = (theme: ITheme, y: number, width: number) =>
  `<line x1="930" y1="${178 + y * 50}" x2="${930 + width}" y2="${178 + y * 50}" stroke="${
    theme.controlForeground
  }" stroke-width="2" />`;
