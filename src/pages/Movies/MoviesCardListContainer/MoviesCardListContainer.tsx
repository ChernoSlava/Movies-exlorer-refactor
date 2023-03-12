import React from 'react';
import { useLocation } from 'react-router-dom';

import { MoviesCardList } from '../../../components';
import { ROUTER_PATH } from '../../../constants';
import { movieData } from '../../../components/MoviesCard';

export const MoviesCardListContainer: React.FC<{
  onSaveFilm?: () => void;
  onDeleteFilm: () => void;
  items: Array<movieData>;
}> = ({
  onSaveFilm,
  onDeleteFilm,
  items
}): JSX.Element => {
    const location = useLocation();

    return (
      <MoviesCardList
        canPaged={location.pathname === ROUTER_PATH.MOVIES}
        onSaveFilm={onSaveFilm}
        onDeleteFilm={onDeleteFilm}
        items={items}
      />
    );
  }
