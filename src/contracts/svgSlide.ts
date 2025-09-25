export interface ISvgSlide {
  content: () => Promise<string>;
  notes: string;
  publicNotes?: string;
  ssg: ISvgSlideServerSideOptions;
}

export interface ISvgSlideServerSideOptions {
  secondsToDisplay: number;
}
