import React from 'react';

import {moviesUrl} from '../utils/constants.js'
import { useMyLocation } from '../hooks/useMyLocation.js';


function MoviesCard({movie}) {
  const currentPage = useMyLocation();
  const isSaved = false;

  const movieDuration = movie.duration;
  const movieHours = Math.floor(movieDuration / 60);
  const movieMinutes = movieDuration - movieHours*60;
  


  return (
      <li className='movie'>
        <img className="movie__cover" alt = {movie.nameRU} src = {`${moviesUrl}/${movie.image.formats.thumbnail.url}`}/>
        { 
          currentPage.pathname === '/movies'  ? 
          <button className={`${isSaved ? 'movie__button_saved' : ''} movie__button`}  type='button'> 
          {`${ isSaved ? '' : 'Сохранить'}`}</button> 
          : ''
        }
        { 
          currentPage.pathname === '/saved-movies'  ? 
          <button className='movie__button_remove movie__button' type='button'></button> 
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