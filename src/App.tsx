import { useRoutes } from 'react-router-dom';
import { ProtectedRoute } from './auth/ProtectedRoute/ProtectedRoute';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import UsersPage from './pages/UsersPage/UsersPage';
import Form from './components/Form/Form';

const App: React.FC = () => {


  console.log('2')

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
    {
      path: '/auth',
      element: <Form />,
    },
  ]);

  return <div>{routes}</div>;

  // return (
  //   <Form />
  // )
};

export default App;
