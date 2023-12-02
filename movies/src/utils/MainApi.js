class Api {
  constructor (config) {
    this._url = config.url;
    this._headers = config.headers;
    this._authorization = localStorage.getItem('token');
  }

  getToken() {
    console.log(this._authorization)
  }
 
  getMovies () {
    // console.log(this._authorization)
    return this._request (`${this._url}/movies`,
    {
      headers: {
        authorization: `Bearer ${this._authorization}`,
        'Content-type': 'application/json'
      },
    })
  }

  saveMovie (movie, imageLink, imageThumbnail) {
    // console.log(this._authorization)
    return this._request (`${this._url}/movies`,
    {
      method: 'POST',
      headers: {
        authorization: `Bearer ${this._authorization}`,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: imageLink,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: imageThumbnail,
        movieId: movie.id
      })
    })
  }

  deleteMovie (movieId) {
    return this._request (`${this._url}/movies/${movieId}`,
    {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${this._authorization}`,
        'Content-type': 'application/json'
      }
    })
  }

  updateMyUser (email, name) {
    console.log(this._authorization)
    return this._request (`${this._url}/users/me`,
    {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${this._authorization}`,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email:email,
        name:name
      })
    })
  }

  
  // _handleResponse (res) {
  //   if (res.ok) {
  //     return res.json()
  //    } else {
  //      return Promise.reject(`Ошибка: ${res.status}`)
  //    }
  // }

  // _request (url, options) {
  //   return fetch(url, options).then(this._handleResponse)
  // }
  
  _request (url, options) {
    let resStatus = ''
    let result = {} 
    return fetch(url, options)
    .then((res) => {
      // console.log(res)
      resStatus = res.ok
      // console.log(resStatus);
      return res.json();
    })
    .then ((data) => {
      result = data
      // console.log(data);
    })
    .then(()=>{
      // console.log(resStatus);
      if (resStatus) {
        return result;
      } else {
        return Promise.reject(result);
      }
    })
  }
} 

export const api = new Api ({
  url: 'https://api.tumanova.nomoredomainsrocks.ru',
  headers: {
    'Accept':'application/json',
    'Content-Type':'application/json',
  }
})