import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Register } from '../../components';
import { ROUTER_PATH } from '../../constants';
import { AuthContext } from '../../contexts';
import { useForm } from '../../hooks';
import { LogoContainer } from '../LogoContainer';

export function RegisterContainer() {
  const navigation = useNavigate();
  const { loggedIn, onRegistration, isRegisterProcess } =
    useContext(AuthContext);
  const { values, handleChange, resetForm, errors } = useForm({});

  const handleSubmit = evt => {
    evt.preventDefault();
    onRegistration(values);
  };

  useEffect(() => {
    resetForm();
  }, [resetForm, isRegisterProcess]);

  const isErrors = errors.name || errors.email || errors.password;
  const isEmptyValues = !values.name || !values.password || !values.email;
  const isDisabled = isErrors || isEmptyValues || isRegisterProcess;

  return loggedIn ? (
    navigation(ROUTER_PATH.MAIN)
  ) : (
    <Register
      logo={<LogoContainer />}
      isDisabled={isDisabled}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      value={values}
      errors={errors}
      isRegisterProcess={isRegisterProcess}
      loginUrl={ROUTER_PATH.LOGIN}
    />
  );
}
