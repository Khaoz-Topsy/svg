/**
 * Shows a tooltip icon, on click it will fade out and the target icon will fade in
 */
export const tooltipAction = (props: {
  srcId: string; //
  targetId: string;
  tooltipFadeOutDurationMs?: number;
  targetFadeInDurationMs?: number;
}) => `
  <animate 
    id="${props.srcId}-anim"
    href="#${props.srcId}" 
    attributeName="opacity"
    from="1" 
    to="0" 
    dur="${props.tooltipFadeOutDurationMs ?? 250}ms"
    begin="click" 
    fill="freeze"  
  />
  <animate
    href="#${props.targetId}"
    attributeName="opacity"
    from="0" 
    to="1"
    dur="500ms"
    begin="${props.srcId}-anim.begin + ${props.targetFadeInDurationMs ?? 250}ms" 
    fill="freeze"
  />`;
