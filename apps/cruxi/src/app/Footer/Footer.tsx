import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FooterProps {}

const StyledFooter = styled.footer`
  background-color: #3D3837;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 0.75rem;
  padding: 1rem;
  font-family: "Rubik", sans-serif;
`;

const StyleSpan = styled.span`
  padding-left: 1rem;
  font-style: italic;
`;

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <div>&copy; Cruxi {currentYear} <StyleSpan>Climbing is an inherently dangerous sport and should be performed only with the proper instruction and supervision of an experienced climber. We assume no responsibility for any injuries incurred by the user!</StyleSpan></div>
    </StyledFooter>
  );
}

export default Footer;