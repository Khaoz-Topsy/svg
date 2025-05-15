export const svgConstants = {
  width: 1920,
  height: 1080,
  colour: {
    primary: '#7B0CD8',
    secondary: '#007ca3',
    background: '#343434',
    slideBackground: '#242424',
    //
    primaryGradientStop1: '#b616e7',
    secondaryGradientStop1: '#004257',
    //
    illustrationSkin: '#D6AA8D',
    illustrationSuit: '#343434',
    illustrationPants: '#35465E',
    illustrationHair: '#392F27',
    //
    controlForeground: '#ffffff',
    controlBackground: '#121212',
    controlHighlight: '#545454',
  },
  font: '"system-ui", "Avenir", "Calibri", "Arial", sans-serif',
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
        <stop offset="0%" stop-color="#64E9BA" />
        <stop offset="100%" stop-color="#1AE19C" />
      </linearGradient>`,
  },
};
