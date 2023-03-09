import React from 'react';

import { NavTab } from '../NavTab';

import { PromoScreen, PromoStyled, PromoTitle } from './styled';

export const Promo: React.FC = (): JSX.Element => {
  return (
    <PromoStyled>
      <PromoScreen>
        <PromoTitle>
          Учебный проект студента факультета Веб-разработки.
        </PromoTitle>
        <NavTab />
      </PromoScreen>
    </PromoStyled>
  );
}
