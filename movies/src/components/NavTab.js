import React from 'react';
import { Link } from 'react-router-dom'; 
import { HashLink } from 'react-router-hash-link';

function NavTab (){
  return (
    <nav>
      <ul className="navigation page__padding">
        <li className="navigation__item"><HashLink className="navigation__link" to="/#about_project">О проекте</HashLink></li>
        <li className="navigation__item"><HashLink className="navigation__link" to="/#technologies">Технологии</HashLink></li>
        <li className="navigation__item"><HashLink className="navigation__link" to="/#student">Студент</HashLink></li>
      </ul>
    </nav>
  );
}

export default NavTab;