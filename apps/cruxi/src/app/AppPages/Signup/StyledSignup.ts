import styled from 'styled-components';

export const StyledAuthPages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url('./../../assets/images/mountain2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 95.2vh;
`;

export const HeaderAppName = styled.h1`
  font-family: 'Rubik', sans-serif;
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
  font-family: 'Rubik', sans-serif;
  font-weight: 300;
`;

export const StyledSignup = styled.div`
  color: #3d3837;
  margin: 2rem 4rem 2rem 4rem;
  width: 100%;
  max-width: 300px;
  background-color: #d3c9c6d3;

  -webkit-clip-path: polygon(
    7% 13%,
    52% 0%,
    104% 16%,
    89% 49%,
    96% 50%,
    104% 99%,
    52% 92%,
    16% 99%,
    -3% 90%,
    6% 62%,
    0% 41%,
    5% 23%
  );
  clip-path: polygon(
    7% 13%,
    52% 0%,
    104% 16%,
    89% 49%,
    96% 50%,
    104% 99%,
    52% 92%,
    16% 99%,
    -3% 90%,
    6% 62%,
    0% 41%,
    5% 23%
  );
`;

export const StyledCard = styled.div`
  padding: 2rem 2rem 2rem 2rem;
`;

export const StyledUtilLink = styled.div`
  margin: 1rem 1rem 1rem 0rem;
  padding: 0rem 1rem 0.5rem 0rem;
  text-decoration: none;
`;

export const StyledSpacingDiv = styled.div`
  margin: 1rem 1rem 1rem 0rem;
  padding: 0rem 1rem 0.5rem 0rem;
`;