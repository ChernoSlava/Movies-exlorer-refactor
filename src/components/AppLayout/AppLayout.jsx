import React from 'react';
import { Outlet } from 'react-router-dom';

import { Popup } from '../Popup';

import { GlobalStyles } from './GlobalStyles';
import { AppLayoutStyled } from './styled';

import './AppLayout.css';

export function AppLayout() {
  return (
    <>
      <GlobalStyles />
      <AppLayoutStyled>
        <Popup />
        <Outlet />
      </AppLayoutStyled>
    </>
  );
}
