import React from 'react';
export interface SpinnerProps {
    size?: number;
    iconColor?: string;
    margin?: string;
}
declare const Spinner: ({ size, iconColor, margin }: SpinnerProps) => React.JSX.Element;
export default Spinner;
