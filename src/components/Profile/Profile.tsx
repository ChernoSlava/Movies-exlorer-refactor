import React from 'react';

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
          <ProfileForm noValidate>
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
                  type="button"
                  onClick={handleSubmit}
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
