import React from 'react';

function Portfolio() {
  return (
    <section className="portfolio page__section-width page__padding">
      <h4 className="portfolio__heading">Портфолио</h4>
      <ul className="portfolio__works-wrap">
        <li className="portfolio__row">
          <a className="portfolio__work" href="https://github.com/ElyaTumanova/how-to-learn" target='_blank' rel="noreferrer">
            <h5 className="portfolio__work-name">Статичный сайт</h5>
            <div className="portfolio__work-link">↗</div>
          </a>
        </li>
        <li className="portfolio__row">
          <a className="portfolio__work" href="https://github.com/ElyaTumanova/russian-travel" target='_blank' rel="noreferrer">
            <h5 className="portfolio__work-name">Адаптивный сайт</h5>
            <div className="portfolio__work-link">↗</div>
          </a>
        </li>
        <li className="portfolio__row">
          <a className="portfolio__work" href="https://github.com/ElyaTumanova/react-mesto-api-full-gha" target='_blank' rel="noreferrer">
            <h5 className="portfolio__work-name">Одностраничное приложение</h5>
            <div className="portfolio__work-link">↗</div>
          </a>
        </li>        
      </ul>
    </section>
  );
}

export default Portfolio;