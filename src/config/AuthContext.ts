import { createContext, useContext } from 'react';

export interface Auth {
  isLoading?: boolean;
  isAuthenticated: boolean;
  user?: any;
  roleAssignments?: any;
  getAccessToken: any;
  logout: any;
}

// @ts-ignore
export const AuthContext = createContext<Auth>({
  isLoading: false,
  isAuthenticated: false,
  user: null,
  roleAssignments: null,
  getAccessToken: function getAccessToken() {
    return Promise.resolve('');
  },
  logout: function logout() {},
});

export const useAuth = () => useContext(AuthContext);
