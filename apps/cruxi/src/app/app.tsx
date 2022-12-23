// react
import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
// interfaces
// ...
// styles
import { StyledApp } from './StyledApp';
// cruxi app components
import Dashboard from './AppPages/Dashboard/Dashboard';
import LogWorkout from './AppPages/LogWorkout/LogWorkout';
import Profile from './AppPages/Profile/Profile';
import Login from './AppPages/Login/Login';
import Signup from './AppPages/Signup/Signup';
import ForgotPassword from './AppPages/ForgotPassword/ForgotPassword';
import Activity from './AppPages/Activity/Activity';
import CruxiSplashScreenPage from './AppPages/SplashScreenPage/SplashScreenPage';
// layout
import Layout from './Layout/Layout';
// cruxi ui lib components
import { ProtectedRoute, Loading, Footer } from '@cruxi/cruxi-ui';
// context
import { useAuth } from './Context/AuthContext';
// constants
import { FOOTER_CONTENT } from './Constants/AppConstants';

const UnAuthenticatedLayout: React.FC = () => {
  return (
    <>
      <Outlet />
      <Footer content={FOOTER_CONTENT} />
    </>
  );
};

const App: React.FC = () => {
  const { currentUser } = useAuth();
  return (
    <StyledApp>
      <div className="wrapper">
        <Routes>
          <Route element={<UnAuthenticatedLayout />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/" element={<CruxiSplashScreenPage />} />
            <Route
              path="/"
              element={<ProtectedRoute currentUser={currentUser} />}
            >
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route
              path="/"
              element={<ProtectedRoute currentUser={currentUser} />}
            >
              <Route path="/activity/:id" element={<Activity />} />
            </Route>
            <Route
              path="/"
              element={<ProtectedRoute currentUser={currentUser} />}
            >
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route
              path="/"
              element={<ProtectedRoute currentUser={currentUser} />}
            >
              <Route path="/logworkout" element={<LogWorkout />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </StyledApp>
  );
};

export default App;
