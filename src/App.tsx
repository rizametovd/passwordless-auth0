// import { useAuth0 } from '@auth0/auth0-react';
import { useRoutes } from 'react-router-dom';
import { ProtectedRoute } from './auth/ProtectedRoute/ProtectedRoute';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import UsersPage from './pages/UsersPage/UsersPage';

const App: React.FC = () => {
  // console.log('useAuth0:', useAuth0());

  console.log('1')
  console.log('2')
  console.log('3')

  const routes = useRoutes([
    {
      path: '/',
      element: <ProtectedRoute component={HomePage} />,
      children: [
        {
          path: '/profile',
          element: <ProtectedRoute component={ProfilePage} />,
        },
        {
          path: '/users',
          element: <ProtectedRoute component={UsersPage} />,
        },
      ],
    },
  ]);

  return <div>{routes}</div>;
};

export default App;
