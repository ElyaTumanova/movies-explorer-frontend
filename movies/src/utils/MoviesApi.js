import {moviesUrl} from '../utils/constants.js'

class MoviesApi {
  constructor (config) {
    this._url = config.url;
    this._headers = config.headers;
    // this._authorization = localStorage.getItem('token');
  }

  getMovies () {
    return fetch (`${this._url}`,
    {
      headers: {
        // authorization: `Bearer ${this._authorization}`,
        'Content-type': 'application/json'
      },
    })
    .then(this._handleResponse)
  }
  


  _handleResponse (res) {
    if (res.ok) {
      return res.json()
     } else {
       return Promise.reject(`Ошибка: ${res.status}`)
     }
  }
}


export const moviesApi = new MoviesApi ({
  url: `${moviesUrl}/beatfilm-movies`,
  headers: {
    'Accept':'application/json',
    'Content-Type':'application/json',
  }
})