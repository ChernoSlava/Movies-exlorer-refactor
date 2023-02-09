import React from 'react';

import { Logo } from '../../components';
import { LOGO, ROUTER_PATH } from '../../constants';

export function LogoContainer() {
  return (
    <Logo
      arialLabel={LOGO.ARIAL_LABEL}
      logoAlt={LOGO.LOGO_ALT}
      url={ROUTER_PATH.MAIN}
    />
  );
}
