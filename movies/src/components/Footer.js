import React from 'react';

function Footer (){

  return (
    <footer className='footer page__section-width'>
      <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__wrap">
        <div className="footer__copyright">© 2023</div>
        <ul className='footer__links'>
          <li className="footer__link">
            <a href="https://practicum.yandex.ru/" className="footer__link" target="_blank">Яндекс.Практикум</a>
          </li>
          <li className="footer__link">
            <a href="https://github.com/ElyaTumanova" className="footer__link" target="_blank">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;