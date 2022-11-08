// src/auth/protected-route.js

import React from 'react';
// interfaces
import { ProtectedRouteProps } from './ProtectedRoute.interface';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const ProtectedRoute = ({ component, ...args }: ProtectedRouteProps) => {
  const Cp = withAuthenticationRequired(component);
  return <Cp {...args} />
}

export default ProtectedRoute;