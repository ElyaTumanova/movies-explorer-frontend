import React from 'react';
import SearchForm from './SearchForm'
import MoviesCardList from './MoviesCardList'


function Movies({isShortsSearch, movies}) {
  return (
      <main className='page__padding_movie'>
        <SearchForm isShortsSearch={isShortsSearch}/>
        <MoviesCardList
        movies = {movies}/>
        <button className="movies__loadmore">Ещё</button>
      </main>
  );
}

export default Movies;