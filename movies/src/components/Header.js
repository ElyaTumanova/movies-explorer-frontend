import React from 'react';
import { useEffect,useState } from 'react';
import {useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom';

import Navigation from './Navigation.js'


function Header({isLoggedIn}) {
  const [currentPage, setCurrentPage] = useState('');
  const location = useLocation();

  useEffect(()=>{
    setCurrentPage (location)
  }, [location])

  return (
    <header className={`header page__padding 
    ${currentPage.pathname === '/' ? 'header_colored-backgroung' : ''} ${currentPage.pathname === '/signup' || currentPage.pathname === '/signin' ? 'page__hidden-section' : ''}`}>
        <div className='header__content'>
          <Link to='/'><div className='header__logo'></div></Link>
          <div className="header__nav-wrap">
            <Navigation
            isLoggedIn = {isLoggedIn}
            />
          </div>
          <button className="header__burger"></button>
        </div>
      </header>
  );
}

export default Header;