import React from 'react';

import { HeaderStyled } from './styled';

export const Header: React.FC<{
  children: React.ReactElement | null;
}> = ({ children }): JSX.Element => {
  return <HeaderStyled>{children}</HeaderStyled>;
};
