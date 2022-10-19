import React from 'react';
// interfaces
import { FooterProps } from './Footer.interface';
// styles
import { StyledFooter, StyledSpan } from './StyledFooter';

export function Footer(props: FooterProps) {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <div>&copy; Cruxi {currentYear} <StyledSpan>
        Climbing is an inherently dangerous sport and should be performed only with the proper instruction and supervision of an experienced climber. We assume no responsibility for any injuries incurred by the user!
        </StyledSpan>
      </div>
    </StyledFooter>
  );
}

export default Footer;