import React from 'react';
// interfaces
// import { SplashScreenPageProps } from './SplashScreenPage.interface';
// styles
import { StyledSplashScreenPage, StyledSplashWrapper, SplashHeader, SplashBody } from './StyledSplashScreenPage';
import SplashScreen from '../components/SplashScreen/SplashScreen';
import Button from '../components/Button/Button';
import { useAuth0 } from '@auth0/auth0-react';


const SplashScreenPage: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <SplashScreen>
      <StyledSplashScreenPage>
        <StyledSplashWrapper>
          <SplashHeader>Welcome to Cruxi</SplashHeader>
          <SplashBody>Cruxi is a climbing app that helps make you you a better climber. You can assess your current status as a climber. Track exercises, see your progress, and progress to your goals. Sign up now to see how Cruxi can make you a better climber!</SplashBody>
          <Button buttonClickHandler={() => loginWithRedirect({
          screen_hint: 'signup',
          })} buttonName='Sign Up'/>
        </StyledSplashWrapper>
      </StyledSplashScreenPage>
    </SplashScreen>
  );
}

export default SplashScreenPage;
