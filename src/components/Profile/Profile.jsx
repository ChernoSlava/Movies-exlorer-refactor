import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AuthContext, CurrentUserContext } from '../../contexts';

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

export function Profile({
  header,
  isDisabled,
  handleSubmit,
  handleChange,
  values,
  errors,
  isInutErrorName,
  isInutErrorEmail,
}) {
  const { onSignOut } = useContext(AuthContext);
  const { name } = useContext(CurrentUserContext);

  return (
    <>
      {header}
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
              <ProfileButton type="button" exit onClick={onSignOut}>
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
  errors: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
  values: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
  header: PropTypes.element.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isInutErrorName: PropTypes.bool,
  isInutErrorEmail: PropTypes.bool,
};
Profile.defaultProps = {
  errors: {},
  values: {},
  isInutErrorName: undefined,
  isInutErrorEmail: undefined,
};
