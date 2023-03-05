/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import ico from './images/Logo.svg';
import { LogoIco, LogoStyled } from './styled';

export const Logo: React.FC<{
  arialLabel: string;
  logoAlt: string;
  onClick: (e: React.MouseEvent) => void;
}> = ({ arialLabel, logoAlt, onClick }): JSX.Element => {
  return (
    <LogoStyled role="button" onClick={onClick} aria-label={arialLabel}>
      <LogoIco src={ico} alt={logoAlt} />
    </LogoStyled>
  );
};
