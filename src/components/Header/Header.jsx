import React from 'react';
import PropTypes from 'prop-types';

import { HeaderStyled } from './styled';

export function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>;
}
Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.object,
  ]).isRequired,
};
