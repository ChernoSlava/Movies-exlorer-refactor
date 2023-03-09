import React from 'react';

import {
  FooterBorder,
  FooterCopy,
  FooterLink,
  FooterLinks,
  FooterNav,
  FooterStyled,
  FooterTitle,
} from './styled';

export type IsLastType = { isLast?: boolean | '' };

export const Footer: React.FC<IsLastType> = (): JSX.Element => {
  return (
    <FooterStyled>
      <FooterTitle>Учебный проект Яндекс.Практикум х BeatFilm.</FooterTitle>
      <FooterBorder />
      <FooterNav>
        <FooterCopy>&copy;{new Date().getFullYear()}</FooterCopy>
        <FooterLinks>
          <FooterLink
            href="https://practicum.yandex.ru"
            target="_blank"
            rel="noreferrer"
            isLast={false}>
            Яндекс.Практикум
          </FooterLink>
          <FooterLink
            href="https://github.com/ChernoSlava"
            target="_blank"
            rel="noreferrer"
            isLast>
            Github
          </FooterLink>
        </FooterLinks>
      </FooterNav>
    </FooterStyled>
  );
};
