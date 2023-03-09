import React from 'react';
import { Outlet } from 'react-router-dom';

import { GlobalStyles } from './GlobalStyles';
import { AppLayoutStyled } from './styled';

import './AppLayout.css';

export const AppLayout: React.FC<{
  children: React.ReactElement | null;
}> = ({ children }): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <AppLayoutStyled>
        <Outlet />
        {children}
      </AppLayoutStyled>
    </>
  );
};
