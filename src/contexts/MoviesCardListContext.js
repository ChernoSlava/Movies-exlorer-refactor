import { createContext } from 'react';

export const MoviesCardListContext = createContext({
  items: [],
  onDeleteFilm: () => {},
  onSaveFilm: () => {},
});
