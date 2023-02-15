import React from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import { GlobalStyles } from './GlobalStyles';
import { AppLayoutStyled } from './styled';

import './AppLayout.css';

export function AppLayout({ children }) {
  return (
    <>
      <GlobalStyles />
      <AppLayoutStyled>
        <Outlet />
        {children}
      </AppLayoutStyled>
    </>
  );
}

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
