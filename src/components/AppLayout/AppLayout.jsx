import React from 'react';
import { Outlet } from 'react-router-dom';

import { GlobalStyles } from './GlobalStyles';
import { AppLayoutStyled } from './styled';

import './AppLayout.css';

export function AppLayout() {
  return (
    <>
      <GlobalStyles />
      <AppLayoutStyled>
        <Outlet />
      </AppLayoutStyled>
    </>
  );
}
