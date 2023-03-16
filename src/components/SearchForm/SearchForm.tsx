import React from 'react';
// import PropTypes from 'prop-types';

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

export const SearchForm: React.FC<{
  errorText?: string;
  onSubmit: () => void;
  handleShortMovies: () => void;
  shortMovies: boolean;
  handleChange: (target: HTMLInputElement) => void;
  values?: { film?: string },
}> = ({
  errorText,
  onSubmit,
  handleShortMovies,
  shortMovies,
  handleChange,
  values,
}): JSX.Element => {
    return (
      <SearchFormStyled>
        <SearchFormMain noValidate>
          <SearchFormFieldset>
            <SearchFormFieldError>{errorText}</SearchFormFieldError>
            <SearchFormInput
              type="text"
              placeholder="Фильм"
              name="film"
              minLength={1}
              id="film"
              required
              onChange={(e) => handleChange(e.target)}
              value={values.film || ''}
            />
            <SearchFormButton onClick={onSubmit} type="button" aria-label="Найти" />
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

// SearchForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   handleShortMovies: PropTypes.func.isRequired,
//   shortMovies: PropTypes.bool.isRequired,
//   errorText: PropTypes.string,
//   handleChange: PropTypes.func.isRequired,
//   values: PropTypes.shape({
//     film: PropTypes.string,
//   }),
// };

// SearchForm.defaultProps = {
//   errorText: '',
//   values: {},
// };
