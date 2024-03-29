import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Login } from '../../components';
import { ROUTER_PATH } from '../../constants';
import { AuthContext } from '../../contexts';
import { useForm } from '../../hooks';
import { LogoContainer } from '../LogoContainer';

export const LoginContainer: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { loggedIn, onAuthorization, isLoginProcess } = useContext(AuthContext);
  const { values, handleChange, resetForm, errors } = useForm();

  const handleSubmit = () => {
    onAuthorization(values);
  };

  useEffect(() => {
    resetForm();
  }, [resetForm, isLoginProcess]);

  const isErrors = !!errors.email || !!errors.password;
  const isEmptyValues = !values.password || !values.email;
  const isDisabled = isErrors || isEmptyValues || isLoginProcess;

  useEffect(() => {
    loggedIn && navigate(ROUTER_PATH.MAIN)
  }, [loggedIn]);

  return loggedIn ? (
    undefined
  ) : (
    <Login
      isDisabled={isDisabled}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      logo={<LogoContainer />}
      values={values}
      errors={errors}
      isLoginProcess={isLoginProcess || false}
      onClickForNavigate={() => navigate(ROUTER_PATH.REGISTER)}
    />
  );
}
