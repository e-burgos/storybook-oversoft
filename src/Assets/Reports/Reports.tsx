import React from 'react';
import { StyledSvgReports } from './Reports.styles';
import colors from '../../color-palette';

export interface ReportsProps {
  size?: number;
  color?: string;
}

const Reports = ({ size, color }: ReportsProps) => {
  return (
    <StyledSvgReports width={size ? size : 15} viewBox="0 0 15 14" data-testid="Reports" fill="none">
      <g clipPath="url(#clip0_146_770)">
        <path
          d="M8.2099 14H5.96582L7.13249 9.33333H4.72157C4.48857 9.33324 4.25883 9.27864 4.05069 9.17391C3.84256 9.06918 3.66181 8.91722 3.52288 8.73017C3.38395 8.54313 3.29071 8.32617 3.25059 8.09666C3.21047 7.86714 3.22459 7.63142 3.29182 7.40833L5.5324 0H11.0548L9.30482 4.66667H11.6516C11.9186 4.66684 12.1805 4.73935 12.4096 4.8765C12.6387 5.01365 12.8264 5.21032 12.9526 5.44558C13.0789 5.68085 13.139 5.94593 13.1266 6.21265C13.1143 6.47937 13.0299 6.73775 12.8824 6.96033L8.2099 14Z"
          fill={color || colors.neutrals.greyLight}
        />
      </g>
      <defs>
        <clipPath id="clip0_146_770">
          <rect width="14" height="14" fill="white" transform="translate(0.879761)" />
        </clipPath>
      </defs>
    </StyledSvgReports>
  );
};

export default Reports;
