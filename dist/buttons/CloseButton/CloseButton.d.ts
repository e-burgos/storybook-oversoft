import React from 'react';
export interface CloseButtonProps {
    onClick: () => void;
    'aria-label'?: string;
}
declare const CloseButton: ({ onClick: clickHandler, "aria-label": ariaLabel }: CloseButtonProps) => React.JSX.Element;
export default CloseButton;
