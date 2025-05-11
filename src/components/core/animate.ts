export const animateFadeIn = (props: {
  initialDelay?: string; //
  duration?: string;
}) => `<animate
    attributeName="opacity"
    from="0"
    to="1"
    dur="${props.duration ?? '250ms'}"
    fill="freeze"
    ${(props.initialDelay?.length ?? 0) > 0 ? `begin="${props.initialDelay}"` : ''}
    />`;

// https://stackoverflow.com/questions/31690880/svg-animation-delay-on-each-repetition
// ${initialDelay.length > 0 ? 'begin="3s;op.end+3s"' : ''}
