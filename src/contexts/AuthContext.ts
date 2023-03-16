import { createContext } from 'react';

export const AuthContext = createContext<{
  loggedIn: boolean;
  isLoginProcess: boolean;
  isRegisterProcess: boolean;
  onAuthorization: (values: { [key in string]?: string }) => void;
  onRegistration: (values: { [key in string]?: string }) => void;
  onChangeProfile: (values: { [key in string]?: string }) => void;
  onSignOut: () => void;
}>({
  loggedIn: false,
  isLoginProcess: false,
  isRegisterProcess: false,
  onAuthorization: () => { },
  onRegistration: () => { },
  onChangeProfile: () => { },
  onSignOut: () => { },
});
