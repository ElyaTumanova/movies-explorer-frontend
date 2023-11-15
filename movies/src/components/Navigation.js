import React from 'react';
import { NavLink, Link  } from 'react-router-dom'; 
import { useEffect,useState } from 'react';
import {useLocation} from 'react-router-dom';


function Navigation({isLoggedIn}) {

  const [currentPage, setCurrentPage] = useState('');
  const location = useLocation();

  useEffect(()=>{
    setCurrentPage (location)
  }, [location])

  return (
    <section className='menu'>
      <div className={`menu ${isLoggedIn ? '' : 'page__hidden-section'}`}>
        <ul className="menu__wrap">
          <li><NavLink  
          className={({ isActive, isPending, isTransitioning }) =>
            [ 
              "menu__item menu__item_hidden",
              isPending ? "menu__item menu__item_hidden" : "",
              isActive ? "menu__item menu__item_hidden menu__item_active" : "",
              isTransitioning ? "menu__item menu__item_hidden" : "",
            ].join(" ")
          }
          to='/'>Главная</NavLink ></li>
          <li><NavLink  
          className={({ isActive, isPending, isTransitioning }) =>
            [ 
              "menu__item",
              isPending ? "menu__item" : "",
              isActive ? "menu__item menu__item_active" : "",
              isTransitioning ? "menu__item" : "",
            ].join(" ")
          }
          to='/movies'>Фильмы</NavLink ></li>
          <li><NavLink  
          className={({ isActive, isPending, isTransitioning }) =>
            [
              "menu__item",
              isPending ? "menu__item" : "",
              isActive ? "menu__item menu__item_active" : "",
              isTransitioning ? "menu__item" : "",
            ].join(" ")
          } 
          to='/saved-movies'>Сохранённые фильмы</NavLink ></li>
        </ul>
        <div className="menu__profile-wrap">
          <Link className="menu__profile-btn" to='/profile'>Аккаунт</Link>
          <div className={`header__profile-img ${currentPage.pathname === '/'? 'header__profile-img_main' : 'header__profile-img_other'}`}></div>
        </div>
      </div>
      <div className={`menu ${!isLoggedIn ? '' : 'page__hidden-section'}`}>
        <Link className="menu__registration-link" to='/signup'>Регистрация</Link>
        <Link className="menu__login-btn" to='/signin'>Войти</Link>
      </div>
      </section>
  );
}

export default Navigation;