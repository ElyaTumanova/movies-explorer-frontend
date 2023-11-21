import React from 'react';
import { useEffect,useState } from 'react';
import {useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom';

import Navigation from './Navigation.js'
import MenuMobPopup from './MenuMobPopup';


function Header({isLoggedIn, isOpen, onClickMobOpen, onClickMobClose}) {
  const [currentPage, setCurrentPage] = useState('');
  const location = useLocation();

  useEffect(()=>{
    setCurrentPage (location)
  }, [location])

  return (
    <header className={`header page__padding 
    ${currentPage.pathname === '/' ? 'header_colored-backgroung' : ''}`}>
        <div className='header__content'>
          <Link to='/'><div className='header__logo'></div></Link>
          <div className="header__nav-wrap">
            <Navigation
            isLoggedIn = {isLoggedIn}
            />
          </div>
          <div className={`${!isLoggedIn ? '' : 'page__hidden-section'}`}>
            <Link className="header__registration-link" to='/signup'>Регистрация</Link>
            <Link className="header__login-btn" to='/signin'>Войти</Link>
          </div>
          <button className={`header__burger ${isLoggedIn ? '' : 'page__hidden-section'}`} onClick = {onClickMobOpen} type='button'></button>
        </div>

        <MenuMobPopup
          isLoggedIn = {isLoggedIn}
          isOpen={isOpen}
          onClickMobClose={onClickMobClose}
        />

      </header>
  );
}

export default Header;