interface IProps {
  gradientId: string;
  x: number;
  y: number;
  size: number;
  rotateDeg?: number;
  className?: string;
  styleOverrides?: string;
  rotationAnimateDur?: string;
}

export const gradientSphere = (props: IProps) => {
  return `<circle 
      id="gradient-sphere-${props.gradientId}"
      ${props.className == null ? '' : `class="${props.className}"`}
      ${props.styleOverrides == null ? '' : `style="${props.styleOverrides}"`}
      cx="${props.x}"
      cy="${props.y}"
      r="${props.size}"
      ${
        props.rotateDeg == null
          ? `transform="rotate(0 ${props.x} ${props.y})"`
          : `transform="rotate(${props.rotateDeg} ${props.x} ${props.y})"`
      }
      fill="url(#${props.gradientId})" 
    >
      ${
        props.rotationAnimateDur == null
          ? ''
          : `<animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 ${props.x} ${props.y}"
              to="360 ${props.x} ${props.y}"
              dur="${props.rotationAnimateDur}"
              repeatCount="indefinite" 
            />`
      }    
    </circle>`;
};
