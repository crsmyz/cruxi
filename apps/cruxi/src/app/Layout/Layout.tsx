

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// interfaces
import { LayoutProps } from './Layout.interface';
// styles
import { StyledLayout, StyledNavBrand, StyledNavButtonLayout, HeaderAppName} from './StyledLayout'
import Navbar from '../components/Navbar/Navbar';
import NavItem from '../components/NavItem/NavItem';
import { APP_NAME } from './../Constants/AppConstants';
import Footer from '../components/Footer/Footer';

const Layout = (props: LayoutProps) => {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();
  const { logout } = useAuth0();

  const ShowSignUp = isAuthenticated ? '' : <NavItem clickHandler={() => loginWithRedirect({ screen_hint: 'signup'})} hrefProp='' title='Sign Up'/>;
  const ShowLoginOrLogout = isAuthenticated ? <NavItem clickHandler={() => logout({returnTo: window.location.origin,})} hrefProp='' title='Logout'/> : <NavItem clickHandler={loginWithRedirect} hrefProp='' title='Login'/>;
  const ShowDashboard = isAuthenticated ? <NavItem hrefProp='/dashboard' title='Dashboard'/> : '';
  const ShowProfile = isAuthenticated ? <NavItem hrefProp='/profile' title='Profile'/> : '';

  return (
    <StyledLayout>
      <Navbar>
        <StyledNavBrand>
          <img src='./../assets/images/carabiner.png' height='60px'  alt='Cruxi-Logo'/>
          <HeaderAppName>{APP_NAME}</HeaderAppName>
        </StyledNavBrand>
        <StyledNavButtonLayout>
          {ShowDashboard}
          {ShowProfile}
          {ShowSignUp}
          {ShowLoginOrLogout}
        </StyledNavButtonLayout>
      </Navbar>
      {props.children}
      <Footer/>
    </StyledLayout>
  );
}

export default Layout;
