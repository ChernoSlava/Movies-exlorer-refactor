import { MovieItem } from "../types";
import { MovieItemDto } from "../types/types";

/* eslint-disable class-methods-use-this */
class MainApi {
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
    return Promise.reject(
      new Error(`Что-то упало в _checkResponse: ${res.status}`),
    );
  }

  async _request(url: string, options: RequestInit) {
    const res = await fetch(url, options);
    return this._checkResponse(res);
  }

  register(data: { email:string, password: string }) {
    return this._request(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }

  login(data: { email:string, password: string }) {
    return this._request(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }

  setToken(token: string) {
    this._headers = {...this._headers, Authorization: `Bearer ${token}`};
  }

  getUserInfoFromServer() {
    return this._request(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
    });
  }

  setUserInfoToServer({ name, email }: { name:string, email:string }) {
    return this._request(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, email }),
    });
  }

  getSavedFilms() {
    return this._request(`${this._url}/movies`, {
      headers: this._headers,
    });
  }

  deleteFilm(id: number) {
    return this._request(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    });
  }

  saveNewFilm(data: MovieItem) {
    return this._request(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailerLink: data.trailerLink,
        thumbnail: data.thumbnail,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    });
  }
}

export const mainApi = new MainApi({
  url: 'http://localhost:3001',
  headers: {
    'content-type': 'application/json',
    Authorization: '',
  },
});
