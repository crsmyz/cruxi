import React from 'react';
import { Link } from 'react-router-dom';
// interfaces
import { NavItemProps } from './NavItemProps.interface';
// styles
import { StyledNavItem, StyleAnchor } from './StyledNavItem';

const NavItem = (props: NavItemProps) => {
  return (
    <StyledNavItem>
      <StyleAnchor>
        <Link onClick={props.clickHandler} to={props.hrefProp}>
          {props.title}
        </Link>
      </StyleAnchor>
    </StyledNavItem>
  );
}

export default NavItem;
