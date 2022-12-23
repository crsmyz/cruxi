// src/auth/protected-route.js

import React from 'react';
// interfaces
import { Route, Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = ({ component: Component, path, currentUser }: any) => {
  return (currentUser ? <Outlet/> : <Navigate to="/login" />)
}
