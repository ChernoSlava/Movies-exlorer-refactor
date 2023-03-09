import React from 'react';

import { Footer } from '../Footer';

import { AboutMe } from './AboutMe';
import { AboutProject } from './AboutProject';
import { Portfolio } from './Portfolio';
import { Promo } from './Promo';
import { MainStyled } from './styled';
import { Techs } from './Techs';

export const Main: React.FC<{
  header: React.ReactElement | null;
}> = ({ header }):JSX.Element => {
  return (
    <>
      {header}
      <MainStyled>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </MainStyled>
      <Footer />
    </>
  );
}
