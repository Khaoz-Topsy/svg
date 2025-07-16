import type { SlideMeta } from './contracts/slideMeta';
import { slideIntro } from './slides/1-foundation/1-intro/intro';
import { slideAgenda } from './slides/1-foundation/2-agenda/agenda';
import { slideAnimate } from './slides/2-content/1-basics/animate/animate';
import { slideBasicDrawing } from './slides/2-content/1-basics/basicDrawing/basicDrawing';
import { slideBasicDrawingDefs } from './slides/2-content/1-basics/defs/defsTag';
import { slideSvgSize } from './slides/2-content/1-basics/svgSize';
import { slideWhatIsAnSvg } from './slides/2-content/1-basics/whatIsSvg';
import { slideLinks } from './slides/3-conclusion/3-end/links';

export const getAllSlides = (): Array<SlideMeta> => [
  // Foundation
  { id: 'slide-intro', slideFunc: slideIntro },
  { id: 'slide-agenda', slideFunc: slideAgenda },

  // Content
  { id: 'slide-what-is-svg', slideFunc: slideWhatIsAnSvg },
  { id: 'slide-basic-drawing', slideFunc: slideBasicDrawing },
  { id: 'slide-basic-drawing-defs', slideFunc: slideBasicDrawingDefs },
  { id: 'slide-basic-animate', slideFunc: slideAnimate },
  { id: 'slide-svg-size', slideFunc: slideSvgSize },

  // Conclusion
  { id: 'slide-links', slideFunc: slideLinks },
];
