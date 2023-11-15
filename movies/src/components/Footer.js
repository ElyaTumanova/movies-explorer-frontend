import React from 'react';
import {useLocation} from 'react-router-dom';
import { useEffect,useState } from 'react';

function Footer (){
  const [currentPage, setCurrentPage] = useState('');
  const location = useLocation();

  useEffect(()=>{
    setCurrentPage (location)
  }, [location])

  return (
    <footer className={`footer page__section-width ${currentPage.pathname === '/signup' || currentPage.pathname === '/signin' ? 'page__hidden-section' : ''}`}>
      <div className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</div>
      <div className="footer__line"></div>
      <div className="footer__wrap">
        <div className="footer__copyright">© 2023</div>
        <a href="https://practicum.yandex.ru/" className="footer__link" target="_blank">Яндекс.Практикум</a>
        <a href="https://github.com/ElyaTumanova" className="footer__link" target="_blank">Github</a>
      </div>
    </footer>
  );
}

export default Footer;