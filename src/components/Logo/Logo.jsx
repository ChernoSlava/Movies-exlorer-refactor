import React from 'react';
import { PropTypes } from 'prop-types';

import ico from './images/Logo.svg';
import { LogoIco, LogoStyled } from './styled';

export function Logo({ arialLabel, logoAlt, onClick }) {
  return (
    <LogoStyled role="button" onClick={onClick} aria-label={arialLabel}>
      <LogoIco src={ico} alt={logoAlt} />
    </LogoStyled>
  );
}
Logo.propTypes = {
  arialLabel: PropTypes.string.isRequired,
  logoAlt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
