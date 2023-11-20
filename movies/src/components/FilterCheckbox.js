import React from 'react';

function FilterCheckbox ({isShortsSearch}) {
  return (
    <div>
      <div>
        <input type="checkbox" name="checkboxName" className="search__checkbox"/>
        <div className={`search__checkbox-switch ${isShortsSearch ? 'search__checkbox-switch_on':''}`}></div>
      </div>
    </div>
  );
}

export default FilterCheckbox;

