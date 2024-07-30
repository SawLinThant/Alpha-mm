import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    user: null,
  });

  const login = (token, user) => {
    setAuthState({ token, user });
    localStorage.setItem('authToken', token);
  };

  const logout = () => {
    setAuthState({ token: null, user: null });
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
