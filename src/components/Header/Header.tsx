import React from 'react';

import { HeaderStyled } from './styled';

export const Header: React.FC<{
  children: JSX.Element|JSX.Element[];
}> = ({ children }): JSX.Element => {
  return <HeaderStyled>{children}</HeaderStyled>;
};
