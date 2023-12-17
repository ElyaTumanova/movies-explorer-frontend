import React, {useEffect, useState} from 'react';

import {moviesUrl} from '../utils/constants.js'
import { useMyLocation } from '../hooks/useMyLocation.js';
import {SavedMoviesContext} from '../contexts/SavedMoviesContext.js'


function MoviesCard({movie, onSaveMovie, onDeleteMovie, checkSavedMovies}) {
  const currentPage = useMyLocation();
  const [isSaved, setIsSaved] = useState(false);
  const [movieId, setMovieId] = useState('');

  const savedMovies = React.useContext(SavedMoviesContext);

  // console.log(checkSavedMovies (movie, savedMovies))
  // console.log(savedMovies)

  useEffect (()=>{
    setIsSaved (checkSavedMovies (movie, savedMovies).searchResult)
    setMovieId (checkSavedMovies (movie, savedMovies).movieId)
  },[savedMovies])


  const movieHours = Math.floor(movie.duration / 60);
  const movieMinutes = movie.duration - movieHours*60;
  
  function handleSaveMovie () {
    console.log(isSaved)
    if (!isSaved) {
      // console.log(movie)
      onSaveMovie (movie)
    } else {
      onDeleteMovie (movieId)
    }
  }
  
  function handleDeleteMovie () {
    // console.log(movie)
    onDeleteMovie (movie._id)
  }


  return (
      <li className='movie'>
        <a href={movie.trailerLink} className='movie__link' target='_blank'>
        { 
          currentPage.pathname === '/movies'  ? 
          <img className="movie__cover" alt = {movie.nameRU} src = {`${moviesUrl}/${movie.image.url}`}/>
          : ''
        }
        { 
          currentPage.pathname === '/saved-movies'  ? 
          <img className="movie__cover" alt = {movie.nameRU} src = {movie.image}/>
          : ''
        }
        </a>
        { 
          currentPage.pathname === '/movies'  ? 
          <button className={`${isSaved ? 'movie__button_saved' : ''} movie__button`}  type='button' onClick={handleSaveMovie}> 
          {`${ isSaved ? '' : 'Сохранить'}`} </button> 
          : ''
        }
        { 
          currentPage.pathname === '/saved-movies'  ? 
          <button className='movie__button_remove movie__button' type='button' onClick={handleDeleteMovie}></button> 
          : ''
        }
        <div className="movie__info">
          <h2 className="movie__name">{movie.nameRU}</h2>
          <div className="movie__duration">{`${movieHours}ч ${movieMinutes}м`}</div>
        </div>
      </li>
  );
}

export default MoviesCard;