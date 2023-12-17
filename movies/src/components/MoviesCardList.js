import React from 'react';
import MoviesCard from './MoviesCard'


function MoviesCardList({displayMovies, onSaveMovie, onDeleteMovie, checkSavedMovies}) {

  // console.log(displayMovies)

  return (
    <div className="movies">
      <ul className="movies__wrap">
        {displayMovies.map (movie =>
          (<MoviesCard movie = {movie}
            key={movie.id || movie._id}
            onSaveMovie = {onSaveMovie}
            onDeleteMovie = {onDeleteMovie}
            checkSavedMovies = {checkSavedMovies}
          />)
      )}
    </ul>
    </div>
  );
}

export default MoviesCardList;