import React, { useEffect} from 'react';

function FilterCheckbox ({isShortsSearch, handleSearchSubmit, searchValue, handleChechboxClick, checkbox}) {

  useEffect (()=>{
    if (checkbox.current.isShortsSearch !== isShortsSearch) {
      handleSearchSubmit(searchValue)
    }
    checkbox.current = isShortsSearch;
  },[isShortsSearch])

  return (
    <div>
      <div>
        <input type="checkbox" name="checkboxName" className="search__checkbox"/>
        <div className={`search__checkbox-switch ${isShortsSearch ? 'search__checkbox-switch_on':''}`} onClick={handleChechboxClick}></div>
      </div>
    </div>
  );
} 

export default FilterCheckbox;

