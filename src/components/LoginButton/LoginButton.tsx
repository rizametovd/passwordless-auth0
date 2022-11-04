import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button variant="contained" className="btn btn-primary btn-block" onClick={() => loginWithRedirect()}>
      Войти
    </Button>
  );
};

export default LoginButton;
