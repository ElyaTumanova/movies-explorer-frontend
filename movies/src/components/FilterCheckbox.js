import React from 'react';

function FilterCheckbox ({isShortsSearch}) {
  return (
    <div>
      <label>
        <input type="checkbox" name="checkboxName" className="checkbox"/>
        <div className={`checkbox__switch ${isShortsSearch ? 'checkbox__switch_on':''}`}></div>
      </label>
    </div>
  );
}

export default FilterCheckbox;

