import React, { useState } from 'react';
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

export type errorsConten = {
  password?: string;
  email?: string;
}
export type valuesConten = {
  password?: string;
  email?: string;
}
export const Login: React.FC<{
  logo: React.ReactElement | null;
  handleSubmit: () => void;
  errors?: errorsConten;
  handleChange: (target: HTMLInputElement) => void;
  isLoginProcess: boolean;
  values?: valuesConten;
  isDisabled: boolean;
  onClickForNavigate: () => void;
  isError?: boolean;
  isBlock?: boolean;
  isActive?: boolean;
}> = ({
  logo,
  handleSubmit,
  errors,
  handleChange,
  isLoginProcess,
  values,
  isDisabled,
  onClickForNavigate,
}): JSX.Element => {
  const [isPasswordShow, togglePasswordShow] = useState(false);
  const [playShowPassword] = useSound(sauron, { volume: 0.1 });

  return (
    <LoginStyled>
      <LoginForm noValidate>
        <LoginLogo>{logo}</LoginLogo>
        <LoginTitle>Скорее на борт!</LoginTitle>
        <LoginFieldset>
          <LoginLabel htmlFor="email">
            <LoginFieldError isError={!!errors.email}>
              {errors.email}
            </LoginFieldError>
            <LoginField>Космо почта</LoginField>
            <LoginInput
              onChange={(e) => handleChange(e.target)}
              isError={!!errors.email}
              isDisabled={isLoginProcess}
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
            <LoginFieldError isError={!!errors.password}>
              {errors.password}
            </LoginFieldError>
            <LoginField>Космо пароль</LoginField>
            <LoginInput
              onChange={(e) => handleChange(e.target)}
              isError={!!errors.password}
              isDisabled={isLoginProcess}
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
              isActive={isPasswordShow}
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
            type="button"
            onClick={handleSubmit}
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
