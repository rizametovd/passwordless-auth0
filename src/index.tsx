import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Auth0ProviderWithHistory>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
        
      </Auth0ProviderWithHistory>
    </React.StrictMode>
  </BrowserRouter>
);