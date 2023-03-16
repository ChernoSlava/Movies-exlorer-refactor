import React from 'react';

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

export type errorsConten = {
  name?: string;
  password?: string;
  email?: string;
}
export type valuesConten = {
  name?: string;
  password?: string;
  email?: string;
}

export const Register: React.FC<{
  logo: React.ReactElement | null;
  handleSubmit: () => void;
  errors?: errorsConten;
  handleChange: (target: HTMLInputElement) => void;
  isRegisterProcess: boolean;
  values?: valuesConten;
  isDisabled: boolean;
  onClickForNavigate: () => void;
  isError?: boolean;
  isBlock?: boolean;
}> = ({
  logo,
  handleSubmit,
  errors,
  handleChange,
  isRegisterProcess,
  values,
  isDisabled,
  onClickForNavigate,
}):JSX.Element => {
  return (
    <RegisterStyled>
      <RegisterForm noValidate>
        <RegisterLogo>{logo}</RegisterLogo>
        <RegisterTitle>Добро пожаловать!</RegisterTitle>
        <RegisterFieldset>
          <RegisterLabel htmlFor="name">
            <RegisterFieldError isError={!!errors.name}>
              {errors.name}
            </RegisterFieldError>
            <RegisterField>Имя</RegisterField>
            <RegisterInput
              isError={!!errors.name}
              isInquiry={isRegisterProcess}
              name="name"
              placeholder="Ваше имя"
              minLength={2}
              maxLength={40}
              type="text"
              required
              onChange={(e) => handleChange(e.target)}
              value={values.name || ''}
              disabled={isRegisterProcess}
            />
          </RegisterLabel>
          <RegisterLabel htmlFor="email">
            <RegisterFieldError isError={!!errors.email}>
              {errors.email}
            </RegisterFieldError>
            <RegisterField>Космо почта</RegisterField>
            <RegisterInput
              isError={!!errors.email}
              isInquiry={isRegisterProcess}
              name="email"
              placeholder="star@mail.ru"
              type="email"
              required
              onChange={(e) => handleChange(e.target)}
              value={values.email || ''}
              disabled={isRegisterProcess}
              autoComplete="email"
            />
          </RegisterLabel>
          <RegisterLabel htmlFor="password">
            <RegisterFieldError isError={!!errors.password}>
              {errors.password}
            </RegisterFieldError>
            <RegisterField>Космо пароль</RegisterField>
            <RegisterInput
              isError={!!errors.password}
              isInquiry={isRegisterProcess}
              name="password"
              placeholder="Пароль"
              minLength={6}
              type="password"
              required
              onChange={(e) => handleChange(e.target)}
              value={values.password || ''}
              disabled={isRegisterProcess}
              autoComplete="new-password"
            />
          </RegisterLabel>
        </RegisterFieldset>
        <RegisterButtonsContainer>
          <RegisterButton
            type="button"
            onClick={handleSubmit}
            isBlock={isDisabled}
            disabled={isDisabled}>
            Зарегистрироваться
          </RegisterButton>
          <RegisterLinkText>
            Уже зарегистрированы?
            <RegisterLink role="button" onClick={onClickForNavigate}>
              Взойти на борт
            </RegisterLink>
          </RegisterLinkText>
        </RegisterButtonsContainer>
      </RegisterForm>
    </RegisterStyled>
  );
}
