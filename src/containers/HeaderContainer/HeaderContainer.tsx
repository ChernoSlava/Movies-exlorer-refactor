import React from 'react';

import { Header } from '../../components/Header';
import { LogoContainer } from '../LogoContainer';
import { NavigationContainer } from '../NavigationContainer';

export const HeaderContainer: React.FC = (): JSX.Element => {
  return (
      <Header>
        <LogoContainer />
        <NavigationContainer />
      </Header>
  );
}
