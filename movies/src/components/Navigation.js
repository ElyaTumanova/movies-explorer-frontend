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
      <nav className={`menu ${isLoggedIn ? '' : 'page__hidden-section'}`}>
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
          <div className={`menu__profile-img ${currentPage.pathname === '/'? 'menu__profile-img_main' : 'menu__profile-img_other'}`}></div>
        </div>
      </nav>
    </section>
  );
}

export default Navigation;