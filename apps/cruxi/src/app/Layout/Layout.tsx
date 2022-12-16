import React, { useState } from 'react';
import { useNavigate, Outlet, NavigateFunction } from 'react-router-dom';

// styles
import {
  StyledLayout,
  StyledNavBrand,
  StyledNavButtonLayout,
  HeaderAppName,
} from './StyledLayout';
import Navbar from '../components/Navbar/Navbar';
import NavItem from '../components/NavItem/NavItem';
import Footer from '../components/Footer/Footer';

import { APP_NAME } from './../Constants/AppConstants';

import { useAuth } from '../Context/AuthContext';

const Layout: React.FC = () => {
  const [error, setError] = useState<string>('');

  const { currentUser, logout } = useAuth();
  const navigate: NavigateFunction = useNavigate();

  const handleLogout = async () => {
    setError('');
    try {
      await logout();
      navigate('/login');
    } catch {
      setError('Failed to log out');
    }
  };

  const NavMenuNoAuth: JSX.Element[] = [
    <NavItem clickHandler="" hrefProp="/login" title="Login" />,
    <NavItem clickHandler="" hrefProp="/signup" title="Sign Up" />,
  ];

  const NavMenuAuth: JSX.Element[] = [
    <NavItem hrefProp="/dashboard" title="Dashboard" />,
    <NavItem hrefProp="/logworkout" title="Log Workout" />,
    <NavItem hrefProp="/profile" title="Profile" />,
    <NavItem clickHandler={handleLogout} hrefProp="" title="Logout" />,
  ];

  return (
    <StyledLayout>
      <Navbar>
        <StyledNavBrand>
          <img
            src="./../assets/images/carabiner.png"
            height="60px"
            alt="Cruxi-Logo"
          />
          <HeaderAppName>{APP_NAME}</HeaderAppName>
        </StyledNavBrand>
        <StyledNavButtonLayout>
          {currentUser &&
            NavMenuAuth.map((menuItem: JSX.Element, index: number) => (
              <span key={index}>{menuItem}</span>
            ))}
          {!currentUser &&
            NavMenuNoAuth.map((menuItem: JSX.Element, index: number) => (
              <span key={index}>{menuItem}</span>
            ))}
        </StyledNavButtonLayout>
      </Navbar>
      <Outlet />
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
