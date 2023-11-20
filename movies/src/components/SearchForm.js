import React from 'react';
import SearchIcon from '../images/search__icon.svg'
import FilterCheckbox from './FilterCheckbox'


function SearchForm({isShortsSearch}) {
  return (
      <section className='search page__section-width page__section-width_movies'>
        <form className="search__form" name='searchForm'>
          <div className="search__wrap">
            <div className="search__input-wrap">
              <div className="search__icon"></div>
              <input 
              placeholder='Фильм'
              name="search"
              type="text" 
              className="search__input" 
              required/>
              <button className="search__button" type="button">Найти</button>
            </div>
            <div className="search__shorts-wrap">
              <FilterCheckbox isShortsSearch = {isShortsSearch}/>
              <a href="" className="search__shorts-link">Короткометражки</a>
            </div>
          </div>
        </form>
      </section>
  );
}

export default SearchForm;