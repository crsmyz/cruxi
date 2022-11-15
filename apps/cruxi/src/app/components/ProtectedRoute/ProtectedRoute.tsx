// src/auth/protected-route.js

import React from 'react';
// interfaces
import { Route, Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./../../Context/AuthContext"

const ProtectedRoute = ({ component: Component, path }: any) => {
  const { currentUser } = useAuth()
  return (currentUser ? <Outlet/> : <Navigate to="/login" />)
}

export default ProtectedRoute;
