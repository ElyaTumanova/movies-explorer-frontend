import React from 'react';
import { useState, useEffect, useRef } from 'react';
import SearchForm from './SearchForm';
import MoviesCardList from './MoviesCardList';
import Preloader from './Preloader';
import NoResult from './NoResult';



function Movies({isShortsSearch, setIsShortsSearch, movies, 
  handleSearchSubmit, searchValue, setSearchValue, isLoading, 
  isNotFound, isSearchError, isNoQuiery, onSaveMovie, onDeleteMovie, savedMoveCheck}) {

  // ФУНКЦИОНАЛЬНОСТЬ ДЛЯ ОПРЕДЕЛЕНИЯ КОЛ-ВА ВЫВОДИМЫХ КАРТОЧЕК НА СТРАНИЦЕ
  const [moviesInRow, setMoviesInRow] = useState(0);
  const [displayMoviesAmount, setDisplayMoviesAmount] = useState(0);

  function findMoviesInRow (screenWidth) {
    // console.log ('findMoviesInRow')
    if (screenWidth > 1051) {
      setMoviesInRow (3);
    } else if (480 < screenWidth <= 1051) {
      setMoviesInRow (2);
    } else {
      setMoviesInRow (1);
    }
  }

  function findDisplayMovies (screenWidth) {
    // console.log ('findMoviesRows')
    if (screenWidth > 1051) {
      setDisplayMoviesAmount (12);
    } else if (480 < screenWidth <= 1051) {
      setDisplayMoviesAmount (8);
    } else {
      setDisplayMoviesAmount (5);
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

  const  [displayMovies, setDisplayMovies] = useState ([]);

  useEffect (()=> {
    setDisplayMovies(movies.slice(0, displayMoviesAmount))
  }, [movies, displayMoviesAmount])

  console.log(displayMovies)
  
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
      checkbox = {checkbox}/>
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
      savedMoveCheck = {savedMoveCheck}
      />

      {displayMoviesAmount < movies.length ?
      <button className="movies__loadmore" type='button' onClick={loadMore}>Ещё</button>
      : ''
      }
    </main>
  );
}

export default Movies;