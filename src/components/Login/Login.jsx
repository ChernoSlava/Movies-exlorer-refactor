import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useSound from 'use-sound';

import sauron from './assets/sauron.mp3';
import {
  LoginButtonContainer,
  LoginField,
  LoginFieldError,
  LoginFieldset,
  LoginForm,
  LoginInput,
  LoginLabel,
  LoginLink,
  LoginLinkText,
  LoginLogo,
  LoginStyled,
  LoginSubmitButton,
  LoginTitle,
  TogglePasswordDisplay,
} from './styled';

export function Login({
  logo,
  handleSubmit,
  errors,
  handleChange,
  isLoginProcess,
  values,
  isDisabled,
  onClickForNavigate,
}) {
  const [isPasswordShow, togglePasswordShow] = useState(false);
  const [playShowPassword] = useSound(sauron, { volume: 0.1 });

  return (
    <LoginStyled>
      <LoginForm onSubmit={handleSubmit} noValidate>
        <LoginLogo>{logo}</LoginLogo>
        <LoginTitle>Скорее на борт!</LoginTitle>
        <LoginFieldset>
          <LoginLabel htmlFor="email">
            <LoginFieldError isError={errors.email}>
              {errors.email}
            </LoginFieldError>
            <LoginField>Космо почта</LoginField>
            <LoginInput
              onChange={handleChange}
              isError={errors.email}
              isDisa={isLoginProcess}
              name="email"
              placeholder="star@mail.ru"
              type="email"
              required
              value={values.email || ''}
              disabled={isLoginProcess}
              autoComplete="email"
            />
          </LoginLabel>
          <LoginLabel htmlFor="password">
            <LoginFieldError isError={errors.password}>
              {errors.password}
            </LoginFieldError>
            <LoginField>Космо пароль</LoginField>
            <LoginInput
              onChange={handleChange}
              isError={errors.password}
              isDisa={isLoginProcess}
              name="password"
              placeholder="Пароль"
              minLength={6}
              type={isPasswordShow ? 'text' : 'password'}
              required
              value={values.password || ''}
              disabled={isLoginProcess}
              autoComplete="current-password"
            />
            <TogglePasswordDisplay
              active={isPasswordShow}
              onClick={() =>
                togglePasswordShow(prev => {
                  if (!prev) {
                    playShowPassword();
                  }
                  return !prev;
                })
              }
            />
          </LoginLabel>
        </LoginFieldset>
        <LoginButtonContainer>
          <LoginSubmitButton
            type="submit"
            isBlock={isDisabled}
            disabled={isDisabled}>
            Отправляемся
          </LoginSubmitButton>
          <LoginLinkText>
            Ещё не зарегистрированы?
            <LoginLink role="button" onClick={onClickForNavigate}>
              Регистрация
            </LoginLink>
          </LoginLinkText>
        </LoginButtonContainer>
      </LoginForm>
    </LoginStyled>
  );
}

Login.propTypes = {
  errors: PropTypes.shape({
    password: PropTypes.string,
    email: PropTypes.string,
  }),
  values: PropTypes.shape({
    password: PropTypes.string,
    email: PropTypes.string,
  }),
  logo: PropTypes.element.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  isLoginProcess: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onClickForNavigate: PropTypes.func.isRequired,
};
Login.defaultProps = {
  errors: {},
  values: {},
};
