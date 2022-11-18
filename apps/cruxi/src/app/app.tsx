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
            <Route path='/' element={<ProtectedRoute/>}>
              <Route path='/dashboard' element={<Dashboard/>}/>
            </Route>
            <Route path='/' element={<ProtectedRoute/>}>
              <Route path="/profile" element={<Profile/>}/>
            </Route>
            <Route path='/' element={<ProtectedRoute/>}>
              <Route path='/logworkout' element={<LogWorkout/>}/>
            </Route>
            <Route path='/' element={<ProtectedRoute/>}>
              <Route path='/' element={<WorkoutHistory/>}/>
            </Route>
          </Routes>
      </div>
      </Layout>
    </StyledApp>
  );
}

export default App;
