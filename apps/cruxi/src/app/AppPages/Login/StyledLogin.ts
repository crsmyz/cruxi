import styled from 'styled-components';

export const StyledAuthPages = styled.div`
display: flex;
align-items: center;
justify-content: center;

background-image: url('./../../assets/images/flatirons.jpg');
background-size: cover;
background-repeat: no-repeat;
background-position: center;
width: 100%;
height: 95.2vh;
`;

export const StyledLogin = styled.div`
  color: #3D3837;
  margin: 2rem 4rem 2rem 4rem;
  width: 100%;
  max-width: 300px;
  background-color: #d3c9c6d3;
  /* border-radius: 0.35rem; */
  
  -webkit-clip-path: polygon(18% 6%,96% -2%,86% 28%,106% 82%,85% 95%,-3% 108%,4% 64%,-13% -2%);
  clip-path: polygon(18% 6%,96% -2%,86% 28%,106% 82%,85% 95%,-3% 108%,4% 64%,-13% -2%);
`;

export const StyledCard = styled.div`
  padding: 2rem 2rem 2rem 2rem;
`;

export const StyledUtilLink = styled.div`
  margin: 1rem 1rem 1rem 0rem;
  padding: 0rem 1rem 0.5rem 0rem;
  text-decoration: none;
`;

export const HeaderAppName = styled.h1`
  font-family: "Rubik", sans-serif;
  font-weight: 300;
  display: block;
  font-size: 2.25rem;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

export const StyledNavBrand = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-family: "Rubik", sans-serif;
  font-weight: 300;
`;