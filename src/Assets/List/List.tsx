import React from 'react';
import { StyledSvgList } from './List.styles';
import colors from '../../color-palette';

export interface ListProps {
  size?: number;
  color?: string;
}

const List = ({ size, color }: ListProps) => {
  return (
    <StyledSvgList width={size ? size : 15} viewBox="0 0 12 12" data-testid="List" fill="none">
      <g clipPath="url(#clip0_1_385)">
        <path
          d="M3.5 3H11.5C11.6326 3 11.7598 2.94732 11.8536 2.85355C11.9473 2.75979 12 2.63261 12 2.5C12 2.36739 11.9473 2.24021 11.8536 2.14645C11.7598 2.05268 11.6326 2 11.5 2H3.5C3.36739 2 3.24021 2.05268 3.14645 2.14645C3.05268 2.24021 3 2.36739 3 2.5C3 2.63261 3.05268 2.75979 3.14645 2.85355C3.24021 2.94732 3.36739 3 3.5 3Z"
          fill={color || colors.neutrals.greyLight}
        />
        <path
          d="M11.5 5.5H3.5C3.36739 5.5 3.24021 5.55268 3.14645 5.64645C3.05268 5.74021 3 5.86739 3 6C3 6.13261 3.05268 6.25979 3.14645 6.35355C3.24021 6.44732 3.36739 6.5 3.5 6.5H11.5C11.6326 6.5 11.7598 6.44732 11.8536 6.35355C11.9473 6.25979 12 6.13261 12 6C12 5.86739 11.9473 5.74021 11.8536 5.64645C11.7598 5.55268 11.6326 5.5 11.5 5.5Z"
          fill={color || colors.neutrals.greyLight}
        />
        <path
          d="M11.5 9H3.5C3.36739 9 3.24021 9.05268 3.14645 9.14645C3.05268 9.24021 3 9.36739 3 9.5C3 9.63261 3.05268 9.75979 3.14645 9.85355C3.24021 9.94732 3.36739 10 3.5 10H11.5C11.6326 10 11.7598 9.94732 11.8536 9.85355C11.9473 9.75979 12 9.63261 12 9.5C12 9.36739 11.9473 9.24021 11.8536 9.14645C11.7598 9.05268 11.6326 9 11.5 9Z"
          fill={color || colors.neutrals.greyLight}
        />
        <path
          d="M1 3.5C1.55228 3.5 2 3.05228 2 2.5C2 1.94772 1.55228 1.5 1 1.5C0.447715 1.5 0 1.94772 0 2.5C0 3.05228 0.447715 3.5 1 3.5Z"
          fill={color || colors.neutrals.greyLight}
        />
        <path
          d="M1 7C1.55228 7 2 6.55228 2 6C2 5.44772 1.55228 5 1 5C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7Z"
          fill={color || colors.neutrals.greyLight}
        />
        <path
          d="M1 10.5C1.55228 10.5 2 10.0523 2 9.5C2 8.94772 1.55228 8.5 1 8.5C0.447715 8.5 0 8.94772 0 9.5C0 10.0523 0.447715 10.5 1 10.5Z"
          fill={color || colors.neutrals.greyLight}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_385">
          <rect width="12" height="12" fill={color || colors.neutrals.greyLight} />
        </clipPath>
      </defs>
    </StyledSvgList>
  );
};

export default List;
