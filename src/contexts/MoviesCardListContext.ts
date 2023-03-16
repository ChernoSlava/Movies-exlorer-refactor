import { createContext } from 'react';

export const MoviesCardListContext = createContext<{
  items: [],
  onDeleteFilm: () => void,
  onSaveFilm: () => void,
}>({
  items: [],
  onDeleteFilm: () => {},
  onSaveFilm: () => {},
});
