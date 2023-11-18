import React from 'react';
import Cover from '../images/movie__test-cover.png'
import { useEffect,useState } from 'react';
import {useLocation} from 'react-router-dom';


function MoviesCard({movie}) {
  // console.log (movie)

  const isSaved = false;

  const [currentPage, setCurrentPage] = useState('');
  const location = useLocation();

  useEffect(()=>{
    setCurrentPage (location)
  }, [location])

  return (
      <li className='movie'>
        <img className="movie__cover" alt = {movie.name} src = {Cover}/>
        { currentPage.pathname === '/movies'  ? 
        <button className={`${isSaved ? 'movie__button_saved' : ''} movie__button`}  type='button'> {`${ isSaved ? '' : 'Сохранить'}`}</button> 
        : ''}
        { currentPage.pathname === '/saved-movies'  ? 
        <button className='movie__button_remove movie__button' type='button'></button> 
        : ''}
        <div className="movie__info">
          <h2 className="movie__name">{movie.name}</h2>
          <div className="movie__duration">{movie.duration}</div>
        </div>
      </li>
  );
}

export default MoviesCard;