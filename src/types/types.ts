export type MovieThumbnail = {
  url: string;
}
export type MovieImage = {
  formats: ImageFormats;
  url: string;
}
export type ImageFormats = {
  thumbnail: MovieThumbnail;
}
export type MovieItemDto = {
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
  trailerLink: string;
  nameRU: string;
  image: MovieImage | string;
  movieId: number;
};

export type MovieItem = MovieItemDto & {
  isLiked: boolean;
  buttonType: string;
  durationText: string;
  thumbnail?: string;
};

export type MovieListDto = Array<MovieItemDto>

export type MovieList = Array<MovieItem>

