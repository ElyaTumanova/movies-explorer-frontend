import React from 'react';
import { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import MoviesCardList from './MoviesCardList';


function Movies({isShortsSearch, movies, loadMore}) {
  //console.log(movies)
  const [moviesInRow, setMoviesInRow] = useState(0);
  const [moviesRows, setMoviesRows] = useState(0);
  const [displayMovies, setDisplayMovies] = useState(0);

  function findMoviesInRow (screenWidth) {
    console.log ('findMoviesInRow')
    if (screenWidth > 1051) {
      setMoviesInRow (3);
    } else if (480 < screenWidth <= 1051) {
      setMoviesInRow (2);
    } else {
      setMoviesInRow (1);
    }
  }

  function findDisplayMovies (screenWidth) {
    console.log ('findMoviesRows')
    if (screenWidth > 1051) {
      setDisplayMovies (12);
    } else if (480 < screenWidth <= 1051) {
      setDisplayMovies (8);
    } else {
      setDisplayMovies (5);
    }
  }

  let screenWidth = window.innerWidth;
  console.log(screenWidth)
  useEffect (()=> {
    console.log('find')
    findMoviesInRow(screenWidth);
    findDisplayMovies(screenWidth);
  }, [])

  // useEffect (()=> {
  //   console.log('setDisplayMovies')
  //   setDisplayMovies (moviesInRow*Math.ceil(displayMovies/moviesInRow)); 
  // }, [])

  function loadMore () {
    console.log('loadMore')
    setDisplayMovies((Math.ceil(displayMovies/moviesInRow)+1)*moviesInRow);
  }
  
  let timer = setTimeout(() => {}, 10);
  window.addEventListener('resize', (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      let screenWidth = window.innerWidth;
      findMoviesInRow(screenWidth);
    }, 500);
  });

  console.log('fin')
  console.log (displayMovies)
  console.log (moviesInRow)
  console.log (moviesRows)

  return (
      <main className='page__padding page__padding_movie'>
        <SearchForm isShortsSearch={isShortsSearch}/>
        <MoviesCardList
        movies = {movies}
        displayMovies = {displayMovies}
        onClick={loadMore}/>
      </main>
  );
}

export default Movies;