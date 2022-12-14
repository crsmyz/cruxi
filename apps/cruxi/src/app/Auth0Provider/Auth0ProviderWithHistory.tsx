// src/auth/auth0-provider-with-history.js

import React from 'react';
import { useNavigate  } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { environment } from '../../environments/environment';

const Auth0ProviderWithHistory = ({ children }: any) => {
  const domain = environment.REACT_APP_AUTH0_DOMAIN;
  const clientId = environment.REACT_APP_AUTH0_CLIENT_ID;

  const navigate = useNavigate ();

  const onRedirectCallback = (appState: any) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain || ''}
      clientId={clientId || ''}
      redirectUri={window.location.origin}
      onRedirectCallback={() => onRedirectCallback({returnTo: '/dashboard'})}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;