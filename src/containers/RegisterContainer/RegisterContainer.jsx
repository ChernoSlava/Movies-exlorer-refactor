import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTER_PATH } from '../../constants';
import { AuthContext } from '../../contexts';
import { useForm } from '../../hooks';
import { LogoContainer } from '../LogoContainer';

import {
  RegisterButton,
  RegisterButtonsContainer,
  RegisterField,
  RegisterFieldError,
  RegisterFieldset,
  RegisterForm,
  RegisterInput,
  RegisterLabel,
  RegisterLink,
  RegisterLinkText,
  RegisterLogo,
  RegisterStyled,
  RegisterTitle,
} from './styled';

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

  const isErrorSpanName = errors.name;
  const isErrorSpanEmail = errors.email;
  const isErrorSpanPassw = errors.password;

  const isErrorInputName = errors.name;
  const isErrorInputEmail = errors.email;
  const isErrorInputPassw = errors.password;

  const isErrors = errors.name || errors.email || errors.password;
  const isEmptyValues = !values.name || !values.password || !values.email;
  const isDisabled = isErrors || isEmptyValues || isRegisterProcess;

  return loggedIn ? (
    navigation(ROUTER_PATH.MAIN)
  ) : (
    <RegisterStyled>
      <RegisterForm onSubmit={handleSubmit} noValidate>
        <RegisterLogo>
          <LogoContainer />
        </RegisterLogo>
        <RegisterTitle>Добро пожаловать!</RegisterTitle>
        <RegisterFieldset>
          <RegisterLabel htmlFor="name">
            <RegisterFieldError isError={isErrorSpanName}>
              {errors.name}
            </RegisterFieldError>
            <RegisterField>Имя</RegisterField>
            <RegisterInput
              isErr={isErrorInputName}
              isInquiry={isRegisterProcess}
              name="name"
              placeholder="Ваше имя"
              minLength={2}
              maxLength={40}
              type="text"
              required
              onChange={handleChange}
              value={values.name || ''}
              disabled={isRegisterProcess}
            />
          </RegisterLabel>
          <RegisterLabel htmlFor="email">
            <RegisterFieldError isError={isErrorSpanEmail}>
              {errors.email}
            </RegisterFieldError>
            <RegisterField>Космо почта</RegisterField>
            <RegisterInput
              isErr={isErrorInputEmail}
              isInquiry={isRegisterProcess}
              name="email"
              placeholder="star@mail.ru"
              type="email"
              required
              onChange={handleChange}
              value={values.email || ''}
              disabled={isRegisterProcess}
              autoComplete="email"
            />
          </RegisterLabel>
          <RegisterLabel htmlFor="password">
            <RegisterFieldError isError={isErrorSpanPassw}>
              {errors.password}
            </RegisterFieldError>
            <RegisterField>Космо пароль</RegisterField>
            <RegisterInput
              isErr={isErrorInputPassw}
              isInquiry={isRegisterProcess}
              name="password"
              placeholder="Пароль"
              minLength={6}
              type="password"
              required
              onChange={handleChange}
              value={values.password || ''}
              disabled={isRegisterProcess}
              autoComplete="new-password"
            />
          </RegisterLabel>
        </RegisterFieldset>
        <RegisterButtonsContainer>
          <RegisterButton
            type="submit"
            isBlock={isDisabled}
            disabled={isDisabled}>
            Зарегистрироваться
          </RegisterButton>
          <RegisterLinkText>
            Уже зарегистрированы?
            <RegisterLink to={ROUTER_PATH.LOGIN}>Взойти на борт</RegisterLink>
          </RegisterLinkText>
        </RegisterButtonsContainer>
      </RegisterForm>
    </RegisterStyled>
  );
}
