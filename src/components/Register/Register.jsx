import React from 'react';
import PropTypes from 'prop-types';

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

export function Register({
  logo,
  handleSubmit,
  errors,
  handleChange,
  isRegisterProcess,
  values,
  isDisabled,
  onClickForNavigate,
}) {
  return (
    <RegisterStyled>
      <RegisterForm onSubmit={handleSubmit} noValidate>
        <RegisterLogo>{logo}</RegisterLogo>
        <RegisterTitle>Добро пожаловать!</RegisterTitle>
        <RegisterFieldset>
          <RegisterLabel htmlFor="name">
            <RegisterFieldError isError={errors.name}>
              {errors.name}
            </RegisterFieldError>
            <RegisterField>Имя</RegisterField>
            <RegisterInput
              isErr={errors.name}
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
            <RegisterFieldError isError={errors.email}>
              {errors.email}
            </RegisterFieldError>
            <RegisterField>Космо почта</RegisterField>
            <RegisterInput
              isErr={errors.email}
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
            <RegisterFieldError isError={errors.password}>
              {errors.password}
            </RegisterFieldError>
            <RegisterField>Космо пароль</RegisterField>
            <RegisterInput
              isErr={errors.password}
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
            <RegisterLink role="button" onClick={onClickForNavigate}>
              Взойти на борт
            </RegisterLink>
          </RegisterLinkText>
        </RegisterButtonsContainer>
      </RegisterForm>
    </RegisterStyled>
  );
}

Register.propTypes = {
  errors: PropTypes.shape({
    name: PropTypes.string,
    password: PropTypes.string,
    email: PropTypes.string,
  }),
  values: PropTypes.shape({
    name: PropTypes.string,
    password: PropTypes.string,
    email: PropTypes.string,
  }),
  logo: PropTypes.element.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  isRegisterProcess: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onClickForNavigate: PropTypes.func.isRequired,
};
Register.defaultProps = {
  errors: {},
  values: {},
};
