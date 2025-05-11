import { ViewMode } from '../constants/viewMode';
import { getNewPresentationUrl } from '../helpers/urlHelper';

export const windowButtonHandler = () => {
  windowButtonOnClick('#window-minimize', () => {
    console.log('minimize');
  });
  windowButtonOnClick('#window-maximize', () => {
    console.log('maximize');
  });
  windowButtonOnClick('#window-close', () => {
    console.log('close');
  });
};

const windowButtonOnClick = (buttonId: string, onClick: () => void) => {
  const buttonElem = document.querySelector<HTMLElement>(buttonId);
  if (buttonElem == null) return;
  buttonElem.onclick = onClick;
};

export const getValuesFromUrl = () => {
  const params = new URLSearchParams(location.search);
  const viewMode = params.get('mode') ?? ViewMode.slides;
  const slideIndex = +location?.hash?.replace?.('#', '');

  return {
    viewMode,
    slideIndex,
  };
};
export const updateUrl = (newIndex: number, viewMode: string) => {
  const newUrl = getNewPresentationUrl(newIndex, viewMode);
  if (location.href != newUrl) location.href = newUrl;
};
