import React from 'react';
import PropTypes from 'prop-types';

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

export type errorsConten = {
  name?: string;
  email?: string;
}
export type valuesConten = {
  name?: string;
  email?: string;
}

export const Profile: React.FC<{
  header: React.ReactElement | null;
  isDisabled?: boolean;
  handleSubmit: () => void;
  handleChange: (target: HTMLInputElement) => void;
  values?: valuesConten;
  errors?: errorsConten;
  isInutErrorName?: boolean;
  isInutErrorEmail?: boolean;
  onSignOut: (e: React.MouseEvent) => void;
  name: string;
  isError?: boolean;
  isErrorName?: boolean;
  isErrorEmail?: boolean;
  isEdit?: boolean;
  isExit?: boolean;
}> = ({
  header,
  isDisabled,
  handleSubmit,
  handleChange,
  values,
  errors,
  isInutErrorName,
  isInutErrorEmail,
  onSignOut,
  name,
}): JSX.Element => {
    return (
      <>
        {header}
        <ProfileStyled>
          <ProfileForm onSubmit={handleSubmit} noValidate>
            <ProfileTitle>Добро пожаловать, уважаемый {name}!</ProfileTitle>
            <ProfileFieldset>
              <ProfileLabel htmlFor="name">
                <ProfileFieldError isErrorName>{errors.name}</ProfileFieldError>
                <ProfileField>Имя</ProfileField>
                <ProfileInput
                  isError={!!isInutErrorName}
                  name="name"
                  minLength={2}
                  maxLength={30}
                  type="text"
                  required
                  value={values.name || ''}
                  onChange={(e) => handleChange(e.target)}
                  placeholder="name"
                />
              </ProfileLabel>
              <ProfileBorder />
              <ProfileLabel htmlFor="email">
                <ProfileFieldError isErrorEmail>{errors.email}</ProfileFieldError>
                <ProfileField>Космо почта</ProfileField>
                <ProfileInput
                  isError={!!isInutErrorEmail}
                  name="email"
                  type="email"
                  required
                  value={values.email || ''}
                  onChange={(e) => handleChange(e.target)}
                  placeholder="email"
                />
              </ProfileLabel>
              <ProfileButtonsContainer>
                <ProfileButton
                  isEdit
                  type="submit"
                  isDisabled={isDisabled}
                  disabled={isDisabled}>
                  Изменить хроники
                </ProfileButton>
                <ProfileButton type="button" isExit onClick={onSignOut}>
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
  onSignOut: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
Profile.defaultProps = {
  errors: {},
  values: {},
  isInutErrorName: undefined,
  isInutErrorEmail: undefined,
};
