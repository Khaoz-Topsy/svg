import { ViewMode } from '@/constants/viewMode';

export const getNewPresentationUrl = (slideIndex: number, viewMode: string) => {
  const newUrl = [
    location.origin, //
    viewMode == ViewMode.presenter ? `?mode=${viewMode}` : '',
    `#${slideIndex}`,
  ].join('');
  return newUrl;
};
