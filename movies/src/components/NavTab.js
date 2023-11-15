import React from 'react';
import { Link } from 'react-router-dom'; 
import { HashLink } from 'react-router-hash-link';

function NavTab (){
  return (
    <ul className="navigation page__padding">
      <HashLink className="navigation__item" to="/#about_project">О проекте</HashLink>
      <HashLink className="navigation__item" to="/#technologies">Технологии</HashLink>
      <HashLink className="navigation__item" to="/#student">Студент</HashLink>
    </ul>
  );
}

export default NavTab;