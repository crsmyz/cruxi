import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard/dashboard';
import Login from './login/login';
import LoginButton from './login/login';
import Logout from './logout/logout';
import { useAuth0 } from '@auth0/auth0-react';
import ProtectedRoute from "./protected-route/protected-route";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Home from './home/home';
import SignupButton from './sign-up/sign-up';
import AuthNav from './auth-nav/auth-nav';
import Navbar from './Navbar/Navbar';
import { APP_NAME } from './Constants/AppConstants';
import Button from './Button/Button';
import SplashScreen from './Splash-screen/Splash-screen';
import Footer from './Footer/Footer';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Rubik", sans-serif;
  }
`;
const StyledApp = styled.div``;
const StyledNavBrand = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Rubik", sans-serif;
  font-weight: 300;
`;
const StyledSplashWrapper = styled.div`
  margin: 10rem 25rem 10rem 25rem;
  padding: 5rem;
  border: 1px solid black;
`;
const StyledNavButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
`;
const SplashHeader = styled.header`
  font-size: 3.5rem;
  font-weight: 700;
`;
const SplashBody = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
`;

export function App() {
  const {isLoading} = useAuth0();
  
  if (isLoading) {
    return <div>LOADING</div>;
  }

  return (
    <StyledApp>
      <Navbar>
        <StyledNavBrand>
          <img src='./../assets/images/carabiner.png' height='60px'  alt='Cruxi-Logo'/>
          <h1>{APP_NAME}</h1>
        </StyledNavBrand>
        <StyledNavButtonLayout>
          <Button buttonClickHandler={console.log('Sign Up')} buttonName='Sign Up'/>
          <Button buttonClickHandler={console.log('Log In')} buttonName='Log In'/>
          {/* <AuthNav/>
          <SignupButton/> */}
        </StyledNavButtonLayout>
      </Navbar>
      <SplashScreen>
        <StyledSplashWrapper>
          <SplashHeader>Welcome to Cruxi</SplashHeader>
          <SplashBody>Cruxi is a climbing app that helps make you you a better climber. You can assess your current status as a climber. Track exercises, see your progress, and progress to your goals. Sign up now to see how Cruxi can make you a better climber!</SplashBody>
          <Button buttonClickHandler={console.log('Sign Up')} buttonName='Sign Up'/>
        </StyledSplashWrapper>
      </SplashScreen>
      <Footer/>
      <div className="wrapper">
          <Routes>
            <Route path="/dashboard" element={<ProtectedRoute path='/dashboard' component={Dashboard} />} />
          </Routes>
      </div>
    </StyledApp>
  );
}

export default App;
