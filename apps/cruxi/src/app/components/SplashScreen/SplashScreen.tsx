
import React from 'react';
// interfaces
import { SplashScreenProps } from './SplashScreen.interface';
// styles
import { StyledSplashScreen } from './StyledSplashScreen';

export const SplashScreen = (props: SplashScreenProps) => {
  return (
    <StyledSplashScreen>
      {props.children}
    </StyledSplashScreen>
  );
}

export default SplashScreen;
