import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavItemProps {
  title: any;
  hrefProp: any;
  clickHandler: any;
}

const StyledNavItem = styled.div`
  margin: 1rem;
  line-height: 2.625rem;
`;

const StyleAnchor = styled.a`
  color: #3D3837;
  text-decoration: none;
  font-family: "Rubik", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
`;

export function NavItem(props: NavItemProps) {
  return (
    <StyledNavItem>
      <StyleAnchor onClick={props.clickHandler} href={props.hrefProp}>{props.title}</StyleAnchor>
    </StyledNavItem>
  );
}

export default NavItem;
