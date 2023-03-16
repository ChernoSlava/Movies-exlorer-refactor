import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { SearchForm } from '../../../components';
import { ROUTER_PATH } from '../../../constants';
import { CurrentUserContext, SearchFormContext } from '../../../contexts';
import { useForm } from '../../../hooks';

export function SearchFormContainer() {
  const location = useLocation();
  const { email } = useContext(CurrentUserContext);
  const { onSearch, handleShortMovies, isShortMovies } =
    useContext(SearchFormContext);

  const { values, handleChange, isEmptiness, setIsEmptiness } = useForm();
  const [emptySearch, setEmptySearch] = useState('');

  const textError = 'Нужно ввести ключевое слово.';

  const savedMoviesLocation = location.pathname === ROUTER_PATH.SAVED_MOVIES;
  const hasError = !savedMoviesLocation && !!emptySearch;

  const handleSubmit = () => {
    if (isEmptiness) {
      onSearch(values);
    } else {
      setEmptySearch(textError);
    }
  };

  useEffect(() => {
    if (
      location.pathname === ROUTER_PATH.MOVIES &&
      localStorage.getItem(`${email} - movieSearch`)
    ) {
      const searchValue = localStorage.getItem(`${email} - movieSearch`);
      values.film = searchValue;
      setIsEmptiness(true);
    }
  }, [email]);

  useEffect(() => {
    setEmptySearch('');
  }, [isEmptiness]);

  return (
    <SearchForm
      handleChange={handleChange}
      values={values}
      errorText={hasError ? textError : ''}
      onSubmit={handleSubmit}
      shortMovies={isShortMovies}
      handleShortMovies={handleShortMovies}
    />
  );
}
