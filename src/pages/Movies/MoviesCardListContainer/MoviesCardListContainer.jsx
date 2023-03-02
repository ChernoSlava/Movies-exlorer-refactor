import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes, { objectOf } from 'prop-types';

import { MoviesCardList } from '../../../components';
import { ROUTER_PATH } from '../../../constants';

export function MoviesCardListContainer({ onSaveFilm, onDeleteFilm, items }) {
  const location = useLocation(); // Вынести при переносе в компоненты

  // const isMovies = isMoviesLocation && items.length > currentPage + pageSize;

  return (
    <MoviesCardList
      canPaged={location.pathname === ROUTER_PATH.MOVIES}
      onSaveFilm={onSaveFilm}
      onDeleteFilm={onDeleteFilm}
      items={items}
    />
  );
}
MoviesCardListContainer.propTypes = {
  onSaveFilm: PropTypes.func,
  onDeleteFilm: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(objectOf).isRequired,
};
MoviesCardListContainer.defaultProps = {
  onSaveFilm: PropTypes.func,
};
