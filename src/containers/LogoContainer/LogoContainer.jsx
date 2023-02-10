import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Logo } from '../../components';
import { LOGO, ROUTER_PATH } from '../../constants';

export function LogoContainer() {
  const navigate = useNavigate();

  return (
    <Logo
      arialLabel={LOGO.ARIAL_LABEL}
      logoAlt={LOGO.LOGO_ALT}
      onClick={() => navigate(ROUTER_PATH.MAIN)}
    />
  );
}
