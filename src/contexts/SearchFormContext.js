import { createContext } from 'react';

export const SearchFormContext = createContext({
  onSearch: () => {},
  handleShortMovies: () => {},
  isShortMovies: false,
});
