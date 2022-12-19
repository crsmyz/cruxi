import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

// util
import CruxiSplashScreenPage from './AppPages/SplashScreenPage/SplashScreenPage';
import Layout from './Layout/Layout';
import Loading from './Components/Loading/Loading';

// children
import Dashboard from './AppPages/Dashboard/Dashboard';
import LogWorkout from './AppPages/LogWorkout/LogWorkout';
import Profile from './AppPages/Profile/Profile';

// styles
import { StyledApp } from './StyledApp';

import Login from './AppPages/Login/Login';
import Signup from './AppPages/Signup/Signup';
import ForgotPassword from './AppPages/ForgotPassword/ForgotPassword';
import Footer from './Components/Footer/Footer';
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
            <Route path='/' element={<CruxiSplashScreenPage/>}/>
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
          </Route>
        </Routes>
      </div>
    </StyledApp>
  );
}

export default App;
