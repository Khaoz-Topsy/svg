import { svgConstants } from '../constants/svg';

export const layoutBackground = () => `<g id="background">
    <rect 
        width="${svgConstants.width}" 
        height="${svgConstants.height}" 
        x="0" 
        y="0" 
        fill="#242424" 
    />
</g>`;
