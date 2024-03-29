import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Register } from '../../components';
import { ROUTER_PATH } from '../../constants';
import { AuthContext } from '../../contexts';
import { useForm } from '../../hooks';
import { LogoContainer } from '../LogoContainer';

export function RegisterContainer() {
  const navigate = useNavigate();
  const { loggedIn, onRegistration, isRegisterProcess } =
    useContext(AuthContext);
  const { values, handleChange, resetForm, errors } = useForm();

  const handleSubmit = () => {
    onRegistration(values);
  };

  useEffect(() => {
    resetForm();
  }, [resetForm, isRegisterProcess]);

  const isErrors = !!errors.name || !!errors.email || !!errors.password;
  const isEmptyValues = !values.name || !values.password || !values.email;
  const isDisabled = isErrors || isEmptyValues || isRegisterProcess;

  return loggedIn ? (
    navigate(ROUTER_PATH.MAIN)
  ) : (
    <Register
      logo={<LogoContainer />}
      isDisabled={isDisabled}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      values={values}
      errors={errors}
      isRegisterProcess={isRegisterProcess || false}
      onClickForNavigate={() => navigate(ROUTER_PATH.LOGIN)}
    />
  );
}
