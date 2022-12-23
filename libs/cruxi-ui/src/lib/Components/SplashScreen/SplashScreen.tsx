import React from 'react';
// interfaces
import { SplashScreenProps } from './SplashScreen.interface';
// styles
import {
  StyledSplashScreen,
  StyledSplashScreenPage,
  StyledSplashWrapper,
  SplashHeader,
  SplashBody,
} from './StyledSplashScreen';

export const SplashScreen = (props: SplashScreenProps) => {
  return (
    <StyledSplashScreen>
      <StyledSplashScreenPage>
        <StyledSplashWrapper>
          <SplashHeader>{props.header}</SplashHeader>
          <SplashBody>{props.body}</SplashBody>
          {props.button}
        </StyledSplashWrapper>
      </StyledSplashScreenPage>
    </StyledSplashScreen>
  );
};
