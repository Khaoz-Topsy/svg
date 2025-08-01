interface IProps {
  options: Array<string>;
  attr?: string;
  rotate?: boolean;
}

const size = 512;
const viewBoxPadding = 2;
const wheelBg = 'rgb(77, 77, 77)';
const wheelStroke = 'white';
const logoSize = 100;
const padding = 10;

export const getSpinner = (props: IProps) => {
  let anglePerSlice = 360 / props.options.length;

  const centerPoint = size / 2 + viewBoxPadding;

  const value = 360 / props.options.length;
  anglePerSlice = Number(value.toFixed(2));

  let innerContent = '';
  if (props.rotate == true) {
    innerContent = `<animateTransform attributeName="transform" type="rotate" from="0 ${centerPoint} ${centerPoint}" to="360 ${centerPoint} ${centerPoint}" dur="30s" repeatCount="indefinite" />`;
  }

  return `
    <g id="spinner" ${props.attr ?? ''}>
        <g id="spinner-inner">
            ${innerContent}

            <circle
                cx="${centerPoint}"
                cy="${centerPoint}"
                r="${centerPoint - padding}"
                fill="${wheelBg}"
                stroke="${wheelStroke}"
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
                        fill="${wheelBg}"
                        stroke="${wheelStroke}"
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
                fill="${wheelBg}"
                stroke="${wheelStroke}"
            />
            <use href="#entelect-logo" fill="#64E9BA" stroke="#64E9BA" stroke-width="5" transform="scale(0.5) translate(${
              centerPoint - 50
            } ${centerPoint - 110})"  />
        </g>
        <polygon
            transform="translate(${centerPoint - padding * 2} 5)"
            points="0,0 ${centerPoint / 6},0 ${centerPoint / 12},${centerPoint / 12}"
            fill="#64E9BA" rx="10"
            stroke="#64E9BA" stroke-width="5"
        />
    </g>`;
};
