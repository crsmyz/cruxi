import React from 'react';
// interfaces
import { FooterProps } from './Footer.interface';
// styles
import { StyledFooter, StyledSpan } from './StyledFooter';

export const Footer = (props: FooterProps) => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <div>&copy; Cruxi {currentYear} <StyledSpan>
        {props.content}
        </StyledSpan>
      </div>
    </StyledFooter>
  );
}
