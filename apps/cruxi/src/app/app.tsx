import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

// util
import SplashScreenPage from './AppPages/SplashScreenPage/SplashScreenPage';
import Layout from './Layout/Layout';
import Loading from './components/Loading/Loading';

// children
import Dashboard from './AppPages/Dashboard/Dashboard';
import WorkoutHistory from './AppPages/WorkoutHistory/WorkoutHistory';
import LogWorkout from './AppPages/LogWorkout/LogWorkout';
import Profile from './AppPages/Profile/Profile';

// styles
import { StyledApp } from './StyledApp';

import Login from './Login/Login';
import Signup from './Signup/Signup';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import Footer from './components/Footer/Footer';
import Activity from './AppPages/Activity/Activity';

const UnAuthenticatedLayout: React.FC = () => { 
  return <>
    <Outlet/>
    <Footer/>
  </>
}

const App: React.FC = () => {
  return (
    <StyledApp>
      <div className="wrapper">
        <Routes>
          <Route element={<UnAuthenticatedLayout/>} >
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
          </Route>
          <Route element={<Layout/>} >
            <Route path='/' element={<SplashScreenPage/>}/>
            <Route path='/' element={<ProtectedRoute/>}>
              <Route path='/dashboard' element={<Dashboard/>}/>
            </Route>
            <Route path='/' element={<ProtectedRoute/>}>
              <Route path='/activity/:id' element={<Activity/>}/>
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
          </Route>
        </Routes>
      </div>
    </StyledApp>
  );
}

export default App;
