import { svgConstants } from '@/constants/svg';

export const generateNotesPanel = (slideId: string, comment: string) => {
  return `<g id="${slideId}-notes" transform="translate(${svgConstants.width} 0)">
    <foreignObject x="40" y="25" width="1000" height="600">
        <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 1.5em;">
          ${comment}
      </div>
    </foreignObject>
  </g>`;
};
