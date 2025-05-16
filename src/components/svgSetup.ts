import { svgConstants, svgGradients } from '../constants/svg';

export const svgHeading = `
<defs>
  ${Object.keys(svgGradients)
    .map((gradientKey) =>
      (svgGradients as any)[gradientKey].defs //
        .toString()
        .replaceAll('[id]', `id="${gradientKey}"`),
    )
    .join('\n')}

  <rect id="qrPixel" width="8" height="8"  stroke="#ffffff" stroke-width="1" rx="0.5"/>
</defs>

<style>
  text {
    font-family: ${svgConstants.font};
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
</style>`;
