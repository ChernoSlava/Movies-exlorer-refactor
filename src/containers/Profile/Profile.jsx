import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { CurrentUserContext } from '../../contexts';
import { useForm } from '../../hooks';
import { HeaderContainer } from '../HeaderContainer';

import {
  ProfileBorder,
  ProfileButton,
  ProfileButtonsContainer,
  ProfileField,
  ProfileFieldError,
  ProfileFieldset,
  ProfileForm,
  ProfileInput,
  ProfileLabel,
  ProfileStyled,
  ProfileTitle,
} from './styled';

export function Profile({ handleChangeProfile, handleSignOut }) {
  const user = useContext(CurrentUserContext);
  const { name, email } = user;

  const { values, handleChange, resetForm, errors } = useForm({});

  const handleSubmit = e => {
    e.preventDefault();
    handleChangeProfile(values);
  };

  useEffect(() => {
    if (user) {
      resetForm(user, {});
    }
  }, [user, resetForm]);

  const isNotValues = name === values.name && email === values.email;

  const isDisabled = errors.name || errors.email || isNotValues;

  const isInutErrorName = errors.name;
  const isInutErrorEmail = errors.email;

  return (
    <>
      <HeaderContainer />
      <ProfileStyled>
        <ProfileForm onSubmit={handleSubmit} noValidate>
          <ProfileTitle>Добро пожаловать, уважаемый {name}!</ProfileTitle>
          <ProfileFieldset>
            <ProfileLabel htmlFor="name">
              <ProfileFieldError nam>{errors.name}</ProfileFieldError>
              <ProfileField>Имя</ProfileField>
              <ProfileInput
                err={isInutErrorName}
                name="name"
                minLength="2"
                maxLength="30"
                type="text"
                required
                value={values.name || ''}
                onChange={handleChange}
              />
            </ProfileLabel>
            <ProfileBorder />
            <ProfileLabel htmlFor="email">
              <ProfileFieldError email>{errors.email}</ProfileFieldError>
              <ProfileField>Космо почта</ProfileField>
              <ProfileInput
                err={isInutErrorEmail}
                name="email"
                type="email"
                required
                value={values.email || ''}
                onChange={handleChange}
              />
            </ProfileLabel>
            <ProfileButtonsContainer>
              <ProfileButton
                edit
                type="submit"
                disab={isDisabled}
                disabled={isDisabled}>
                Изменить хроники
              </ProfileButton>
              <ProfileButton type="button" exit onClick={handleSignOut}>
                Покинуть корабль
              </ProfileButton>
            </ProfileButtonsContainer>
          </ProfileFieldset>
        </ProfileForm>
      </ProfileStyled>
    </>
  );
}

Profile.propTypes = {
  handleChangeProfile: PropTypes.func.isRequired,
  handleSignOut: PropTypes.func.isRequired,
};
