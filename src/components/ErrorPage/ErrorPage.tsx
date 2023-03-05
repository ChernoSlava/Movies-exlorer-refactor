import React from 'react';

import { ErrorPageBtn, ErrorPageStyled } from './styled';

export const ErrorPage: React.FC<{
  onClick: () => void;
}> = ({ onClick }): JSX.Element => {
  return (
    <ErrorPageStyled>
      <ErrorPageBtn type="button" onClick={onClick}>
        ⚠ БЕГИИИИ!!! ⚠
      </ErrorPageBtn>
    </ErrorPageStyled>
  );
}
