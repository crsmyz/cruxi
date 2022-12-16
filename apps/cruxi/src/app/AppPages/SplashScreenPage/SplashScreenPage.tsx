import React from 'react';
import { Link } from 'react-router-dom';

// styles
import {
  StyledSplashScreenPage,
  StyledSplashWrapper,
  SplashHeader,
  SplashBody,
} from './StyledSplashScreenPage';

import SplashScreen from '../../Components/SplashScreen/SplashScreen';
import Button from '../../Components/Button/Button';

const SplashScreenPage: React.FC = () => {
  const header = 'Welcome to Cruxi';
  const body = `Cruxi is a climbing app that helps make you you a better climber.
  You can assess your current status as a climber. Track exercises,
  see your progress, and progress to your goals. Sign up now to see
  how Cruxi can make you a better climber!`;
  const button = (
    <Link to="/signup">
      <Button buttonName="Sign Up" />
    </Link>
  );

  return <SplashScreen header={header} body={body} button={button} />;
};

export default SplashScreenPage;
