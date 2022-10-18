import styled from 'styled-components';

import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import AuthNav from './../auth-nav/auth-nav';
import Navbar from './../Navbar/Navbar';
import { APP_NAME } from './../Constants/AppConstants';
import Footer from './../Footer/Footer';
import NavItem from './../NavItem/NavItem';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: any;
}

const StyledLayout = styled.div`
  color: pink;
`;

const StyledNavBrand = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Rubik", sans-serif;
  font-weight: 300;
`;

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

export function Layout(props: LayoutProps) {
  const { loginWithRedirect } = useAuth0();
  return (
    <StyledLayout>
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
      {props.children}
      <Footer/>
    </StyledLayout>
  );
}

export default Layout;
