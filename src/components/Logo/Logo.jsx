import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import ico from './images/Logo.svg';
import { LogoIco } from './styled';

export function Logo({ arialLabel, logoAlt, url }) {
  return (
    <Link to={url} aria-label={arialLabel}>
      <LogoIco src={ico} alt={logoAlt} />
    </Link>
  );
}
Logo.propTypes = {
  arialLabel: PropTypes.string.isRequired,
  logoAlt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
