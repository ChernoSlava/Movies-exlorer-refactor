import React from 'react';
import PropTypes from 'prop-types';

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

export function MoviesCard({ movie, onSaveFilm, onDeleteFilm }) {
  const handleLike = () => {
    onSaveFilm(movie);
  };

  const handleDelete = () => {
    onDeleteFilm(movie);
  };

  return (
    <MoviesCardStyled>
      <MoviesCardTrailer
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer">
        <MoviesCardPoster alt={movie.nameRU} src={movie.image} />
      </MoviesCardTrailer>
      <MoviesCardInfo>
        <MoviesCardTextContainer>
          <MoviesCardTitle>{movie.nameRU}</MoviesCardTitle>
          <MoviesCardTime>{movie.durationText}</MoviesCardTime>
        </MoviesCardTextContainer>
        {movie.buttonType === 'like' ? (
          <MoviesCardButton
            type="button"
            aria-label="like"
            onClick={movie.isLiked ? handleDelete : handleLike}
            save={movie.isLiked}
          />
        ) : (
          <MoviesCardButton
            type="button"
            aria-label="dislike"
            onClick={handleDelete}
            delet
          />
        )}
      </MoviesCardInfo>
    </MoviesCardStyled>
  );
}

MoviesCard.propTypes = {
  movie: PropTypes.object.isRequired,
  onSaveFilm: PropTypes.func,
  onDeleteFilm: PropTypes.func.isRequired,
};
MoviesCard.defaultProps = {
  onSaveFilm: () => {},
};
