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
// import Button from './Button/Button';
// import SplashScreen from './Splash-screen/Splash-screen';
import Footer from './Footer/Footer';
import NavItem from './NavItem/NavItem';
import SplashScreenPage from './splash-screen-page/splash-screen-page';


const GlobalStyle = createGlobalStyle`


  body {
    font-family: "Rubik", sans-serif !important;
  }
`;
const StyledApp = styled.div``;
const StyledNavBrand = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Rubik", sans-serif;
  font-weight: 300;
`;
// const StyledSplashWrapper = styled.div`
//   margin: 10rem 25rem 10rem 25rem;
//   padding: 5rem;
//   background-color: #d3c9c6d3;
//   -webkit-clip-path: polygon(6% -17%,110% 30%,85% 75%,-2% 75%);
//   clip-path: polygon(6% -17%,110% 30%,85% 75%,-2% 75%);
// `;
// const SplashHeader = styled.header`
//   font-size: 3.5rem;
//   font-weight: 700;
// `;
// const SplashBody = styled.p`
//   font-size: 1.5rem;
//   font-weight: 400;
// `;


const StyledNavButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
`;


const HeaderAppName = styled.h1`
  font-family: "Rubik", sans-serif;
  font-weight: 300;
  display: block;
  font-size: 1.85rem;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

export function App() {
  const {isLoading} = useAuth0();
  const { loginWithRedirect } = useAuth0();
  
  if (isLoading) {
    return <div>LOADING</div>;
  }

  return (
    <StyledApp>
      <Navbar>
        <StyledNavBrand>
          <img src='./../assets/images/carabiner.png' height='60px'  alt='Cruxi-Logo'/>
          <HeaderAppName>{APP_NAME}</HeaderAppName>
        </StyledNavBrand>
        <StyledNavButtonLayout>
          <NavItem clickHandler={() => loginWithRedirect({
          screen_hint: 'signup',
        })} hrefProp='' title='Sign Up'/>
          <NavItem clickHandler={loginWithRedirect} hrefProp='' title='Login'/>
          <AuthNav/>
          {/* <SignupButton/> */}
        </StyledNavButtonLayout>
      </Navbar>
      <div className="wrapper">
          <Routes>
            <Route path="/" element={<SplashScreenPage/>}/>
            <Route path="/dashboard" element={<ProtectedRoute path='/dashboard' component={Dashboard} />} />
          </Routes>
      </div>
      <Footer/>
    </StyledApp>
  );
}

export default App;
