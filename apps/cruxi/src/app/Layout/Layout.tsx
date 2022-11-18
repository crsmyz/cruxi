

import React, { useEffect, useState } from 'react';
// interfaces
import { LayoutProps } from './Layout.interface';
// styles
import { StyledLayout, StyledNavBrand, StyledNavButtonLayout, HeaderAppName} from './StyledLayout'
import Navbar from '../components/Navbar/Navbar';
import NavItem from '../components/NavItem/NavItem';
import { APP_NAME } from './../Constants/AppConstants';
import Footer from '../components/Footer/Footer';
import { useNavigate, redirect } from "react-router-dom"
import { useAuth } from '../Context/AuthContext';


const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
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

  // const LoginLogout: JSX.Element = '' ? <NavItem clickHandler={navigate('/login')} hrefProp='' title='Login'/> :
  // <NavItem clickHandler={handleLogout} hrefProp='' title='Logout'/>;
  const NavMenuNoAuth: JSX.Element[] = [
    <NavItem clickHandler='' hrefProp='/login' title='Login'/>,
    <NavItem clickHandler='' hrefProp='/signup' title='Sign Up'/>,
  ];

  const NavMenuAuth: JSX.Element[] = [
    <NavItem hrefProp='/dashboard' title='Dashboard'/>,
    <NavItem hrefProp='/logworkout' title='Log Workout'/>,
    <NavItem hrefProp='/profile' title='Profile'/>,
    <NavItem clickHandler={handleLogout} hrefProp='' title='Logout'/>,
  ];

  

  return (
    <StyledLayout>
      <Navbar>
        <StyledNavBrand>
          <img src='./../assets/images/carabiner.png' height='60px'  alt='Cruxi-Logo'/>
          <HeaderAppName>{APP_NAME}</HeaderAppName>
        </StyledNavBrand>
        <StyledNavButtonLayout>
          {currentUser && NavMenuAuth.map((menuItem: any, index: number) => <span key={index}>{menuItem}</span>)}
          {!currentUser && NavMenuNoAuth.map((menuItem: any, index: number) => <span key={index}>{menuItem}</span>)}
        </StyledNavButtonLayout>
      </Navbar>
      {props.children}
      <Footer/>
    </StyledLayout>
  );
}

export default Layout;
