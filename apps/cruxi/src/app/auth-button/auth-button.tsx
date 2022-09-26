// src/components/authentication-button.js

import React from 'react';

import LoginButton from '../login/login';
import Logout from '../logout/logout';

import { useAuth0 } from '@auth0/auth0-react';

const AuthButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <Logout /> : <LoginButton />;
};

export default AuthButton;