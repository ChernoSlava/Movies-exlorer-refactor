/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, useEffect, useMemo, useState } from 'react';

import { Footer, PageWrapper } from '../../components';
import { movieData } from '../../components/MoviesCard';
import { HeaderContainer } from '../../containers/HeaderContainer';
import {
  CurrentUserContext,
  MoviesContext,
  SearchFormContext,
} from '../../contexts';
import { MovieItem, MovieList } from '../../types';
import { transformDuration } from '../../utils';
import { SearchFormContainer } from '../Movies';
import { MoviesCardListContainer } from '../Movies/MoviesCardListContainer';

function transformMovies(movies: MovieList) {
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

  function filterShortMovies(movies: MovieList) {
    return movies.filter(movie => movie.duration < 40);
  }
  function filterMovies(movies: MovieList, userSearch: string) {
    function lower(x: string) {
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
  function handleSearchSubmit(inputValue: string, isShortMovies: boolean) {
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
    localStorage.setItem(`${email} - shortSavedMovies`, String(!shortMovies));
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
      onSearch: (values: { [key in string]?: string; }) => handleSearchSubmit(values.film, shortMovies),
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
          items={filteredMovies as Array<movieData>}
        />
      </PageWrapper>
      <Footer />
    </>
  );
}
