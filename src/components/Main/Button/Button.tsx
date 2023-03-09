import React from 'react';

import { ButtonStyled, ButtonText } from './styled';

export const Button: React.FC<{
  title: string;
  link: string;
}> = ({ title, link }):JSX.Element => {
  return (
    <ButtonStyled type="button">
      <ButtonText href={link}>{title}</ButtonText>
    </ButtonStyled>
  );
}
