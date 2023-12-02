import React from 'react';
import { useState, useEffect, useRef } from 'react';
import SearchForm from './SearchForm.js';
import MoviesCardList from './MoviesCardList.js';
import NoResult from './NoResult.js';
import {SavedMoviesContext} from '../contexts/SavedMoviesContext.js'

function UserMovies({isShortsSearch, setIsShortsSearch,  
  handleSearchSubmit, searchValue, setSearchValue,  
  isNotFound, setIsNotFound, isNoQuiery, setIsNoQuiery, 
  onSaveMovie, onDeleteMovie, checkSavedMovies, searchedMovies, getSavedMovies}) {

  const savedMovies = React.useContext(SavedMoviesContext);
  
  const  [displayMovies, setDisplayMovies] = useState ([]);

  useEffect (()=>{
    getSavedMovies()
  }, [])

  useEffect (()=>{
    if(searchValue) {
      handleSearchSubmit (searchValue);
    }
  }, [savedMovies])


  useEffect (()=>{
    if (searchedMovies.length === 0 && !isNotFound && !isShortsSearch) {
      setDisplayMovies (savedMovies)
    } else {
      setDisplayMovies (searchedMovies)
    }
  }, [savedMovies, searchedMovies])
  
  useEffect (()=>{
    setSearchValue ('');
    setIsNotFound (false);
    setIsNoQuiery (false);
    setIsShortsSearch(false)
  }, [])  

  let checkbox = useRef ({isShortsSearch})

  function handleChechboxClick () {
    setIsShortsSearch (!isShortsSearch)
    checkbox.current = isShortsSearch;
  }

  return (
      <main className='page__padding page__padding_movie'>

        <SearchForm 
        isShortsSearch={isShortsSearch}
        handleSearchSubmit = {handleSearchSubmit}
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
        handleChechboxClick = {handleChechboxClick}
        checkbox = {checkbox}/>
    
        <NoResult
        isNotFound = {isNotFound}
        isNoQuiery = {isNoQuiery}/>
        <MoviesCardList
        displayMovies = {displayMovies}
        onSaveMovie={onSaveMovie}
        onDeleteMovie={onDeleteMovie}
        checkSavedMovies = {checkSavedMovies}
        savedMovies = {savedMovies}
        />
      </main>
  );
}

export default UserMovies;