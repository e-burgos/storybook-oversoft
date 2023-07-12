import React from 'react';
import { StyledParagraph } from './Paragraph.styles';
import { FontFamilyType } from '../../types';

export interface ParagraphProps {
  children: React.ReactNode;
  fontColor?: string;
  fontFamily?: FontFamilyType;
  fontSize?: string;
  fontHoverColor?: string;
}

const Paragraph = ({ children, fontColor, fontFamily, fontHoverColor, fontSize }: ParagraphProps) => {
  return (
    <StyledParagraph
      $fontColor={fontColor}
      $fontFamily={fontFamily}
      $fontHoverColor={fontHoverColor}
      $fontSize={fontSize}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
