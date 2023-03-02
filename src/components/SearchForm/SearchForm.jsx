import React from 'react';
import PropTypes from 'prop-types';

import {
  SearchFormButton,
  SearchFormCheckbox,
  SearchFormCheckboxContainer,
  SearchFormCheckboxLabel,
  SearchFormFieldError,
  SearchFormFieldset,
  SearchFormInput,
  SearchFormMain,
  SearchFormStyled,
  SearchFormText,
} from './styled';

export function SearchForm({
  errorText,
  onSubmit,
  handleShortMovies,
  shortMovies,
  handleChange,
  values,
}) {
  return (
    <SearchFormStyled>
      <SearchFormMain onSubmit={onSubmit} noValidate>
        <SearchFormFieldset>
          <SearchFormFieldError>{errorText}</SearchFormFieldError>
          <SearchFormInput
            type="text"
            placeholder="Фильм"
            name="film"
            minLength={1}
            id="film"
            required
            onChange={handleChange}
            value={values.film || ''}
          />
          <SearchFormButton type="submit" aria-label="Найти" />
        </SearchFormFieldset>
        <SearchFormCheckboxContainer>
          <SearchFormCheckboxLabel htmlFor="box" checked={!!shortMovies}>
            <SearchFormCheckbox
              type="checkbox"
              name="checkbox"
              id="box"
              onChange={handleShortMovies}
              checked={!!shortMovies}
            />
          </SearchFormCheckboxLabel>
          <SearchFormText>Короткометражки</SearchFormText>
        </SearchFormCheckboxContainer>
      </SearchFormMain>
    </SearchFormStyled>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleShortMovies: PropTypes.func.isRequired,
  shortMovies: PropTypes.bool.isRequired,
  errorText: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    film: PropTypes.string,
  }),
};

SearchForm.defaultProps = {
  errorText: '',
  values: {},
};
