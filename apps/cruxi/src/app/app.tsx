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

const StyledApp = styled.div`
  padding: 20px;
`;

export function App() {
  const {isLoading} = useAuth0();
  
  if (isLoading) {
    return <div>LOADING</div>;
  }

  return (
    <StyledApp>
      <div className="wrapper">
        <h1>Welcome to Cruxi!</h1>
          <AuthNav/>
          <SignupButton/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dashboard" element={<ProtectedRoute path='/dashboard' component={Dashboard} />} />
          </Routes>
      </div>
    </StyledApp>
  );
}

export default App;
