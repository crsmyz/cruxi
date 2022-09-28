import React from 'react';
import { StyledNavbar, StyledNav} from './StyledNavBar';
import { NavbarProps } from './NavbarProps';

const Navbar: any = (props: any) => {
  return (
    <StyledNavbar>
      <StyledNav>
        {props.children}
      </StyledNav>
    </StyledNavbar>
  );
}

export default Navbar;
