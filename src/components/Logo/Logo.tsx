import React from 'react';

import ico from './images/Logo.svg';
import { LogoIco } from './styled';

export const Logo: React.FC<{
  arialLabel: string;
  logoAlt: string;
  onClick: () => void;
}> = ({ arialLabel, logoAlt, onClick }): JSX.Element => {
  return (
    <span onClick={onClick} aria-label={arialLabel} role="link">
      <LogoIco src={ico} alt={logoAlt} />
    </span>
  );
}
