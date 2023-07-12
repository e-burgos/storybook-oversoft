import React from 'react';
import { StyledHeadingOne, StyledHeadingTwo, StyledHeadingThree } from './Heading.styles';

export interface HeadingProps {
  level: 1 | 2 | 3;
  children: React.ReactNode;
}

const Heading = ({ level, children }: HeadingProps) => {
  const HeadingComponent = [StyledHeadingOne, StyledHeadingTwo, StyledHeadingThree][level - 1];
  return <HeadingComponent>{children}</HeadingComponent>;
};

export default Heading;
