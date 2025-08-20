const lightMode = {
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
} as const;

const darkMode = {
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
} as const;

export const svgConstants = {
  width: 1920,
  height: 1080,
  colour: darkMode,
  font: '"Calibri", "Arial", sans-serif',
  windowIconSize: 10,
  progress: {
    iconSize: 5,
  },
} as const;

export const svgGradients = {
  ButtonSecondaryGradient: {
    id: 'ButtonSecondaryGradient',
    defs: `<linearGradient [id]>
        <stop offset="0%" stop-color="${svgConstants.colour.secondary}" />
        <stop offset="100%" stop-color="${svgConstants.colour.secondaryGradientStop1}" />
      </linearGradient>`,
  },
  SphereBlue1Gradient: {
    id: 'SphereBlue1Gradient',
    defs: `<linearGradient [id]>
        <stop offset="0%" stop-color="#8497F2" />
        <stop offset="100%" stop-color="#4A66ED" />
      </linearGradient>`,
  },
  SpherePurple1Gradient: {
    id: 'SpherePurple1Gradient',
    defs: `<linearGradient [id]>
        <stop offset="0%" stop-color="#9D4BE5" />
        <stop offset="100%" stop-color="#7A0AD9" />
      </linearGradient>`,
  },
  SphereGreen1Gradient: {
    id: 'SphereGreen1Gradient',
    defs: `<linearGradient [id]>
        <stop offset="0%" stop-color="${svgConstants.colour.exampleColour}" />
        <stop offset="100%" stop-color="#1AE19C" />
      </linearGradient>`,
  },
};
