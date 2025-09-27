import type { ITheme } from '@/constants/theme';

export const createDuckSvg = (theme: ITheme, pixelSize: number = 8) => {
  return `
      <g fill="${theme.illustrationDuckFeather}">
          <rect width="${3 * pixelSize}" height="${2 * pixelSize}" x="${7 * pixelSize}" y="${1 * pixelSize}" />
          <rect width="${4 * pixelSize}" height="${7 * pixelSize}" x="${6 * pixelSize}" y="${2 * pixelSize}" />
          <rect width="${2 * pixelSize}" height="${2 * pixelSize}" x="${9 * pixelSize}" y="${2 * pixelSize}" />
          <rect width="${7 * pixelSize}" height="${4 * pixelSize}" x="${2 * pixelSize}" y="${6 * pixelSize}" />
          <rect width="${3 * pixelSize}" height="${4 * pixelSize}" x="${1 * pixelSize}" y="${5 * pixelSize}" />
          <rect width="${1 * pixelSize}" height="${2 * pixelSize}" x="${1 * pixelSize}" y="${4 * pixelSize}" />
      </g>
      <g fill="${theme.illustrationDuckBeak}">
          <rect width="${2 * pixelSize}" height="${2 * pixelSize}" x="${9 * pixelSize}" y="${3 * pixelSize}" />
          <rect width="${2 * pixelSize}" height="${1 * pixelSize}" x="${10 * pixelSize}" y="${4 * pixelSize}" />
          <rect width="${3 * pixelSize}" height="${2 * pixelSize}" x="${4 * pixelSize}" y="${7 * pixelSize}" />
          <rect width="${2 * pixelSize}" height="${1 * pixelSize}" x="${3 * pixelSize}" y="${7 * pixelSize}" />
      </g>
      <use href="#p" x="${7 * pixelSize}" y="${3 * pixelSize}" fill="${theme.illustrationDuckEye}" />`;
};
