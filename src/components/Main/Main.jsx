import React from 'react';
import { PropTypes } from 'prop-types';

import { Footer } from '../Footer';

import { AboutMe } from './AboutMe';
import { AboutProject } from './AboutProject';
import { Portfolio } from './Portfolio';
import { Promo } from './Promo';
import { MainStyled } from './styled';
import { Techs } from './Techs';

export function Main({ header }) {
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

Main.propTypes = {
  header: PropTypes.element.isRequired,
};
