import React from 'react';
import { PropTypes } from 'prop-types';

import ico from './images/Logo.svg';
import { LogoIco } from './styled';

export function Logo({ arialLabel, logoAlt, onClick }) {
  return (
    <span onClick={onClick} aria-label={arialLabel}>
      <LogoIco src={ico} alt={logoAlt} />
    </span>
  );
}
Logo.propTypes = {
  arialLabel: PropTypes.string.isRequired,
  logoAlt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
