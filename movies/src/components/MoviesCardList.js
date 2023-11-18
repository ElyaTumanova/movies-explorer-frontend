import React from 'react';
import MoviesCard from './MoviesCard'


function MoviesCardList({movies}) {
  // console.log (movies)
  return (
    <ul className="movies">
      {movies.map (movie =>
        (<MoviesCard movie = {movie}
          key={movie._id}
        />)
    )}
  </ul>
  );
}

export default MoviesCardList;