import { createContext } from 'react';

export const AuthContext = createContext({
  loggedIn: false,
  isLoginProcess: false,
  isRegisterProcess: false,
  onAuthorization: () => {},
  onRegistration: () => {},
  onChangeProfile: () => {},
  onSignOut: () => {},
  isOpen: false,
  onClose: () => {},
  isSuccess: false,
  text: '',
});
