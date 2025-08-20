import { type ITheme } from '@/constants/theme';

interface IProps {
  options: Array<string>;
  theme: ITheme;
  attr?: string;
  rotate?: boolean;
}

const size = 512;
const viewBoxPadding = 2;
const logoSize = 100;
const padding = 10;

export const getSpinner = (props: IProps) => {
  let anglePerSlice = 360 / props.options.length;

  const centerPoint = size / 2 + viewBoxPadding;
  const spinnerColour = props.theme.exampleColour;

  const value = 360 / props.options.length;
  anglePerSlice = Number(value.toFixed(2));

  let innerAttr = '';
  if (props.rotate == true) {
    innerAttr = 'class="spin-the-wheel"';
    // innerContent = `<animateTransform attributeName="transform" type="rotate" from="0 ${centerPoint} ${centerPoint}" to="360 ${centerPoint} ${centerPoint}" dur="30s" repeatCount="indefinite" />`;
  }

  return `
    <g id="spinner" ${props.attr ?? ''}>
        <g id="spinner-inner" ${innerAttr}>

            <circle
                cx="${centerPoint}"
                cy="${centerPoint}"
                r="${centerPoint - padding}"
                fill="${props.theme.wheelOfFortuneBackground}"
                stroke="${props.theme.wheelOfFortuneForeground}"
            />
            ${props.options
              .map(
                (opt, index) => `
                <g id="option-line-${index}" transform="rotate(${anglePerSlice * index} ${centerPoint} ${centerPoint})">
                    <line
                        x1="${centerPoint}"
                        y1="${centerPoint}"
                        x2="${centerPoint}"
                        y2="${padding}"
                        fill="${props.theme.wheelOfFortuneBackground}"
                        stroke="${props.theme.wheelOfFortuneForeground}"
                    ></line>
                </g>
                <g id="option-text-${index}" transform="rotate(${
                  anglePerSlice * (index + 0.5)
                } ${centerPoint} ${centerPoint})">
                    <text
                        x="${centerPoint}"
                        y="${size / 7}"
                        font-size="35"
                        text-anchor="middle"
                        fill="white"
                    >
                        ${opt}
                    </text>
                </g>`,
              )
              .join('')}
            <circle
                cx="${centerPoint}"
                cy="${centerPoint}"
                r="${(logoSize / 3) * 2}"
                fill="${props.theme.wheelOfFortuneBackground}"
                stroke="${props.theme.wheelOfFortuneForeground}"
            />
            <use 
              href="#entelect-logo" 
              fill="${spinnerColour}" 
              stroke="${spinnerColour}" 
              stroke-width="5" 
              transform="scale(0.5) translate(${centerPoint - 50} ${centerPoint - 110})"  
            />
        </g>
        <polygon
            transform="translate(${centerPoint - padding * 2} 5)"
            points="0,0 ${centerPoint / 6},0 ${centerPoint / 12},${centerPoint / 12}"
            fill="${spinnerColour}" rx="10"
            stroke="${spinnerColour}" stroke-width="5"
        />
    </g>`;
};
