export interface ITheme {
  primary: string;
  secondary: string;
  background: string;
  slideBackground: string;
  exampleColour: string;
  //
  primaryGradientStop1: string;
  secondaryGradientStop1: string;
  //
  cardForeground: string;
  cardBackground: string;
  wheelOfFortuneForeground: string;
  wheelOfFortuneBackground: string;
  //
  codeTag: string;
  codeKey: string;
  codeEquals: string;
  codeValue: string;
  //
  illustrationSkin: string;
  illustrationSuitTop: string;
  illustrationPants: string;
  illustrationShoes: string;
  illustrationHair: string;
  //
  controlForeground: string;
  controlBackground: string;
  controlHighlight: string;
}

export type ThemeKey = 'light' | 'dark';

export const themes: Record<ThemeKey, ITheme> = {
  light: {
    primary: '#7B0CD8',
    secondary: '#007ca3',
    background: '#bbbbbb',
    slideBackground: '#e2e2e2',
    exampleColour: '#18be84',
    //
    primaryGradientStop1: '#b616e7',
    secondaryGradientStop1: '#004257',
    //
    cardForeground: '#121212',
    cardBackground: '#cfcfcf',
    wheelOfFortuneForeground: '#121212',
    wheelOfFortuneBackground: '#545d6b',
    //
    codeTag: '#003342',
    codeKey: 'red',
    codeEquals: 'grey',
    codeValue: 'darkgoldenrod',
    //
    illustrationSkin: '#D6AA8D',
    illustrationSuitTop: '#9e9e9e',
    illustrationPants: '#35465E',
    illustrationShoes: '#343434',
    illustrationHair: '#392F27',
    //
    controlForeground: '#121212',
    controlBackground: '#f0f0f0',
    controlHighlight: '#545454',
  },
  dark: {
    primary: '#7B0CD8',
    secondary: '#007ca3',
    background: '#343434',
    slideBackground: '#242424',
    exampleColour: '#64E9BA',
    //
    primaryGradientStop1: '#b616e7',
    secondaryGradientStop1: '#004257',
    //
    cardForeground: '#121212',
    cardBackground: '#E3E3E3',
    wheelOfFortuneForeground: '#f0f0f0',
    wheelOfFortuneBackground: '#35465E',
    //
    codeTag: 'lightblue',
    codeKey: 'lightcoral',
    codeEquals: 'white',
    codeValue: 'lightyellow',
    //
    illustrationSkin: '#D6AA8D',
    illustrationSuitTop: '#CCCCCC',
    illustrationPants: '#35465E',
    illustrationShoes: '#343434',
    illustrationHair: '#392F27',
    //
    controlForeground: '#f0f0f0',
    controlBackground: '#121212',
    controlHighlight: '#545454',
  },
} as const;
