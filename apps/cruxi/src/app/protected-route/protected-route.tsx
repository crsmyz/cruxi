// src/auth/protected-route.js

import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedRoute = ({ component, ...args }: any) => {
  const Cp = withAuthenticationRequired(component);
  return <Cp {...args} />
}
  

export default ProtectedRoute;