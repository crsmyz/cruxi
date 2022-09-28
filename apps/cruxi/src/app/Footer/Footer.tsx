import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FooterProps {}

const StyledFooter = styled.footer`
  background-color: #3D3837;
  color: #FFFFFF;
  font-weight: 800;
  font-size: 1rem;
  padding: 1rem;
`;

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <div>&copy; Cruxi {currentYear}</div>
    </StyledFooter>
  );
}

export default Footer;