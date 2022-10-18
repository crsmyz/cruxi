import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SplashScreenProps {

}

const StyledSplashScreen = styled.section`
  display: flex;
  background-image: url('./../../assets/images/yosemite1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 86.45vh;
`;

export function SplashScreen(props: any) {
  return (
    <StyledSplashScreen>
      {props.children}
    </StyledSplashScreen>
  );
}

export default SplashScreen;
