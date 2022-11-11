import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
// util
import SplashScreenPage from './SplashScreenPage/SplashScreenPage';
import Layout from './Layout/Layout';
import Loading from './components/Loading/Loading';
// children
import Dashboard from './AppPages/Dashboard/Dashboard';
import WorkoutHistory from './AppPages/WorkoutHistory/WorkoutHistory';
import LogWorkout from './AppPages/LogWorkout/LogWorkout';
import Profile from './AppPages/Profile/Profile';
// styles
import { StyledApp } from './StyledApp';
// firebase hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Login from './login/login';
import Signup from './signup/signup';
import ForgotPassword from './forgot-password/forgot-password';

const App: React.FC = () => {
  return (
    <StyledApp>
      <Layout>
      <div className="wrapper">
          <Routes>
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
            <Route path="/" element={<SplashScreenPage/>}/>
            <Route path="/logWorkout" element={<ProtectedRoute component={LogWorkout} />} />
            <Route path="/workoutHistory" element={<ProtectedRoute component={WorkoutHistory} />} />
            <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
            <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
          </Routes>
      </div>
      </Layout>
    </StyledApp>
  );
}

export default App;
