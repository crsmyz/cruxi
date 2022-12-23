import React from 'react';
import {
  StyledCard,
  HeaderAppName,
  StyledNavBrand,
} from './StyledAuthSplashScreen';
import { AuthSplashScreenProps } from './AuthSplashScreenProps.interface';
import styled from 'styled-components';

export const AuthSplashScreen: React.FC<AuthSplashScreenProps> = (
  props: AuthSplashScreenProps
) => {
  const StyledAuthSplashScreen = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${props.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 95.2vh;
  `;
  const StyledLogin = styled.div`
    color: #3d3837;
    margin: 2rem 4rem 2rem 4rem;
    width: 100%;
    max-width: 300px;
    background-color: #d3c9c6d3;
    -webkit-clip-path: polygon(${props.clipPath});
    clip-path: polygon(${props.clipPath});
  `;

  return (
    <StyledAuthSplashScreen>
      <StyledLogin>
        <StyledCard>
          <StyledNavBrand>
            <HeaderAppName>{props.appNameHeader}</HeaderAppName>
          </StyledNavBrand>
          <h2>{props.cardHeader}</h2>
          {props.bodyContent}
        </StyledCard>
      </StyledLogin>
    </StyledAuthSplashScreen>
  );
};
