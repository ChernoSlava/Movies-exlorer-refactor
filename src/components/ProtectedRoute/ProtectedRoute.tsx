import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { ROUTER_PATH } from '../../constants';
import { AuthContext } from '../../contexts';

export const ProtectedRoute: React.FC<{
  children: React.ReactElement | null;
}> = ({ children }): JSX.Element => {
  const { loggedIn } = useContext(AuthContext);

  const location = useLocation();
  if (!loggedIn) {
    return (
      <Navigate to={ROUTER_PATH.MAIN} state={{ from: location }} replace />
    );
  }

  return children;
};
