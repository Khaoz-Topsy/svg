export interface ISvgSlide {
  id: string;
  content: string;
  notes: string;
  publicNotes?: string;
  ssg: ISvgSlideServerSideOptions;
}

export interface ISvgSlideServerSideOptions {
  secondsToDisplay: number;
}
