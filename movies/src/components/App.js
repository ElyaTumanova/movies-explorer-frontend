import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';

import { useMyLocation } from '../hooks/useMyLocation.js';

import Header from './Header';
import Main from './Main';
import Movies from './Movies';
import UserMovies from './UserMovies.js';
import Footer from './Footer';
import Profile from './Profile';
import Login from './Login';
import Register from './Register';
import PageNotFound from './PageNotFound';
import ProtectedRouteElement from './ProtectedRoute';
import ProtectedRouteElementLogin from './ProtectedRouteLogin.js';
import {SavedMoviesContext} from '../contexts/SavedMoviesContext.js'
import {CurrentUserContext} from '../contexts/CurrentUserContext.js'

import {moviesApi} from '../utils/MoviesApi.js'
import {api} from '../utils/MainApi.js'
import * as Auth from '../utils/Auth.js';

import {headerPathsArray, footerPathsArray} from '../utils/constants.js' // пути, где применяются хедер и футер
import {moviesUrl, shortMovieDuration} from '../utils/constants.js';

function App() {
  const navigate = useNavigate ();
  const currentPage = useMyLocation();

  const [isLoggedIn, setIsLoggedIn] = useState (false);
  const [isTokenChecked, setIsTokenCheked] = useState (false);

  const [user, setUser] = useState ({});
  const [regError, setRegError] = useState ('');
  const [regSuccess, setRegSuccess] = useState ('');

  const [isProfileEditOpen, setIsProfileEditOpen] = useState (false);
  const [isMobMenuOpen, setMobMenuOpen] = useState (false);

  const [beatFilms, setBeatFilms] = useState ([]);
  const [movies, setMovies] = useState ([]);
  const [savedMovies, setSavedMovies] = useState ([]);
  const [searchedMovies, setSearchedMovies] = useState ([]);

  const [isShortsSearch, setIsShortsSearch] = useState (false);
  const [isShortsSavedSearch, setIsShortsSavedSearch] = useState (false);

  const [isLoading, setIsLoading] = useState (false);
  const [isNotFound, setIsNotFound] = useState (false);
  const [isSearchError, setIsSearchError] = useState (false);
  const [isNoQuiery, setIsNoQuiery] = useState (false);
  
  const [isNotFoundSaved, setIsNotFoundSaved] = useState (false);
  const [isNoQuierySaved, setIsNoQuierySaved] = useState (false);

  const [searchValue, setSearchValue] = useState('');
  const [searchSavedValue, setSearcSavedhValue] = useState('');


  //useEffect
  
  // console.log (`isTokenChecked ${isTokenChecked}`)
  useEffect(()=> {
    console.log('hi app')
    checkToken()
  },[])

  function handleMenuMobOpen () {
    setMobMenuOpen (true)
  };

  function handleMenuMobClose () {
    setMobMenuOpen (false)
  };
  
// РЕГИСТРАЦИЯ И АВТОРИЗАЦИЯ

function handleRegister (values) {
  const {name, email, password} = values;
  Auth.register(name, email, password)
  .then (()=> {
    handleLogin (email, password)
  })
  .catch((err)=>{
    // console.log(err.message)
    setRegError (err.message)
  })
}

function handleLogin (email, password) {
    Auth.login(email, password)
    .then((data) => {
      // console.log(data.token);
      const token = data.token;
      localStorage.setItem('token', token);
      handleAuth (token);
    })
    // .then(()=>api.getToken())
    .catch((err)=>setRegError(err.message));
}

  function handleAuth (token) {
    console.log('hi handleauth')
    // console.log(token)
    Auth.authorize(token)
    .then ((res)=>{
      setIsTokenCheked (true);
      setIsLoggedIn(true);
      setUser({name: res.name, email: res.email})
      checkToken();
      navigate ('/movies');
    })
    .catch((err)=>console.log (`catch:${err}`));
  }

  
  function checkToken () {
    console.log('hi token')
    const token = localStorage.getItem('token');
    // if (token) {
      Auth.authorize (token)
      .then((res) => {
        if(res) {
          console.log('hi auth')
          setIsLoggedIn(true);
          setUser({name: res.name, email: res.email})
          // navigate('/')
          setIsTokenCheked (true);
        }
      })
      .catch((err)=>{
        console.log('tockenchek failed')
        setIsTokenCheked (true);
        console.log (`catch:${err}`)})
    // }
  }

  function handleSignout () {
    console.log('signout')
    localStorage.clear();
    setIsLoggedIn(false);
    setUser({});
    setSearchValue('');
    navigate('/sign-in');
  }
  //END



  // ВЫВОД ФИЛЬМОВ ДЛЯ СТРАНИЦЫ /movies
  function findMovies (value) {
    console.log('find mov')
    console.log(`value ${value}`)
    setIsNotFound (false);
    setIsSearchError (false);
    setIsNoQuiery (false);
    setMovies ([]);
    localStorage.setItem('searchQuiery', value);

    if (value !== '' ) {
      if (beatFilms.length === 0) {
        setIsLoading (true);
        console.log('getting beatfilms')
        moviesApi.getMovies()
        .then (function (res) {
          filterMovies (res, value)
          setBeatFilms (res)
        })
        .catch((err)=>{
          console.log (`catch:${err}`);
          setIsSearchError (true);
        })
        .finally(() => {
          setIsLoading(false);
        });
      } else {
        filterMovies (beatFilms, value)
      }
    } else {
      setIsNoQuiery (true)
      setMovies([]);
      localStorage.removeItem('searchedMovies')
    }
  }

  // поиск фильмов с учетом критериев
  function filterMovies (movies, value) {
    let searchedMovies = [];
    searchedMovies = movies.filter((movie) => {
      let strMovie = `${movie.nameRU} ${movie.nameEN}`
      if (isShortsSearch) {
        localStorage.setItem('isShortsSearch', true);
        if (strMovie.toLowerCase().includes (value.toLowerCase()) & Math.floor(movie.duration / shortMovieDuration)<1) {
          return movie;
        }
      } else {
        localStorage.setItem('isShortsSearch', false);
        if (strMovie.toLowerCase().includes (value.toLowerCase())) {
          return movie;
        }
      }
    })
    setMovies(searchedMovies);
    localStorage.setItem('searchedMovies', JSON.stringify (searchedMovies));
    if (searchedMovies.length === 0) {
      setIsNotFound (true);
      localStorage.setItem('isNotFound', true);
    } else {
      localStorage.setItem('isNotFound', false);
    }
  }


  function findSavedMovies (value) {
    // console.log('find save mov')
    setIsNotFoundSaved (false);
    setIsNoQuierySaved (false);
    let searchedMovies = [];
    if (value !== '' ) {
      searchedMovies = savedMovies.filter((movie) => {
        let strMovie = `${movie.nameRU} ${movie.nameEN}`
        if (isShortsSavedSearch) {
          if (strMovie.toLowerCase().includes (value.toLowerCase()) & Math.floor(movie.duration / shortMovieDuration)<1) {
            return movie;
          }
        } else {
          if (strMovie.toLowerCase().includes (value.toLowerCase())) {
            return movie;
          }
        }
      })
      setSearchedMovies(searchedMovies);
      if (searchedMovies.length === 0) {
        setIsNotFoundSaved (true);
      } 
    } else {
      if (isShortsSavedSearch) {
        searchedMovies = savedMovies.filter((movie) => {
          if (Math.floor(movie.duration / shortMovieDuration)<1) {
            return movie;
          }
        })
        setSearchedMovies(searchedMovies);
        if (searchedMovies.length === 0) {
          setIsNotFoundSaved (true);
        }
      } else {
        setIsNoQuierySaved (true)
        setSearchedMovies ([])
      }
    } 
  }
  //END

  // ВЫВОД ФИЛЬМОВ ДЛЯ СТРАНИЦЫ /movies при первой загрузке на основании localStorage

  useEffect (()=> {
    console.log('from local')
    const searchQuiery = localStorage.getItem('searchQuiery');
    const searchedMovies = JSON.parse(localStorage.getItem('searchedMovies'));
    const isNotFound = JSON.parse(localStorage.getItem('isNotFound'));
    const isShortsSearch = JSON.parse(localStorage.getItem('isShortsSearch'));
  
    // console.log (searchQuiery);

    if (searchQuiery) {
      setSearchValue(searchQuiery);
    }
    if (searchedMovies) {
      setMovies(searchedMovies);
    }
    if (isNotFound) {
      setIsNotFound(isNotFound);
    }
    if (isShortsSearch) {  
      setIsShortsSearch(isShortsSearch);
    }
  }, [])
  //END


  // РАБОТА С MAIN API

  useEffect (()=>{  
    getSavedMovies();
  }, [])

  function getSavedMovies () {
    console.log('hi saved movies')
    api.getMovies()
    .then (function (res) {
      setSavedMovies(res)
    })
    .catch((err)=>console.log (`catch:${err}`));
  }

  
  function handleSubmit (request) {
    request()
    .then()
    .catch((err)=>setRegError(err.message)); 
  }


  function checkSavedMovies (movie, savedMovies) {
    const searchKey = `${movie.nameRU}`;
    let movieCheck = {searchResult:false, movieId:''}
    savedMovies.forEach((m)=>{
      if (m.nameRU === searchKey) {
        return movieCheck = {searchResult:true, movieId:m._id};
      }
    })
    return movieCheck
  }

  function handleSaveMovie (movie) {
    console.log('hi its savemov')
    const searchResult = checkSavedMovies(movie, savedMovies).searchResult;
    if (!searchResult) {
      const imageLink = `${moviesUrl}${movie.image.url}`
      const imageThumbnail = `${moviesUrl}${movie.image.formats.thumbnail.url}`
      function makeRequest () {
        return api.saveMovie(movie, imageLink, imageThumbnail)
        .then(function(res) {
          setSavedMovies([res, ...savedMovies]);
        })
      }
      handleSubmit (makeRequest);
    }   
  } 

  function handleDeleteMovie (movieId) {
    function makeRequest () {
      return api.deleteMovie(movieId)
      .then(function(res) {
        setSavedMovies((state) => state.filter((c) => c._id != movieId));
      })
    }
    handleSubmit (makeRequest);
  }

  function onUpdateUser (values) {
    function makeRequest () {
      return api.updateMyUser (values.email, values.name)
      .then(function(res) {
        setUser({name: res.name, email: res.email})
        setRegSuccess ('Профиль успешно обновлен')
      })
      }
    handleSubmit (makeRequest);
  }  
  //END
 

  return (
    <CurrentUserContext.Provider value={user}>
    <SavedMoviesContext.Provider value={savedMovies}>
          { isTokenChecked === true ?
      <div className="App">
        <div className="page">
          {headerPathsArray.indexOf(currentPage.pathname) >= 0 && <Header
            isLoggedIn = {isLoggedIn}
            isOpen={isMobMenuOpen}
            onClickMobClose={handleMenuMobClose}
            onClickMobOpen = {handleMenuMobOpen}/>}
          <Routes>
            <Route path="*" element={<PageNotFound/>}/>
            <Route path="/" element={<Main />} />
            <Route path="/signin" element={<ProtectedRouteElementLogin
              element = {Login}
              isLoggedIn = {isLoggedIn}
              onLogin = {handleLogin}
              regError = {regError} 
              setRegError = {setRegError}
              />}/>
            <Route path="/signup" element={<ProtectedRouteElementLogin
              element = {Register}
              isLoggedIn = {isLoggedIn}
              onRegister = {handleRegister}
              regError = {regError} 
              setRegError = {setRegError}
            />}/>

        
              <Route path="/movies" element= {<ProtectedRouteElement
                element = {Movies}
                isShortsSearch = {isShortsSearch}
                setIsShortsSearch = {setIsShortsSearch}
                movies = {movies}
                handleSearchSubmit = {findMovies}
                searchValue = {searchValue}
                setSearchValue = {setSearchValue}
                isLoading = {isLoading}
                isNotFound = {isNotFound}
                isSearchError = {isSearchError}
                isNoQuiery = {isNoQuiery}
                isLoggedIn = {isLoggedIn}
                onSaveMovie = {handleSaveMovie}
                onDeleteMovie = {handleDeleteMovie}
                checkSavedMovies = {checkSavedMovies}
                savedMovies = {savedMovies}
              />}/>

              <Route path="/saved-movies" element={<ProtectedRouteElement
                element = {UserMovies}
                isShortsSearch = {isShortsSavedSearch}
                setIsShortsSearch = {setIsShortsSavedSearch}
                onDeleteMovie = {handleDeleteMovie}
                isLoggedIn = {isLoggedIn}
                checkSavedMovies = {checkSavedMovies}
                savedMovies = {savedMovies}
                handleSearchSubmit= {findSavedMovies}
                searchValue = {searchSavedValue}
                setSearchValue = {setSearcSavedhValue}
                searchedMovies = {searchedMovies}
                isNotFound = {isNotFoundSaved}
                setIsNotFound = {setIsNotFoundSaved}
                isNoQuiery = {isNoQuierySaved}
                setIsNoQuiery = {setIsNoQuierySaved}
                getSavedMovies = {getSavedMovies}
              />} />

              <Route path="/profile" element={<ProtectedRouteElement
                element = {Profile}
                isProfileEditOpen={isProfileEditOpen}
                setIsProfileEditOpen = {setIsProfileEditOpen}
                isLoggedIn = {isLoggedIn}
                handleSignout = {handleSignout}
                onUpdateUser = {onUpdateUser}
                regError = {regError}
                setRegError = {setRegError}
                regSuccess = {regSuccess}
                setRegSuccess = {setRegSuccess}
              />}/>            
           
          </Routes>
          {footerPathsArray.indexOf(currentPage.pathname) >= 0 && <Footer/>}
        </div>
      </div>

          : ''  
          }
    </SavedMoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
