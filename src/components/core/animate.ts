export const animateFadeIn = (props: {
  initialDelay?: string; //
  duration?: string;
  begin?: string;
}) => {
  return `<animate
    attributeName="opacity"
    from="0"
    to="1"
    dur="${props.duration ?? '250ms'}"
    fill="freeze"
    ${getBeginKeyValue(props) ?? ''}
    />`;
};

export const animateSlideIn = (props: {
  initialDelay?: string; //
  begin?: string;
  from: string;
  to: string;
}) => {
  return `<animateTransform
    attributeName="transform"
    attributeType="XML"
    type="translate"
    from="${props.to}"
    to="${props.from}"
    fill="freeze"
    ${getBeginKeyValue(props) ?? '50ms'}
  />`;
};

export const getBeginKeyValue = (props: {
  initialDelay?: string; //
  begin?: string;
}) => {
  let begin = null;
  const beginWasSupplied = (props.begin?.length ?? 0) > 0;
  const initialDelayWasSupplied = (props.initialDelay?.length ?? 0) > 0;

  if (beginWasSupplied) {
    begin = `begin="${props.begin}"`;
  } else if (initialDelayWasSupplied) {
    begin = `begin="${props.initialDelay}"`;
  }
  return begin;
};

// ${(props.initialDelay?.length ?? 0) > 0 ? `begin="${props.initialDelay}"` : ''}
// export const animateSlideIn = (props: {
//   initialDelay?: string; //
//   duration?: string;
//   from: string;
//   to: string;
// }) => `<animateTransform
//   id="op"
//     attributeName="transform"
//     attributeType="XML"
//     type="translate"
//     from="${props.from}"
//     to="${props.to}"
//     dur="${props.duration ?? '250ms'}"
//     begin="1ms;op.end+30s"
//     ${(props.initialDelay?.length ?? 0) > 0 ? `begin="${props.initialDelay}"` : ''}
//     />`;

// https://stackoverflow.com/questions/31690880/svg-animation-delay-on-each-repetition
// ${initialDelay.length > 0 ? 'begin="3s;op.end+3s"' : ''}
