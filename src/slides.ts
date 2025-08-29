import type { SlideMeta } from '@/contracts/slideMeta';
import { slideIntro } from './slides/1-foundation/1-intro/intro';
import { slideAgenda } from './slides/1-foundation/2-agenda/agenda';
import { slideAnimate } from './slides/2-content/1-basics/animate/animate';
import { slideBasicDrawing } from './slides/2-content/1-basics/basicDrawing/basicDrawing';
import { slideBasicSetup } from './slides/2-content/1-basics/basicSetup/basicSetup.ts';
import { slideBasicDrawingDefsWithCss } from './slides/2-content/1-basics/defs/css/css.ts';
import { slideBasicDrawingDefs } from './slides/2-content/1-basics/defs/defsTag';
import { slideFakeSvg } from './slides/2-content/1-basics/fakeSvg/fakeSvg.ts';
import { slideWhatIsAnSvg } from './slides/2-content/1-basics/whatIsSvg';
import { slideWhyIsSvg } from './slides/2-content/1-basics/whyIsSvg/whyIsSvg.ts';
import { slideForeignObject } from './slides/2-content/2-advanced/foreignObject/foreignObject.ts';
import { slideCalendarIcon } from './slides/2-content/3-fun/calendar/calendarIcon.ts';
import { slideStatPoints } from './slides/2-content/3-fun/statPoints/statPoints.ts';
import { slideSwatChart } from './slides/2-content/3-fun/swatChart/swatChart.ts';
import { slideWheelOfFortune } from './slides/2-content/3-fun/wheelOfFortune/wheelOfFortune.ts';
import { slideLinks } from './slides/3-conclusion/3-end/links';
import { slideDiagrams } from './slides/2-content/3-fun/diagrams/diagrams.ts';

export const getAllSlides = (): Array<SlideMeta> => [
  // Foundation
  { id: 'slide-intro', slideFunc: slideIntro },
  { id: 'slide-agenda', slideFunc: slideAgenda },

  // Basics
  { id: 'slide-what-is-svg', slideFunc: slideWhatIsAnSvg },
  { id: 'slide-why-is-svg', slideFunc: slideWhyIsSvg },
  { id: 'slide-basic-setup', slideFunc: slideBasicSetup },
  { id: 'slide-basic-drawing', slideFunc: slideBasicDrawing },
  { id: 'slide-basic-drawing-defs', slideFunc: slideBasicDrawingDefs },
  { id: 'slide-basic-drawing-fakes', slideFunc: slideFakeSvg },
  { id: 'slide-basic-drawing-css', slideFunc: slideBasicDrawingDefsWithCss },
  { id: 'slide-basic-animate', slideFunc: slideAnimate },

  // Advanced
  { id: 'slide-advanced-foreign-object', slideFunc: slideForeignObject },

  // { id: 'slide-fun-themed-illustrations', slideFunc: themedIllustrations },
  { id: 'slide-fun-calendar-icon', slideFunc: slideCalendarIcon },
  { id: 'slide-fun-stat-points', slideFunc: slideStatPoints },
  { id: 'slide-fun-wheel-of-fortune', slideFunc: slideWheelOfFortune },
  { id: 'slide-fun-swat-chart', slideFunc: slideSwatChart },
  { id: 'slide-fun-diagram', slideFunc: slideDiagrams },

  // Conclusion
  { id: 'slide-links', slideFunc: slideLinks },
];
