import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SplashScreenProps {

}

const StyledSplashScreen = styled.section`
  display: flex;
  background-image: url('./../../assets/images/yosemite1.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 87vh;
`;

export function SplashScreen(props: any) {
  return (
    <StyledSplashScreen>
      {props.children}
    </StyledSplashScreen>
  );
}

export default SplashScreen;
