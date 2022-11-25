import styled from 'styled-components';

export const StyledSplashScreen = styled.section`
  display: flex;
  background-image: url('./../../assets/images/yosemite5.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 86.45vh;
`;

export const StyledSplashScreenPage = styled.div`
  color: #3D3837;
`;

export const StyledSplashWrapper = styled.div`
  margin: 10rem 25rem 10rem 25rem;
  padding: 5rem 5rem 10rem 5rem;
  background-color: #d3c9c6d3;
  
  -webkit-clip-path: polygon(61% 13%, 76% 25%, 89% 5%, 97% 39%, 85% 84%, 35% 78%, 21% 92%, 0% 67%, 2% 28%,13% -38%, 33% 8%);
  clip-path: polygon(61% 13%, 76% 25%, 89% 5%, 97% 39%, 85% 84%, 35% 78%, 21% 92%, 0% 67%, 2% 28%,13% -38%, 33% 8%);
`;

export const SplashHeader = styled.header`
  font-size: 3.5rem;
  font-weight: 700;
`;
export const SplashBody = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
`;