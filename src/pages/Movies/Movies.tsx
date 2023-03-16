/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, useEffect, useMemo, useState } from 'react';

import { Footer, PageWrapper } from '../../components';
import { Loader } from '../../components/Preloader';
import { SHORT_DURATION } from '../../constants';
import { HeaderContainer } from '../../containers/HeaderContainer';
import {
  CurrentUserContext,
  MoviesContext,
  SearchFormContext,
} from '../../contexts';
import { MovieListDto, MovieItemDto, MovieItem, MovieList, MovieImage } from '../../types';
import { moviesApi, transformDuration } from '../../utils';

import { MoviesCardListContainer } from './MoviesCardListContainer';
import { SearchFormContainer } from './SearchFormContainer';

export function Movies() {
  const { onSaveFilm, onDeleteFilm, savedMoviesList } =
    useContext(MoviesContext);
  const { email } = useContext(CurrentUserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesFromSearch, setMoviesFromSearch] = useState([]);
  const [isShortMovies, setShowShortMovies] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const filterShortMovies = (movies: MovieListDto) => {
    return movies.filter((movie) => movie.duration < SHORT_DURATION);
  }
  function filterMovies(movies: MovieListDto, userSearch: string) {
    function lower(x: string) {
      return x.toLowerCase().trim();
    }
    return movies.filter((movie) => {
      const userMovie = lower(userSearch);
      const movieRu = lower(String(movie.nameRU)).indexOf(userMovie) !== -1;
      const movieEn = lower(String(movie.nameEN)).indexOf(userMovie) !== -1;
      const result = movieRu || movieEn;
      return result;
    });
  }
  const transformMovies = (movies: MovieListDto): MovieList => {
    return movies.map((movie) => ({
      ...movie,
      image: !movie.image
        ? process.env.REACT_APP_DEFAULT_IMAGE
        : `https://api.nomoreparties.co${(movie.image as MovieImage).url}`,
      thumbnail: !movie.image
        ? process.env.REACT_APP_DEFAULT_IMAGE
        : `https://api.nomoreparties.co${(movie.image as MovieImage).formats.thumbnail.url}`,
      country: !movie.country ? 'Russia' : movie.country,
      nameEN: !movie.nameEN ? movie.nameRU : movie.nameEN,
      nameRU: !movie.nameRU ? movie.nameEN : movie.nameRU,
      durationText: transformDuration(movie.duration),
      isLiked: savedMoviesList.find(item => {
        return item.movieId === (movie.id || movie.movieId);
      }),
      buttonType: 'like',
    }));
  }

  function handleAnswerMovies(movies: MovieList, searchData: string, checkbox: boolean) {
    const moviesBlock = filterMovies(movies, searchData);
    setMoviesFromSearch(moviesBlock);
    setFilteredMovies(checkbox ? filterShortMovies(moviesBlock) : moviesBlock);
  }

  function handleSearch(value: string, isShortMovies: boolean) {
    localStorage.setItem(`${email} - movieSearch`, value);
    localStorage.setItem(`${email} - shortMovies`, String(isShortMovies));

    const storageMovies = localStorage.getItem(`${email} - movies`);
    if (!storageMovies) {
      setIsLoading(true);
      moviesApi
        .getAllMovies()
        .then((movies: MovieListDto) => {
          localStorage.setItem(`${email} - movies`, JSON.stringify(movies));
          handleAnswerMovies(transformMovies(movies), value, isShortMovies);
        })
        .catch(() => {
          localStorage.setItem(`${email} - movies`, JSON.stringify([]));
          // console.log(process.env.REACT_APP_ERROR_TEXT);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      handleAnswerMovies(
        transformMovies(JSON.parse(storageMovies)),
        value,
        isShortMovies,
      );
    }
  }

  const handleShortMovies = () => {
    setShowShortMovies(!isShortMovies);
    if (!isShortMovies) {
      setFilteredMovies(filterShortMovies(moviesFromSearch));
    } else {
      setFilteredMovies(moviesFromSearch);
    }

    localStorage.setItem(`${email} - shortMovies`, String(!isShortMovies));
  };

  useEffect(() => {
    const isShortMovies =
      localStorage.getItem(`${email} - shortMovies`) === 'true';
    setShowShortMovies(isShortMovies);
  }, [email]);

  useEffect(() => {
    const storageMovies = localStorage.getItem(`${email} - movies`);

    if (storageMovies) {
      const isShortMovies =
        localStorage.getItem(`${email} - shortMovies`) === 'true';
      const value = localStorage.getItem(`${email} - movieSearch`);
      handleAnswerMovies(
        transformMovies(JSON.parse(storageMovies)),
        value,
        isShortMovies,
      );
    }
  }, [savedMoviesList]);

  const SearchFormContextValue = useMemo(
    () => ({
      handleShortMovies,
      isShortMovies: isShortMovies,
      onSearch: (values: { [key in string]?: string; }) => handleSearch(values.film, isShortMovies),
    }),
    [handleShortMovies, isShortMovies, handleSearch],
  );
  return (
    <>
      {isLoading && <Loader />}
      <HeaderContainer />
      <PageWrapper>
        <SearchFormContext.Provider value={SearchFormContextValue}>
          <SearchFormContainer />
        </SearchFormContext.Provider>
        <MoviesCardListContainer
          onSaveFilm={onSaveFilm}
          onDeleteFilm={onDeleteFilm}
          items={filteredMovies}
        />
      </PageWrapper>
      <Footer />
    </>
  );
}
