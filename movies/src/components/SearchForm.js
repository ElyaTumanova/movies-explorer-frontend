import React from 'react';
import SearchIcon from '../images/search__icon.svg'
import FilterCheckbox from './FilterCheckbox'


function SearchForm({isShortsSearch}) {
  return (
      <section className='search page__section-width page__section-width_movies'>
        <form action="" className="search__form" name='searchForm'>
          <div className="search__wrap">
            <div className="search__input-wrap">
              <img src={SearchIcon} alt="Search" className="search__icon" />
              <input 
              placeholder='Фильм'
              name="search"
              type="text" 
              className="search__input" 
              noValidate/>
              <button className="search__button">Найти</button>
            </div>
            <div className="search__shorts-wrap">
              <div className="search__line"></div>
              <FilterCheckbox isShortsSearch = {isShortsSearch}/>
              <a href="" className="search__shorts-link">Короткометражки</a>
            </div>
          </div>
          <div className="search__divider"></div>
        </form>
      </section>
  );
}

export default SearchForm;