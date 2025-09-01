import { ViewMode } from '@/constants/viewMode';
import { getNewPresentationUrl } from '@/helpers/urlHelper';

export const windowButtonHandler = (props: {
  toggleTheme: () => void; //
  tempMinimize: () => void;
}) => {
  console.log('window button listener setup');

  windowButtonOnClick('#window-minimize', () => {
    console.log('minimize');
    props.tempMinimize();
  });
  windowButtonOnClick('#window-maximize', () => {
    console.log('maximize');
    props.toggleTheme();
  });
  windowButtonOnClick('#window-close', () => {
    console.log('close');
  });
};

const windowButtonOnClick = (buttonId: string, onClick: () => void) => {
  const buttonElem = document.querySelector<HTMLElement>(buttonId);
  if (buttonElem == null) {
    console.warn(`Button with id "${buttonElem}" not found`);
    return;
  }
  buttonElem.onclick = () => onClick();
  buttonElem.classList.add('pointer');
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
  console.log({
    locHref: location.href,
    newUrl,
  });
};

export const progressIndexHandler = (
  numberOfSlides: number, //
  navToSlide: (slideIndex: number) => void,
) => {
  console.log('progress index button listener setup');

  for (let progressIndex = 0; progressIndex < numberOfSlides; progressIndex++) {
    progressIndexOnClick(`#progress-${progressIndex}`, () => navToSlide(progressIndex));
  }
};

const progressIndexOnClick = (progressIndexId: string, navToSlide: () => void) => {
  const progressIndexElem = document.querySelector<HTMLElement>(progressIndexId);
  console.log({ progressIndexElem });
  if (progressIndexElem == null) return;
  progressIndexElem.onclick = navToSlide;
};
