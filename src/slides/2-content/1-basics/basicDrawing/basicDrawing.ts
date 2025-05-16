import { svgCode } from '../../../../components/code/codeSpan';
import { windowTitle } from '../../../../components/window/windowTitle';
import type { ISlideContext } from '../../../../contracts/slideContext';
import type { ISvgSlide } from '../../../../contracts/svgSlide';
import { slideBase } from '../../../slideBase';
import { slideBasicDrawingCard } from './cardExample';

export const slideBasicDrawing = async (ctx: ISlideContext): Promise<ISvgSlide> => {
  return {
    content: slideBase({
      ctx: ctx,
      id: 'slide-basic-drawing',
      webAnimation: 'fadeIn',
      content: `
        ${await windowTitle('Basics of drawing')}

        ${slideBasicDrawingCard({
          x: 100,
          y: 120,
          animatePosition: 1,
          svgContent: `<line x1="50" y1="200" x2="250" y2="50" stroke="#64E9BA" stroke-width="5" />`,
          codeContent: `
            ${svgCode.tag('&lt;line')}<br />
            ${svgCode.keyValue(['x1', '=', '"50"'], { tabLevel: 1 })}
            ${svgCode.keyValue(['y1', '=', '"200"'])}<br />
            ${svgCode.keyValue(['x2', '=', '"250"'], { tabLevel: 1 })}
            ${svgCode.keyValue(['y2', '=', '"50"'])}<br />
            ${svgCode.keyValue(['stroke', '=', '"#64E9BA"'], { tabLevel: 1 })}
            ${svgCode.keyValue(['stroke-width', '=', '"5"'])}<br />
            ${svgCode.tag('/&gt;')}
          `,
        })}

        ${slideBasicDrawingCard({
          x: 1000,
          y: 120,
          animatePosition: 2,
          svgContent: `<rect x="50" y="50" width="200" height="150" fill="transparent" stroke="#64E9BA" stroke-width="5" />`,
          codeContent: `
            ${svgCode.tag('&lt;rect')}<br />
            ${svgCode.keyValue(['x', '=', '"50"'], { tabLevel: 1 })}
            ${svgCode.keyValue(['y', '=', '"50"'])}
            ${svgCode.keyValue(['fill', '=', '"transparent"'])}<br />
            ${svgCode.keyValue(['width', '=', '"200"'], { tabLevel: 1 })}
            ${svgCode.keyValue(['height', '=', '"150"'])}<br />
            ${svgCode.keyValue(['stroke', '=', '"#64E9BA"'], { tabLevel: 1 })}
            ${svgCode.keyValue(['stroke-width', '=', '"5"'])}<br />
            ${svgCode.tag('/&gt;')}
          `,
        })}

        ${slideBasicDrawingCard({
          x: 100,
          y: 420,
          animatePosition: 3,
          svgContent: `<circle cx="150" cy="125" r="80" fill="transparent" stroke="#64E9BA" stroke-width="5" />`,
          codeContent: `
            ${svgCode.tag('&lt;circle')}<br />
            ${svgCode.keyValue(['cx', '=', '"150"'], { tabLevel: 1 })}
            ${svgCode.keyValue(['cy', '=', '"125"'])}
            ${svgCode.keyValue(['r', '=', '"80"'])}<br />
            ${svgCode.keyValue(['fill', '=', '"transparent"'], { tabLevel: 1 })}<br />
            ${svgCode.keyValue(['stroke', '=', '"#64E9BA"'], { tabLevel: 1 })}
            ${svgCode.keyValue(['stroke-width', '=', '"5"'])}<br />
            ${svgCode.tag('/&gt;')}
          `,
        })}

        ${slideBasicDrawingCard({
          x: 1000,
          y: 420,
          animatePosition: 4,
          overrideForeignObjectX: 280,
          svgContent: `<polygon points="150,50 220,110 200,200 100,200 80,110" 
              fill="transparent" stroke="#64E9BA" stroke-width="5" />`,
          codeContent: `
            ${svgCode.tag('&lt;polygon')}<br />
            ${svgCode.keyValue(['points', '=', '"150,50 220,110 200,200 100,200 80,110"'], { tabLevel: 1 })}<br />
            ${svgCode.keyValue(['fill', '=', '"transparent"'], { tabLevel: 1 })}<br />
            ${svgCode.keyValue(['stroke', '=', '"#64E9BA"'], { tabLevel: 1 })}
            ${svgCode.keyValue(['stroke-width', '=', '"5"'])}<br />
            ${svgCode.tag('/&gt;')}
          `,
        })}

        ${slideBasicDrawingCard({
          x: 100,
          y: 720,
          animatePosition: 5,
          overrideForeignObjectX: 280,
          overrideCardHeight: 275,
          svgContent: `<polyline points="120,140 180,140 210,100 180,60 110,60 70,100 70,170 110,210 180,210" 
              fill="transparent" stroke="#64E9BA" stroke-width="5" />`,
          codeContent: `
            ${svgCode.tag('&lt;polygon')}<br />
            ${svgCode.keyValue(['points', '=', '"120,130 180,130 210,90 180,50'], { tabLevel: 1 })}<br />
            ${svgCode.value('110,50 70,90 70,150 110,190 180,190"', { tabLevel: 4 })}<br />
            ${svgCode.keyValue(['fill', '=', '"transparent"'], { tabLevel: 1 })}<br />
            ${svgCode.keyValue(['stroke', '=', '"#64E9BA"'], { tabLevel: 1 })}
            ${svgCode.keyValue(['stroke-width', '=', '"5"'])}<br />
            ${svgCode.tag('/&gt;')}
          `,
        })}

        ${slideBasicDrawingCard({
          x: 1000,
          y: 720,
          animatePosition: 6,
          overrideForeignObjectX: 280,
          overrideCardHeight: 275,
          svgContent: `<path d="M 287.038 363.406 C 285.514 366.2 283.16 378.583 283.922 382.266 C 283.478 386.584 286.726 393.804 290.296 396.439 C 294.644 400.115 304.356 402.457 316.543 401.628 C 326.548 401.548 340.486 397.269 346.048 393.916 C 356.705 388.377 366.635 376.577 368.032 372.874 C 373.224 364.001 375.353 356.964 373.971 342.619 C 372.456 333.518 368.463 325.803 363.45 320.33 C 358.582 314.176 351.788 308.446 343.941 302.896 C 333.735 297.27 328.48 294.065 315.617 292.837 C 298.418 291.195 285.58 296.449 274.728 302.513 C 264.834 307.919 255.574 317.385 251.403 323.491 C 241.055 338.498 237.91 350.018 236.411 364.412 C 235.213 371.381 237.271 386.831 241.089 397.189 C 244.588 406.858 252.685 420.341 261.222 428.115 C 271.566 437.342 279.736 440.444 290.056 443.889 C 301.973 447.147 315.674 447.53 323.919 445.549 C 335.829 443.418 344.333 436.961 349.736 432.474 C 353.854 429.165 361.737 419.259 361.135 416.715 L 346.191 405.507 C 344.176 405.749 337.33 415.319 323.568 418.631 C 315.877 420.574 305.948 419.456 300.466 417.913 C 293.858 416.241 286.637 411.503 283.829 409.642 C 275.679 402.976 271.449 396.036 268.773 389.238 C 266.375 383.981 264.835 375.66 264.959 369.792 C 264.459 361.489 268.016 350.698 272.111 343.513 C 273.921 340.16 281.005 332.193 283.542 330.836 C 292.905 323.604 300.498 321.752 300.498 321.752 C 307.928 319.588 318.601 319.441 323.919 321.161 C 329.971 322.92 333.043 328.561 334.281 331.778 C 334.281 331.778 336.175 333.137 336.42 340.448 C 336.665 347.759 335.511 352.518 330.241 357.994 C 326.196 361.826 322.829 363.995 317.533 365.273 C 312.109 366.447 307.112 366.051 300.482 364.316 C 295.347 361.815 291.403 361.384 287.038 363.406 Z"
              fill="transparent" stroke="#64E9BA" stroke-width="5" transform="translate(-170 -230)"  />`,
          codeContent: `
            ${svgCode.tag('&lt;path')}<br />
            ${svgCode.keyValue(['d', '=', '"M 287.038 363.406 C 285.514 366.2 ...'], { tabLevel: 1 })}<br />
            ${svgCode.value('... 291.403 361.384 287.038 363.406 Z"', { tabLevel: 3 })}<br />
            ${svgCode.keyValue(['fill', '=', '"transparent"'], { tabLevel: 1 })}<br />
            ${svgCode.keyValue(['stroke', '=', '"#64E9BA"'], { tabLevel: 1 })}
            ${svgCode.keyValue(['stroke-width', '=', '"5"'])}<br />
            ${svgCode.tag('/&gt;')}
          `,
        })}
        `,
    }),
    notes: 'what is svg',
    ssg: {
      secondsToDisplay: 3,
    },
  };
};
