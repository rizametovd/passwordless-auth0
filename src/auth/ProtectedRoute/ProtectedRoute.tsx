import { withAuthenticationRequired } from '@auth0/auth0-react';
import React, { ComponentType } from 'react';
import Loader from '../../components/uikit/Loader/Loader';

interface IProtectedRouteProps {
  component: ComponentType;
}

export const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Loader />,
  });

  return <Component />;
};
