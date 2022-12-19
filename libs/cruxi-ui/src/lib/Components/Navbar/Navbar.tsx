import React from 'react';
//interfaces
import { NavbarProps } from './NavbarProps';
// styles
import { StyledNavbar, StyledNav} from './StyledNavBar';

export const Navbar = (props: NavbarProps) => {
  return (
    <StyledNavbar>
      <StyledNav>
        {props.children}
      </StyledNav>
    </StyledNavbar>
  );
}
