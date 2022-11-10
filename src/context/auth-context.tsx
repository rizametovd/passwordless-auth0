import React, { useState } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token: string) => {},
  logout: () => {},
});

export const AuthContextProvider = (props: any) => {
  const [token, setToken] = useState('');
  const userIsLoggedIn = !!token;

  const handleLogin = (token: string) => {
    setToken(token);
  };

  const handleLogout = () => {
    setToken('');
  };

  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login: handleLogin,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;