import React from 'react';

import {
  MoviesCardButton,
  MoviesCardInfo,
  MoviesCardPoster,
  MoviesCardStyled,
  MoviesCardTextContainer,
  MoviesCardTime,
  MoviesCardTitle,
  MoviesCardTrailer,
} from './styled';

export type movieData = {
  id?: number;
  _id?: number;
  nameEN?: string;
  director?: string;
  country?: string;
  year?: string;
  duration?: number;
  description?: string;
  created_at?: string;
  updated_at?: string;
  thumbnail?: string;
  trailerLink: string;
  nameRU: string;
  image: string;
  durationText: string;
  buttonType: string;
  isLiked: boolean;
};

export const MoviesCard: React.FC<{
  movie: movieData;
  onSaveFilm?: (movie: movieData) => void;
  onDeleteFilm: (movie: movieData) => void;
  isSave?: boolean;
  isDelete?: boolean;
}> = ({ movie, onSaveFilm, onDeleteFilm }): JSX.Element => {
  const handleLike = () => {
    onSaveFilm(movie);
  };

  const handleDelete = () => {
    onDeleteFilm(movie);
  };
  const { trailerLink, nameRU, image, durationText, buttonType, isLiked } =
    movie;
  return (
    <MoviesCardStyled>
      <MoviesCardTrailer href={trailerLink} target="_blank" rel="noreferrer">
        <MoviesCardPoster alt={nameRU} src={image} />
      </MoviesCardTrailer>
      <MoviesCardInfo>
        <MoviesCardTextContainer>
          <MoviesCardTitle>{nameRU}</MoviesCardTitle>
          <MoviesCardTime>{durationText}</MoviesCardTime>
        </MoviesCardTextContainer>
        {buttonType === 'like' ? (
          <MoviesCardButton
            type="button"
            aria-label="like"
            onClick={isLiked ? handleDelete : handleLike}
            isSave={isLiked}
          />
        ) : (
          <MoviesCardButton
            type="button"
            aria-label="dislike"
            onClick={handleDelete}
            isDelet
          />
        )}
      </MoviesCardInfo>
    </MoviesCardStyled>
  );
};
