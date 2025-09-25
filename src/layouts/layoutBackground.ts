import { svgConstants } from '@/constants/svg';
import { themes, type ThemeKey } from '@/constants/theme';

export const layoutBackground = (themeKey: ThemeKey) => `<g id="background">
    <rect 
        width="${svgConstants.width - svgConstants.strokeWidth / 2}"
        height="${svgConstants.height - svgConstants.strokeWidth / 2}"
        x="${svgConstants.strokeWidth / 4}"
        y="${svgConstants.strokeWidth / 4}"
        rx="${svgConstants.borderRadius}"
        fill="${themes[themeKey].slideBackground}"
    />
    <rect 
        width="${svgConstants.width - svgConstants.strokeWidth}"
        height="${svgConstants.height - svgConstants.strokeWidth}"
        x="${svgConstants.strokeWidth / 2}"
        y="${svgConstants.strokeWidth / 2}"
        rx="${svgConstants.borderRadius}"
        fill="transparent"
        stroke="${themes[themeKey].primary}"
        stroke-width="${svgConstants.strokeWidth}"
    />
</g>`;
