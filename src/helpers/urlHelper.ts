import { ViewMode } from '@/constants/viewMode';

export const getNewPresentationUrl = (slideIndex: number, viewMode: string) => {
  const newUrl = [
    location.origin, //
    location.pathname, //
    viewMode == ViewMode.presenter ? `?mode=${viewMode}` : '',
    `#${slideIndex}`,
  ].join('');
  return newUrl;
};
