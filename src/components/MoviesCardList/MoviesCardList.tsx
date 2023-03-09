import React, { useEffect, useState } from 'react';

import { movieData, MoviesCard } from '../MoviesCard';

import { ADD_CARDS, FEATURED_CARDS, SCREEN_SIZE } from './constants';
import {
  MoviesCardButton,
  MoviesCardListElement,
  MoviesCardListNothing,
  MoviesCardListStyled,
} from './styled';

export const MoviesCardList: React.FC<{
  onSaveFilm: () => void;
  onDeleteFilm?: () => void;
  items: Array<movieData>;
  canPaged: boolean;
}> = ({ onSaveFilm, onDeleteFilm, items, canPaged }): JSX.Element => {
  const [currentPage, setNextPage] = useState(0);
  const [sizeScreen, setSizeSreen] = useState({ width: window.innerWidth });
  const [pageSize, setPageSize] = useState(0);

  const isNothingText = items.length === 0 && (
    <MoviesCardListNothing>Ничего не найдено</MoviesCardListNothing>
  );

  const takeWidthScreen = () => {
    setSizeSreen({
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', takeWidthScreen);

    return () => {
      window.removeEventListener('resize', takeWidthScreen);
    };
  }, [sizeScreen]);

  useEffect(() => {
    const win = sizeScreen.width;
    if (win > SCREEN_SIZE.MIDDLE) {
      setPageSize(FEATURED_CARDS.LARGE);
    } else if (win > SCREEN_SIZE.LITTLE) {
      setPageSize(FEATURED_CARDS.MEDIUM);
    } else {
      setPageSize(FEATURED_CARDS.SMALL);
    }
  }, [sizeScreen.width]);

  return (
    <MoviesCardListStyled>
      {isNothingText}
      <MoviesCardListElement>
        {(canPaged ? items.slice(0, pageSize + currentPage) : items).map(
          movie => (
            <MoviesCard
              key={movie.id || movie._id}
              onDeleteFilm={onDeleteFilm}
              onSaveFilm={onSaveFilm}
              movie={movie}
            />
          ),
        )}
      </MoviesCardListElement>
      {canPaged ? (
        <MoviesCardButton
          type="button"
          onClick={() => {
            if (sizeScreen.width <= SCREEN_SIZE.MIDDLE) {
              setNextPage(currentPage + ADD_CARDS.MIN);
            } else {
              setNextPage(currentPage + ADD_CARDS.MAX);
            }
          }}>
          Ещё
        </MoviesCardButton>
      ) : null}
    </MoviesCardListStyled>
  );
}
