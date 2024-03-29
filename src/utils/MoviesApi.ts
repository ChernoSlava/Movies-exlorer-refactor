import { MovieList } from "../types";

/* eslint-disable class-methods-use-this */
class MoviesApi {
  private _url: string;
  private _headers: HeadersInit;
  constructor({ url, headers }: {url: string, headers: HeadersInit}) {
    this._url = url;
    this._headers = headers;
  }

  _checkResponse(res: Response) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Что-то упало: ${res.status}`));
  }

  getAllMovies() {
    return fetch(`${this._url}`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

export const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
});
