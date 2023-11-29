import React from 'react';
import FilterCheckbox from './FilterCheckbox'


function SearchForm({isShortsSearch, handleSearchSubmit, searchValue, setSearchValue, handleChechboxClick, checkbox}) {

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  function onSubmit () {  
    handleSearchSubmit (searchValue);
  }

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
              value = {searchValue||''}
              onChange={handleChange}
              required/>
              <button className="search__button" type="button" form='search' onClick={onSubmit}>Найти</button>
            </div>
            <div className="search__shorts-wrap">
              <FilterCheckbox 
              isShortsSearch = {isShortsSearch}
              handleSearchSubmit = {handleSearchSubmit}
              searchValue = {searchValue}
              handleChechboxClick = {handleChechboxClick}
              checkbox = {checkbox}
              />
              <a href="" className="search__shorts-link">Короткометражки</a>
            </div>
          </div>
        </form>
      </section>
  );
}

export default SearchForm;