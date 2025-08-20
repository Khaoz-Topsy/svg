import { svgConstants, svgGradients } from '@/constants/svg';
import { themes, type ThemeKey } from '@/constants/theme';

export const svgHeading = (props: {
  themeKey: ThemeKey; //
  imagePreloads: string; //
}) => {
  const gradients = svgGradients(props.themeKey);
  const theme = themes[props.themeKey];
  return `
  <defs>
    ${Object.keys(gradients)
      .map((gradientKey) =>
        (gradients as any)[gradientKey].defs //
          .toString()
          .replaceAll('[id]', `id="${gradientKey}"`),
      )
      .join('\n')}

    ${props.imagePreloads}

    <polygon id="star-for-def-example" points="96,0,125.38926261462366,55.54915028125263,187.30142556433475,66.33436854000504,143.55282581475768,111.45084971874736,152.42738422007744,173.66563145999493,96,146,39.572615779922586,173.66563145999498,48.447174185242325,111.45084971874738,4.69857443566525,66.33436854000507,66.61073738537632,55.549150281252636" fill="transparent" stroke-width="5"></polygon>
    <pattern id="pattern-for-def-example" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="10" fill="${theme.exampleColour}" />
    </pattern>
    <path id="entelect-logo" d="M 287.038 363.406 C 285.514 366.2 283.16 378.583 283.922 382.266 C 283.478 386.584 286.726 393.804 290.296 396.439 C 294.644 400.115 304.356 402.457 316.543 401.628 C 326.548 401.548 340.486 397.269 346.048 393.916 C 356.705 388.377 366.635 376.577 368.032 372.874 C 373.224 364.001 375.353 356.964 373.971 342.619 C 372.456 333.518 368.463 325.803 363.45 320.33 C 358.582 314.176 351.788 308.446 343.941 302.896 C 333.735 297.27 328.48 294.065 315.617 292.837 C 298.418 291.195 285.58 296.449 274.728 302.513 C 264.834 307.919 255.574 317.385 251.403 323.491 C 241.055 338.498 237.91 350.018 236.411 364.412 C 235.213 371.381 237.271 386.831 241.089 397.189 C 244.588 406.858 252.685 420.341 261.222 428.115 C 271.566 437.342 279.736 440.444 290.056 443.889 C 301.973 447.147 315.674 447.53 323.919 445.549 C 335.829 443.418 344.333 436.961 349.736 432.474 C 353.854 429.165 361.737 419.259 361.135 416.715 L 346.191 405.507 C 344.176 405.749 337.33 415.319 323.568 418.631 C 315.877 420.574 305.948 419.456 300.466 417.913 C 293.858 416.241 286.637 411.503 283.829 409.642 C 275.679 402.976 271.449 396.036 268.773 389.238 C 266.375 383.981 264.835 375.66 264.959 369.792 C 264.459 361.489 268.016 350.698 272.111 343.513 C 273.921 340.16 281.005 332.193 283.542 330.836 C 292.905 323.604 300.498 321.752 300.498 321.752 C 307.928 319.588 318.601 319.441 323.919 321.161 C 329.971 322.92 333.043 328.561 334.281 331.778 C 334.281 331.778 336.175 333.137 336.42 340.448 C 336.665 347.759 335.511 352.518 330.241 357.994 C 326.196 361.826 322.829 363.995 317.533 365.273 C 312.109 366.447 307.112 366.051 300.482 364.316 C 295.347 361.815 291.403 361.384 287.038 363.406 Z"/>

    <clipPath id="basic-setup-example-1"><rect x="50" y="0" width="100" height="200" /></clipPath>
    <clipPath id="basic-setup-example-2"><rect x="0" y="150" width="100" height="100" /></clipPath>
    <clipPath id="basic-setup-example-3"><rect x="50" y="150" width="100" height="100" /></clipPath>
    <clipPath id="basic-setup-example-4"><rect x="-50" y="50" width="100" height="100" /></clipPath>

    <rect id="qrPixel" width="8" height="8"  stroke="${theme.controlForeground}" stroke-width="1" rx="0.5"/>
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

    .cool-circle {
      fill: #FF0000;
      stroke: #FFFF00;
      stroke-width: 10px;
    }

    @keyframes anim-cool-circle {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(0, 18em);
      }
    }

    .cool-circle-anim {
      animation: anim-cool-circle;
      animation-direction: alternate;
      animation-duration: 3s;
      animation-iteration-count: infinite;
    }

    @keyframes anim-spin-the-wheel {
      from {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      to {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    .spin-the-wheel {
      -webkit-animation: anim-spin-the-wheel 30s linear infinite;
      -moz-animation: anim-spin-the-wheel 30s linear infinite;
      -ms-animation: anim-spin-the-wheel 30s linear infinite;
      -o-animation: anim-spin-the-wheel 30s linear infinite;
      animation: anim-spin-the-wheel 30s linear infinite;
      transform-origin: 256px 256px;
    }
  </style>`;
};
