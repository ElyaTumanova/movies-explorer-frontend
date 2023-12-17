import React from 'react';
import FilterCheckbox from './FilterCheckbox'

function SearchForm({isShortsSearch, handleSearchSubmit, searchValue, setSearchValue, handleChechboxClick, checkbox, isDisabled, setIsDisabled}) {

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  // console.log (searchValue)

  function handleSubmit (e) {  
    e.preventDefault();
    setIsDisabled (true);
    // setTimeout(() => {
      handleSearchSubmit (searchValue);
    // }, 5000)
  }


  return (
      <section className='search page__section-width page__section-width_movies'>
        <form className="search__form" name='searchForm' id='search'>
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
              <button disabled={isDisabled} className={`search__button ${!isDisabled ? '' : 'search__button_not-active'}`} type="submit" form='search' onClick={handleSubmit}>Найти</button>
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