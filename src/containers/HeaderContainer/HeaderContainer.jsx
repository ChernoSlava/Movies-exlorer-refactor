import React from 'react';

import { Header } from '../../components/Header';
import { LogoContainer } from '../LogoContainer';
import { NavigationContainer } from '../NavigationContainer';

export function HeaderContainer() {
  return (
    <Header>
      <LogoContainer />
      <NavigationContainer />
    </Header>
  );
}
