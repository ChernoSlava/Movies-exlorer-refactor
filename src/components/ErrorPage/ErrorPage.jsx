import React from 'react';
import { PropTypes } from 'prop-types';

import { ErrorPageBtn, ErrorPageStyled } from './styled';

export function ErrorPage({ onClick }) {
  return (
    <ErrorPageStyled>
      <ErrorPageBtn type="button" onClick={onClick}>
        ⚠ БЕГИИИИ!!! ⚠
      </ErrorPageBtn>
    </ErrorPageStyled>
  );
}
ErrorPage.propTypes = {
  onClick: PropTypes.func.isRequired,
};
