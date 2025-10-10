export const PublicImage = {
  kurtLourens: './assets/img/kurtLourens.svg',
  pitch: './assets/img/pitch.svg',
  standing: './assets/img/standing.svg',
  tooltip: './assets/img/tooltip.svg',
  qrCode: './assets/img/qrCode.svg',
  alien: './assets/img/alien.svg',
  undraw: './assets/img/undraw.svg',
  swatChart: './assets/img/swatChart.svg',
  hacker: './assets/img/hacker.svg',
  ghost: './assets/img/ghost.svg',
  facebook: './assets/img/facebook.svg',
  kurtGithubHeader: './assets/img/kurt-lourens-header.svg',
  githubHeader: './assets/img/github-header.svg',
  webDeveloper: './assets/img/web-developer.svg',
  //
  entelect: './assets/img/entelect.png',
  entelectGithub: './assets/img/entelect-github.png',
  metaDataExample: './assets/img/metaDataExample.png',
  about: './assets/img/icon/about.svg',
  cool: './assets/img/icon/cool.svg',
  review: './assets/img/icon/review.svg',
} as const; // These images are always included

export const svgLoaders = [
  { id: 'audio', colour: '#1ABC9C' },
  { id: 'rings', colour: '#34495E' },
  { id: 'grid', colour: '#F39C12' },
  { id: 'hearts', colour: '#9B59B6' },

  { id: 'oval', colour: '#3498DB' },
  { id: 'three-dots', colour: '#E74C3C' },
  { id: 'spinning-circles', colour: '#2ECC71' },
  { id: 'puff', colour: '#2C3E50' },

  { id: 'circles', colour: '#F1C40F' },
  { id: 'tail-spin', colour: '#8E44AD' },
  { id: 'bars', colour: '#2980B9' },
  { id: 'ball-triangle', colour: '#E74C3C' },
] as const;

export type PublicImageKey = keyof typeof PublicImage;

export const usePublicImage = (id: PublicImageKey, attr?: string) => `<use href="#${id}" ${attr ?? ''} />`;
export const usePublicLoaderImage = (id: (typeof svgLoaders)[number]['id'], attr?: string) =>
  `<use href="#${id}" ${attr ?? ''} />`;
