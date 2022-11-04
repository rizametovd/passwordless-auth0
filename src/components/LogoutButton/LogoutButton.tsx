import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import React from 'react';

export const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      returnTo: window.location.origin,
    });
  };

  return (
    <Button onClick={handleLogout} sx={{ alignSelf: 'flex-end' }} variant="contained">
      Выйти
    </Button>
  );
};
