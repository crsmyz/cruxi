import React, { useState } from 'react';
import styled from 'styled-components';
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

const StyledApp = styled.div``;
const StyledNavBrand = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyledSplashWrapper = styled.div`
  margin: 5rem;
  padding: 3rem;
`;
const StyledNavButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
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
          <h1>Welcome to Cruxi</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
