import React from 'react';
import MoviesCard from './MoviesCard'


function MoviesCardList({movies}) {
  console.log (movies)
  return (
    <section className="movies">
      {movies.map (movie =>
        (<MoviesCard movie = {movie}
          key={movie._id}
        />)
    )}
  </section>
  );
}

export default MoviesCardList;