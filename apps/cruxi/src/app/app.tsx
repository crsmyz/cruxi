import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
// util
import SplashScreenPage from './SplashScreenPage/SplashScreenPage';
import Layout from './Layout/Layout';
import Loading from './components/Loading/Loading';
// children
import Dashboard from './Dashboard/Dashboard';
import Profile from './Profile/Profile';
// styles
import { StyledApp } from './StyledApp';


export const App = () => {
  const {isLoading} = useAuth0();
  if (isLoading) return <Loading />;

  return (
    <StyledApp>
      <Layout>
      <div className="wrapper">
          <Routes>
            <Route path="/" element={<SplashScreenPage/>}/>
            <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
            <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
          </Routes>
      </div>
      </Layout>
    </StyledApp>
  );
}

export default App;
