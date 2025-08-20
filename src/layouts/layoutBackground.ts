import { svgConstants } from '@/constants/svg';
import { themes, type ThemeKey } from '@/constants/theme';

const borderRadius = 20;
const strokeWidth = 4;
export const layoutBackground = (themeKey: ThemeKey) => `<g id="background">
    <rect 
        width="${svgConstants.width - strokeWidth / 2}"
        height="${svgConstants.height - strokeWidth / 2}"
        x="${strokeWidth / 4}"
        y="${strokeWidth / 4}"
        rx="${borderRadius}"
        fill="${themes[themeKey].slideBackground}"
    />
    <rect 
        width="${svgConstants.width - strokeWidth}"
        height="${svgConstants.height - strokeWidth}"
        x="${strokeWidth / 2}"
        y="${strokeWidth / 2}"
        rx="${borderRadius}"
        fill="transparent"
        stroke="${themes[themeKey].primary}"
        stroke-width="${strokeWidth}"
    />
</g>`;
