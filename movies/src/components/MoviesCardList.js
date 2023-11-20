import React from 'react';
import MoviesCard from './MoviesCard'


function MoviesCardList({movies, displayMovies, onClick}) {
 
 // console.log (movies)

  return (
    <div className="movies">
      <ul className="movies__wrap">
        {movies.slice(0, displayMovies).map (movie =>
          (<MoviesCard movie = {movie}
            key={movie.id}
          />)
      )}
    </ul>
    {displayMovies < movies.length ?
      <button className="movies__loadmore" type='button' onClick={onClick}>Ещё</button>
      : ''
      }
    </div>
  );
}

export default MoviesCardList;