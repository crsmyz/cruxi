// react
import React from 'react';
import { Link } from 'react-router-dom';
// components
import { SplashScreen, Button } from '@cruxi/cruxi-ui'
// constants
import { APP_SPLASH_PAGE_TITLE } from './../../Constants/AppConstants';
import { APP_SPLASH_PAGE_CONTENT } from './../../Constants/AppConstants';

const CruxiSplashScreenPage: React.FC = () => {
  const header: string = APP_SPLASH_PAGE_TITLE;
  const body: string = APP_SPLASH_PAGE_CONTENT;
  const button = (
    <Link to="/signup">
      <Button buttonName="Sign Up" />
    </Link>
  );
  return <SplashScreen header={header} body={body} button={button} />;
};

export default CruxiSplashScreenPage;
