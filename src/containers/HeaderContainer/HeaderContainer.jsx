import React from 'react';

import { Header } from '../../components/Header';
import { LogoContainer } from '../LogoContainer';
import { Navigation } from '../Navigation';

export function HeaderContainer() {
  return (
    <Header>
      <LogoContainer />
      <Navigation />
    </Header>
  );
}
