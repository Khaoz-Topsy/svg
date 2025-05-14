import { svgConstants, svgGradients } from '../constants/svg';

export const svgHeading = `
<defs>
  <linearGradient id="${svgGradients.ButtonSecondaryGradient}">
    <stop offset="0%" stop-color="${svgConstants.colour.secondary}" />
    <stop offset="100%" stop-color="${svgConstants.colour.secondaryGradientStop1}" />
  </linearGradient>
  <linearGradient id="${svgGradients.SphereBlue1Gradient}">
    <stop offset="0%" stop-color="#8497F2" />
    <stop offset="100%" stop-color="#4A66ED" />
  </linearGradient>
  <linearGradient id="${svgGradients.SpherePurple1Gradient}">
    <stop offset="0%" stop-color="#9D4BE5" />
    <stop offset="100%" stop-color="#7A0AD9" />
  </linearGradient>
  <linearGradient id="${svgGradients.SphereGreen1Gradient}">
    <stop offset="0%" stop-color="#64E9BA" />
    <stop offset="100%" stop-color="#1AE19C" />
  </linearGradient>
</defs>

    <defs>
    </defs>

<style>
  text {
    font-family: ${svgConstants.font};
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
