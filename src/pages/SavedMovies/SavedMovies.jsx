/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, useEffect, useMemo, useState } from 'react';

import { Footer, PageWrapper } from '../../components';
import { HeaderContainer } from '../../containers/HeaderContainer';
import {
  CurrentUserContext,
  MoviesContext,
  SearchFormContext,
} from '../../contexts';
import { transformDuration } from '../../utils';
import { SearchFormContainer } from '../Movies';
import { MoviesCardListContainer } from '../Movies/MoviesCardListContainer';

function transformMovies(movies) {
  return movies.map(movie => ({
    ...movie,
    durationText: transformDuration(movie.duration),
    isLiked: true,
  }));
}
export function SavedMovies() {
  const { onDeleteFilm, savedMoviesList } = useContext(MoviesContext);
  const { email } = useContext(CurrentUserContext);

  const [shortMovies, setShortMovies] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showedMovies, setShowedMovies] = useState(
    transformMovies(savedMoviesList),
  );
  const [filteredMovies, setFilteredMovies] = useState(showedMovies);

  function filterShortMovies(movies) {
    return movies.filter(movie => movie.duration < 40);
  }
  function filterMovies(movies, userSearch) {
    function lower(x) {
      return x.toLowerCase().trim();
    }
    return movies.filter(movie => {
      if (userSearch) {
        const userMovie = lower(userSearch);
        const movieRu = lower(String(movie.nameRU)).indexOf(userMovie) !== -1;
        const movieEn = lower(String(movie.nameEN)).indexOf(userMovie) !== -1;
        const result = movieRu || movieEn;
        return result;
      }
      return true;
    });
  }
  function handleSearchSubmit(inputValue, isShortMovies) {
    setSearchQuery(inputValue);
    localStorage.setItem(`${email} - movieSearchSaved`, inputValue);
    let moviesList = filterMovies(savedMoviesList, inputValue);
    moviesList = isShortMovies ? filterShortMovies(moviesList) : moviesList;
    setFilteredMovies(moviesList);
  }

  const handleShortMovies = () => {
    let moviesList = filterMovies(savedMoviesList, searchQuery);
    moviesList = !shortMovies ? filterShortMovies(moviesList) : moviesList;
    setFilteredMovies(moviesList);
    setShortMovies(!shortMovies);
    localStorage.setItem(`${email} - shortSavedMovies`, !shortMovies);
  };

  useEffect(() => {
    const result = transformMovies(savedMoviesList);
    setShowedMovies(result);
    const items = filterMovies(result, searchQuery);
    setFilteredMovies(shortMovies ? filterShortMovies(items) : items);
  }, [savedMoviesList]);

  const SearchFormContextValue = useMemo(
    () => ({
      handleShortMovies,
      isShortMovies: shortMovies,
      onSearch: value => handleSearchSubmit(value, shortMovies),
    }),
    [handleShortMovies, shortMovies, handleSearchSubmit],
  );

  return (
    <>
      <HeaderContainer />
      <PageWrapper>
        <SearchFormContext.Provider value={SearchFormContextValue}>
          <SearchFormContainer />
        </SearchFormContext.Provider>
        <MoviesCardListContainer
          onDeleteFilm={onDeleteFilm}
          items={filteredMovies}
        />
      </PageWrapper>
      <Footer />
    </>
  );
}
