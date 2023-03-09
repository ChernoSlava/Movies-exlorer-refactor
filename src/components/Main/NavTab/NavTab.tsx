import React from 'react';

import { Button } from '../Button';

import { NavTabStyled } from './styled';

export const NavTab: React.FC = ():JSX.Element => {
  return (
    <NavTabStyled>
      <Button title="О проекте" link="#about-project" />
      <Button title="Технологии" link="#techs" />
      <Button title="Студент" link="#I'm" />
    </NavTabStyled>
  );
}
