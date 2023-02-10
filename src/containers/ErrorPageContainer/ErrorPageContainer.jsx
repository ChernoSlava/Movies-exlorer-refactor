import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ErrorPage } from '../../components';

export function ErrorPageContainer() {
  const navigate = useNavigate();
  const back = () => navigate(-1);

  return <ErrorPage onClick={back} />;
}
