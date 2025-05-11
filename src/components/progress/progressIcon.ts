import { svgConstants } from '../../constants/svg';

export const progressIcon = (props: {
  x: number; //
  y: number;
  isActive: boolean;
}) => `
  <circle 
    cx="${props.x}" 
    cy="${props.y}" 
    r="${svgConstants.progress.iconSize}" 
    fill="${props.isActive ? '#888888' : '#2F2F2F'}" 
  />
`;
