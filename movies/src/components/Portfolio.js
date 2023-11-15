import React from 'react';

function Portfolio() {
  return (
    <section className="portfolio page__section-width page__padding">
      <h4 className="portfolio__heading">Портфолио</h4>
      <ul className="portfolio__works-wrap">
        <li className="portfolio__work">
          <h5 className="portfolio__work-name">Статичный сайт</h5>
          <a href="https://github.com/ElyaTumanova/how-to-learn" className="portfolio__work-link" target='_blank'>↗</a>
        </li>
        <li className="portfolio__work">
          <h5 className="portfolio__work-name">Адаптивный сайт</h5>
          <a href="https://github.com/ElyaTumanova/russian-travel" className="portfolio__work-link" target='_blank'>↗</a>
        </li>
        <li className="portfolio__work">
          <h5 className="portfolio__work-name">Одностраничное приложение</h5>
          <a href="https://github.com/ElyaTumanova/react-mesto-api-full-gha" className="portfolio__work-link" target='_blank'>↗</a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;