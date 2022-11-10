import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    console.log('appState:', appState)
    console.log('window.location.pathname:', window.location.pathname)
    // navigate(appState?.returnTo || window.location.pathname);
    navigate('/auth');
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
