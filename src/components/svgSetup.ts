import { svgConstants, svgGradients } from '../constants/svg';

export const svgHeading = (props: {
  imagePreloads: string; //
}) => `
<defs>
  ${Object.keys(svgGradients)
    .map((gradientKey) =>
      (svgGradients as any)[gradientKey].defs //
        .toString()
        .replaceAll('[id]', `id="${gradientKey}"`),
    )
    .join('\n')}

  ${props.imagePreloads}

  <polygon id="star-for-def-example" points="96,0,125.38926261462366,55.54915028125263,187.30142556433475,66.33436854000504,143.55282581475768,111.45084971874736,152.42738422007744,173.66563145999493,96,146,39.572615779922586,173.66563145999498,48.447174185242325,111.45084971874738,4.69857443566525,66.33436854000507,66.61073738537632,55.549150281252636" fill="transparent" stroke-width="5"></polygon>
  <pattern id="pattern-for-def-example" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
    <circle cx="10" cy="10" r="10" fill="#64E9BA" />
  </pattern>

  <rect id="qrPixel" width="8" height="8"  stroke="#ffffff" stroke-width="1" rx="0.5"/>
</defs>

<style>
  foreignObject *,
  text {
    font-family: ${svgConstants.font};
    line-height: 1.5em;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  
  .noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .transition-slide {
    transition: transform var(--duration, 500ms) ease-in-out;
  }

  .slide-left-right,
  .slide-up-down {
    animation: linear infinite;
    animation-duration: var(--duration, 5s);
    animation-delay: var(--delay, 1ms);
    animation-direction: alternate;
  }

  .slide-left-right {
    animation-name: anim-slide-left-right;
  }

  .slide-up-down {
    animation-name: anim-slide-up-down;
  }

  @keyframes anim-slide-left-right {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(3em);
    }
  }

  @keyframes anim-slide-up-down {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(3em);
    }
  }

  .my-rect {
    fill: #FF0000;
    stroke: #FFFF00;
    stroke-width: 10px;
  }

  @keyframes anim-my-rect-anim {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, 18em);
    }
  }

  .my-rect-anim {
    animation: anim-my-rect-anim;
    animation-direction: alternate;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
</style>`;
