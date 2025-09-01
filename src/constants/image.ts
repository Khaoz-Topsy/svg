export const PublicImage = {
  kurtLourens: './assets/img/kurtLourens.svg',
  pitch: './assets/img/pitch.svg',
  standing: './assets/img/standing.svg',
  tooltip: './assets/img/tooltip.svg',
  qrCode: './assets/img/qrCode.svg',
  alien: './assets/img/alien.svg',
  undraw: './assets/img/undraw.svg',
  swatChart: './assets/img/swatChart.svg',
  //
  entelect: './assets/img/entelect.png',
  entelectGithub: './assets/img/entelect-github.png',
  about: './assets/img/icon/about.svg',
  cool: './assets/img/icon/cool.svg',
  review: './assets/img/icon/review.svg',
} as const; // These images are always included

export type PublicImageKey = keyof typeof PublicImage;

export const usePublicImage = (id: PublicImageKey, attr?: string) => `<use href="#${id}" ${attr ?? ''} />`;
