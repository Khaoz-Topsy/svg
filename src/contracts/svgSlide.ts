export interface ISvgSlide {
  content: string;
  notes: string;
  publicNotes?: string;
  ssg: ISvgSlideServerSideOptions;
}

export interface ISvgSlideServerSideOptions {
  secondsToDisplay: number;
}
