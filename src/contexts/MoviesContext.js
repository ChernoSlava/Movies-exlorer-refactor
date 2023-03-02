import { createContext } from 'react';

export const MoviesContext = createContext({
  onSaveFilm: () => {},
  onDeleteFilm: () => {},
  savedMoviesList: [],
});
