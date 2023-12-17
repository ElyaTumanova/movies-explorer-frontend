import React from 'react';
import { useState, useEffect, useRef } from 'react';
import SearchForm from './SearchForm';
import MoviesCardList from './MoviesCardList';
import Preloader from './Preloader';
import NoResult from './NoResult';

import {screenWidthDesktop, screenWidthMobile,
  moviesInRowDesktop, moviesInRowTablet, moviesInRowMobile,
  moviesAmountDesktop, moviesAmountTablet, moviesAmountMobile} from '../utils/constants.js';


function Movies({isShortsSearch, setIsShortsSearch, movies, 
  handleSearchSubmit, searchValue, setSearchValue, isLoading, 
  isNotFound, isSearchError, isNoQuiery, onSaveMovie, onDeleteMovie, checkSavedMovies}) {

  const [moviesInRow, setMoviesInRow] = useState(0);
  const [displayMoviesAmount, setDisplayMoviesAmount] = useState(0);
  const [displayMovies, setDisplayMovies] = useState ([]);
  const [isDisabled, setIsDisabled] = useState (false);
    
  useEffect (()=>{
    setIsDisabled(false)
    // console.log(`isLoading ${isLoading}`)
    // console.log(`isDisabled ${isDisabled}`)
  },[searchValue, movies])
  
  // ФУНКЦИОНАЛЬНОСТЬ ДЛЯ ОПРЕДЕЛЕНИЯ КОЛ-ВА ВЫВОДИМЫХ КАРТОЧЕК НА СТРАНИЦЕ
  function findMoviesInRow (screenWidth) {
    // console.log ('findMoviesInRow')
    if (screenWidth > screenWidthDesktop) {
      setMoviesInRow (moviesInRowDesktop);
    } else if (screenWidthMobile < screenWidth <= screenWidthDesktop) {
      setMoviesInRow (moviesInRowTablet);
    } else {
      setMoviesInRow (moviesInRowMobile);
    }
  }

  function findDisplayMovies (screenWidth) {
    // console.log ('findMoviesRows')
    if (screenWidth > screenWidthDesktop) {
      setDisplayMoviesAmount (moviesAmountDesktop);
    } else if (screenWidthMobile < screenWidth <= screenWidthDesktop) {
      setDisplayMoviesAmount (moviesAmountTablet);
    } else {
      setDisplayMoviesAmount (moviesAmountMobile);
    }
  }

  let screenWidth = window.innerWidth;
  // console.log(screenWidth)
  useEffect (()=> {
    // console.log('find')
    findMoviesInRow(screenWidth);
    findDisplayMovies(screenWidth);
  }, [])


  function loadMore () {
    // console.log('loadMore')
    setDisplayMoviesAmount((Math.ceil(displayMoviesAmount/moviesInRow)+1)*moviesInRow);
  }
  
  let timer = setTimeout(() => {}, 10);
  window.addEventListener('resize', (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      let screenWidth = window.innerWidth;
      findMoviesInRow(screenWidth);
    }, 500);
  });

  

  useEffect (()=> {
    setDisplayMovies(movies.slice(0, displayMoviesAmount))
  }, [movies, displayMoviesAmount])

  // console.log(displayMovies)
  
  // END

  let checkbox = useRef ({isShortsSearch})

  function handleChechboxClick () {
    setIsShortsSearch (!isShortsSearch)
    localStorage.setItem('isShortsSearch', !isShortsSearch);
    checkbox.current = isShortsSearch;
  }
 

  return (
    <main className='page__padding page__padding_movie'>
      <SearchForm 
      isShortsSearch={isShortsSearch}
      setIsShortsSearch = {setIsShortsSearch}
      handleSearchSubmit = {handleSearchSubmit}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      handleChechboxClick = {handleChechboxClick}
      checkbox = {checkbox}
      isLoading={isLoading}
      isDisabled={isDisabled}
      setIsDisabled={setIsDisabled}/>
      <Preloader
      isLoading={isLoading}/>
      <NoResult
      isNotFound = {isNotFound}
      isSearchError = {isSearchError}
      isNoQuiery = {isNoQuiery}/>
      <MoviesCardList
      displayMovies = {displayMovies}
      onSaveMovie={onSaveMovie}
      onDeleteMovie={onDeleteMovie}
      checkSavedMovies = {checkSavedMovies}
      />

      {displayMoviesAmount < movies.length ?
      <button className="movies__loadmore" type='button' onClick={loadMore}>Ещё</button>
      : ''
      }
    </main>
  );
}

export default Movies;