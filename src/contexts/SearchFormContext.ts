import { createContext } from 'react';

export const SearchFormContext = createContext<{
  onSearch: (values: { [key in string]?: string }) => void;
  handleShortMovies?: () => void,
  isShortMovies: boolean,
}>({
  onSearch: () => { },
  handleShortMovies: () => { },
  isShortMovies: false,
});
