import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-sayjfnuo1jlqnc7n.us.auth0.com"
    clientId="o5XwnSGI36rMkE6Ni3ozyTZ6X7WDXgSg"
    authorizationParams={{
      redirect_uri: window.location.profile
    }}
  >
    <App />
  </Auth0Provider>,
);