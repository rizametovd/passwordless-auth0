import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { LogoutButton } from '../../components/LogoutButton/LogoutButton';

const HomePage: React.FC = () => {
  return (
    <div>
      <Stack
        sx={{
          width: '600px',
          margin: '200px auto 0',
          background: 'lightblue',
          padding: '40px',
        }}
      >
        <LogoutButton />

        <Stack direction={'row'} gap={'20px'}>
          <Link to={'/profile'}>Профиль</Link>
          <Link to={'/users'}>Юзеры</Link>
        </Stack>
        <Outlet />
      </Stack>
    </div>
  );
};

export default HomePage;
