import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate  } from 'react-router-dom';

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
import {SavedMoviesContext} from '../contexts/SavedMoviesContext.js'
import {CurrentUserContext} from '../contexts/CurrentUserContext.js'

import {moviesApi} from '../utils/MoviesApi.js'
import {api} from '../utils/MainApi.js'
import * as Auth from '../utils/Auth.js';

import {headerPathsArray, footerPathsArray} from '../utils/constants.js' // пути, где применяются хедер и футер
import {moviesUrl} from '../utils/constants.js';

function App() {
  const navigate = useNavigate ();
  const currentPage = useMyLocation();

  const [isLoggedIn, setIsLoggedIn] = useState (false);
  const [user, setUser] = useState ({});
  const [regError, setRegError] = useState ('');

  const [isProfileEditOpen, setIsProfileEditOpen] = useState (false);
  const [isMobMenuOpen, setMobMenuOpen] = useState (false);

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
  .catch((err)=>setRegError(err.message));  
}

  function handleAuth (token) {
    // console.log(token)
    Auth.authorize(token)
    .then ((res)=>{
      setIsLoggedIn(true);
      setUser({name: res.name, email: res.email})
      navigate ('/movies');
    })
    .catch((err)=>console.log (`catch:${err}`));
  }

  useEffect(()=> {
    tockenChek()
  },[])
  
  function tockenChek () {
    const token = localStorage.getItem('token');
    if (token) {
      // console.log(token);
      Auth.authorize (token)
      .then((res) => {
        if(res) {
          setIsLoggedIn(true);
          setUser({name: res.name, email: res.email})
          navigate('/')
        }
      })
      .catch((err)=>console.log (`catch:${err}`))
    }
  }

  function handleSignout () {
    localStorage.clear();
    setIsLoggedIn(false);
    setUser({})
    navigate('/sign-in');
  }
  //END

  // ВЫВОД ФИЛЬМОВ ДЛЯ СТРАНИЦЫ /movies
  function findMovies (value) {
    console.log('find mov')
    console.log (value)
    setIsNotFound (false);
    setIsSearchError (false);
    setIsNoQuiery (false);
    setMovies ([]);
    let searchedMovies = [];

    if (value !== '' ) {
        setIsLoading (true);
        localStorage.setItem('searchQuiery', searchValue);
        moviesApi.getMovies()
        .then (function (res) {
          searchedMovies = res.filter((movie) => {
            let strMovie = `${movie.nameRU} ${movie.nameEN}`
            if (isShortsSearch) {
              localStorage.setItem('isShortsSearch', true);
              if (strMovie.toLowerCase().includes (value.toLowerCase()) & Math.floor(movie.duration / 40)<1) {
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
        })
        .catch((err)=>{
          console.log (`catch:${err}`);
          setIsSearchError (true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsNoQuiery (true)
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
          if (strMovie.toLowerCase().includes (value.toLowerCase()) & Math.floor(movie.duration / 40)<1) {
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
          if (Math.floor(movie.duration / 40)<1) {
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
    // console.log('from local')
    const searchQuiery = localStorage.getItem('searchQuiery');
    const searchedMovies = JSON.parse(localStorage.getItem('searchedMovies'));
    const isNotFound = JSON.parse(localStorage.getItem('isNotFound'));
    const isShortsSearch = JSON.parse(localStorage.getItem('isShortsSearch'));
  
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
    console.log('hi saved movies')
    api.getMovies()
    .then (function (res) {
      setSavedMovies(res)
    })
    .catch((err)=>console.log (`catch:${err}`));
  }, [])

  
  function handleSubmit (request) {
    request()
    .then()
    .catch((err)=>setRegError(err.message)); 
  }

  function savedMoveCheck (movie, savedMovies) {
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
    const searchResult = savedMoveCheck(movie, savedMovies).searchResult;
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
        setUser({name: values.name, email: values.email})
      })
      }
    handleSubmit (makeRequest);
  }  
  //END
 

  return (
    <CurrentUserContext.Provider value={user}>
    <SavedMoviesContext.Provider value={savedMovies}>
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
              savedMoveCheck = {savedMoveCheck}
              savedMovies = {savedMovies}
            />}/>
            <Route path="/saved-movies" element={<ProtectedRouteElement
              element = {UserMovies}
              isShortsSearch = {isShortsSavedSearch}
              setIsShortsSearch = {setIsShortsSavedSearch}
              onDeleteMovie = {handleDeleteMovie}
              isLoggedIn = {isLoggedIn}
              savedMoveCheck = {savedMoveCheck}
              savedMovies = {savedMovies}
              handleSearchSubmit= {findSavedMovies}
              searchValue = {searchSavedValue}
              setSearchValue = {setSearcSavedhValue}
              searchedMovies = {searchedMovies}
              isNotFound = {isNotFoundSaved}
              setIsNotFound = {setIsNotFoundSaved}
              isNoQuiery = {isNoQuierySaved}
              setIsNoQuiery = {setIsNoQuierySaved}


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
            />}/>
            <Route path="/signin" element={<Login
              onLogin = {handleLogin}
              regError = {regError} 
              setRegError = {setRegError}
              />}/>
            <Route path="/signup" element={<Register
              onRegister = {handleRegister}
              regError = {regError} 
              setRegError = {setRegError}
            />} 
            />
          </Routes>
          {footerPathsArray.indexOf(currentPage.pathname) >= 0 && <Footer/>}
        </div>
      </div>
    </SavedMoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
