export interface ICodeTheme {
  tag: string;
  key: string;
  equals: string;
  value: string;
}

export interface ITheme {
  primary: string;
  secondary: string;
  background: string;
  slideBackground: string;
  exampleColour: string;
  exampleColour2: string;
  //
  primaryGradientStop1: string;
  secondaryGradientStop1: string;
  //
  cardForeground: string;
  cardBackground: string;
  wheelOfFortuneForeground: string;
  wheelOfFortuneBackground: string;
  //
  code: ICodeTheme;
  d2Code: ICodeTheme;
  //
  illustrationSkin: string;
  illustrationSuitTop: string;
  illustrationPants: string;
  illustrationShoes: string;
  illustrationHair: string;
  illustrationDuckFeather: string;
  illustrationDuckBeak: string;
  illustrationDuckEye: string;
  illustrationDuckPupil: string;
  //
  controlForeground: string;
  controlBackground: string;
  controlHighlight: string;
  //
  defaultDelayInMs: number;
}

export type ThemeKey = 'light' | 'dark';

export const themes: Record<ThemeKey, ITheme> = {
  light: {
    primary: '#7B0CD8',
    secondary: '#007ca3',
    background: '#bbbbbb',
    slideBackground: '#e2e2e2',
    exampleColour: '#18be84',
    exampleColour2: '#007CA3',
    //
    primaryGradientStop1: '#b616e7',
    secondaryGradientStop1: '#004257',
    //
    cardForeground: '#121212',
    cardBackground: '#cfcfcf',
    wheelOfFortuneForeground: '#121212',
    wheelOfFortuneBackground: '#545d6b',
    //
    code: {
      tag: '#003342',
      key: 'red',
      equals: 'grey',
      value: 'darkgoldenrod',
    },
    d2Code: {
      tag: '#405f81',
      key: '#5E5FFF',
      equals: '#635b6e',
      value: '#20814d',
    },
    //
    illustrationSkin: '#D6AA8D',
    illustrationSuitTop: '#9e9e9e',
    illustrationPants: '#35465E',
    illustrationShoes: '#343434',
    illustrationHair: '#392F27',
    illustrationDuckFeather: '#FFF000',
    illustrationDuckBeak: '#FF8400',
    illustrationDuckEye: '#000103',
    illustrationDuckPupil: '#FDFDFD',
    //
    controlForeground: '#121212',
    controlBackground: '#f0f0f0',
    controlHighlight: '#545454',
    //
    defaultDelayInMs: 500,
  },
  dark: {
    primary: '#7B0CD8',
    secondary: '#007ca3',
    background: '#343434',
    slideBackground: '#242424',
    exampleColour: '#64E9BA',
    exampleColour2: '#007CA3',
    //
    primaryGradientStop1: '#b616e7',
    secondaryGradientStop1: '#004257',
    //
    cardForeground: '#121212',
    cardBackground: '#E3E3E3',
    wheelOfFortuneForeground: '#f0f0f0',
    wheelOfFortuneBackground: '#35465E',
    //
    code: {
      tag: 'lightblue',
      key: 'lightcoral',
      equals: 'white',
      value: 'lightyellow',
    },
    d2Code: {
      tag: '#6DA1DC',
      key: '#5E5FFF',
      equals: '#C4B3DC',
      value: '#30C174',
    },
    //
    illustrationSkin: '#D6AA8D',
    illustrationSuitTop: '#CCCCCC',
    illustrationPants: '#35465E',
    illustrationShoes: '#343434',
    illustrationHair: '#392F27',
    illustrationDuckFeather: '#FFF000',
    illustrationDuckBeak: '#FF8400',
    illustrationDuckEye: '#000103',
    illustrationDuckPupil: '#FDFDFD',
    //
    controlForeground: '#f0f0f0',
    controlBackground: '#121212',
    controlHighlight: '#545454',
    //
    defaultDelayInMs: 500,
  },
} as const;
