import styled from 'styled-components';
import SplashScreen from './../Splash-screen/Splash-screen';
import Button from './../Button/Button';
import { useAuth0 } from '@auth0/auth0-react';

/* eslint-disable-next-line */
export interface SplashScreenPageProps {}

const StyledSplashScreenPage = styled.div`
  color: #3D3837;
`;
const StyledSplashWrapper = styled.div`
  margin: 10rem 25rem 10rem 25rem;
  padding: 5rem;
  background-color: #d3c9c6d3;
  -webkit-clip-path: polygon(6% -17%,110% 30%,85% 75%,-2% 75%);
  clip-path: polygon(6% -17%,110% 30%,85% 75%,-2% 75%);
`;
const SplashHeader = styled.header`
  font-size: 3.5rem;
  font-weight: 700;
`;
const SplashBody = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
`;

export function SplashScreenPage(props: SplashScreenPageProps) {
  const { loginWithRedirect } = useAuth0();
  return (
    <StyledSplashScreenPage>
      <SplashScreen>
        <StyledSplashWrapper>
          <SplashHeader>Welcome to Cruxi</SplashHeader>
          <SplashBody>Cruxi is a climbing app that helps make you you a better climber. You can assess your current status as a climber. Track exercises, see your progress, and progress to your goals. Sign up now to see how Cruxi can make you a better climber!</SplashBody>
          <Button buttonClickHandler={() => loginWithRedirect({
          screen_hint: 'signup',
        })} buttonName='Sign Up'/>
        </StyledSplashWrapper>
      </SplashScreen>
    </StyledSplashScreenPage>
  );
}

export default SplashScreenPage;
