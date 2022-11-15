

import React, { useState } from 'react';
// interfaces
import { LayoutProps } from './Layout.interface';
// styles
import { StyledLayout, StyledNavBrand, StyledNavButtonLayout, HeaderAppName} from './StyledLayout'
import Navbar from '../components/Navbar/Navbar';
import NavItem from '../components/NavItem/NavItem';
import { APP_NAME } from './../Constants/AppConstants';
import Footer from '../components/Footer/Footer';
import { useNavigate } from "react-router-dom"
import { useAuth } from '../Context/AuthContext';


const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const [error, setError] = useState("")
  const { logout } = useAuth()
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("")
    try {
      await logout()
      navigate("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  const navToSignUp = () => {
    try {
      navigate('/signup')
    } catch {
      setError("signup error")
    }
  }

  // const LoginLogout: JSX.Element = '' ? <NavItem clickHandler={navigate('/login')} hrefProp='' title='Login'/> :
  // <NavItem clickHandler={handleLogout} hrefProp='' title='Logout'/>;
  const NavMenu: JSX.Element[] = [
    <NavItem clickHandler={navigate('/login')} hrefProp='' title='Login'/>,
    <NavItem clickHandler={handleLogout} hrefProp='' title='Logout'/>,
    <NavItem clickHandler={navToSignUp} hrefProp='' title='Sign Up'/>,
    <NavItem hrefProp='/dashboard' title='Dashboard'/>,
    <NavItem hrefProp='/profile' title='Profile'/>
  ];



  // const ShowSignUp = isAuthenticated ? '' : <NavItem clickHandler={() => loginWithRedirect({ screen_hint: 'signup'})} hrefProp='' title='Sign Up'/>;
  // const ShowLoginOrLogout = isAuthenticated ? <NavItem clickHandler={() => logout({returnTo: window.location.origin,})} hrefProp='' title='Logout'/> : <NavItem clickHandler={loginWithRedirect} hrefProp='' title='Login'/>;
  // const ShowDashboard = isAuthenticated ? <NavItem hrefProp='/dashboard' title='Dashboard'/> : '';
  // const ShowProfile = isAuthenticated ? <NavItem hrefProp='/profile' title='Profile'/> : '';

  return (
    <StyledLayout>
      <Navbar>
        <StyledNavBrand>
          <img src='./../assets/images/carabiner.png' height='60px'  alt='Cruxi-Logo'/>
          <HeaderAppName>{APP_NAME}</HeaderAppName>
        </StyledNavBrand>
        <StyledNavButtonLayout>
          {NavMenu.map((menuItem: any, index: number) => <span key={index}>{menuItem}</span>)}
        </StyledNavButtonLayout>
      </Navbar>
      {props.children}
      <Footer/>
    </StyledLayout>
  );
}

export default Layout;
