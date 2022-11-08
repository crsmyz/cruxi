import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
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
// firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
// environment
import { environment } from './../environments/environment';

const firebaseApp = firebase.initializeApp(environment);
const auth: any = firebase.auth();
const firestore: any = firebase.firestore();

export const App = () => {
  const [user] = useAuthState(auth);
  if (isLoading) return <Loading />;
  return (
    <StyledApp>
      <Layout>
      <div className="wrapper">
          <Routes>
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
