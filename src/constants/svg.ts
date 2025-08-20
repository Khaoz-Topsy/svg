import { themes, type ThemeKey } from './theme';

export const svgConstants = {
  width: 1920,
  height: 1080,
  defaultTheme: 'dark',
  font: '"Calibri", "Arial", sans-serif',
  windowIconSize: 10,
  progress: {
    iconSize: 5,
  },
} as const;

export const svgGradients = (themeKey: ThemeKey) => ({
  ButtonSecondaryGradient: {
    id: 'ButtonSecondaryGradient',
    defs: `<linearGradient [id]>
        <stop offset="0%" stop-color="${themes[themeKey].secondary}" />
        <stop offset="100%" stop-color="${themes[themeKey].secondaryGradientStop1}" />
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
        <stop offset="0%" stop-color="${themes[themeKey].exampleColour}" />
        <stop offset="100%" stop-color="#1AE19C" />
      </linearGradient>`,
  },
});
