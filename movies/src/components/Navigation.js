import React from 'react';
import { NavLink, Link  } from 'react-router-dom'; 
import { useEffect,useState } from 'react';
import {useLocation} from 'react-router-dom';


function Navigation({isLoggedIn, onClickMobClose}) {

  const [currentPage, setCurrentPage] = useState('');
  const location = useLocation();

  useEffect(()=>{
    setCurrentPage (location)
  }, [location])

  return (
    <section>
      <nav className={`header__menu ${isLoggedIn ? '' : 'page__hidden-section'}`}>
        <ul className="header__menu-wrap">
          <li><NavLink  
          className={({ isActive, isPending, isTransitioning }) =>
            [ 
              "header__menu-item header__menu-item_hidden",
              isPending ? "header__menu-item header__menu-item_hidden" : "",
              isActive ? "header__menu-item header__menu-item_hidden header__menu-item_active" : "",
              isTransitioning ? "header__menu-item header__menu-item_hidden" : "",
            ].join(" ")
          }
          to='/'
          onClick={onClickMobClose}>Главная</NavLink ></li>
          <li><NavLink  
          className={({ isActive, isPending, isTransitioning }) =>
            [ 
              "header__menu-item",
              isPending ? "header__menu-item" : "",
              isActive ? "header__menu-item header__menu-item_active" : "",
              isTransitioning ? "header__menu-item" : "",
            ].join(" ")
          }
          to='/movies'
          onClick={onClickMobClose}>Фильмы</NavLink ></li>
          <li><NavLink  
          className={({ isActive, isPending, isTransitioning }) =>
            [
              "header__menu-item",
              isPending ? "header__menu-item" : "",
              isActive ? "header__menu-item header__menu-item_active" : "",
              isTransitioning ? "header__menu-item" : "",
            ].join(" ")
          } 
          to='/saved-movies'
          onClick={onClickMobClose}>Сохранённые фильмы</NavLink ></li>
        </ul>
        <div className="header__menu-profile-wrap">
          <Link className="header__menu-profile-btn" to='/profile' onClick={onClickMobClose}>Аккаунт</Link>
          <div className={`header__menu-profile-img ${currentPage.pathname === '/'? 'header__menu-profile-img_main' : 'header__menu-profile-img_other'}`}></div>
        </div>
      </nav>
    </section>
  );
}

export default Navigation;