import React from 'react';
import { Link } from 'react-router-dom'; 

function PageNotFound () {
  return (
    <section className="page-404">
      <h1 className="page-404__heading">404</h1>
      <p className="page-404__subheading">Страница не найдена</p>
      <Link className="page-404__back"to="/">Назад</Link>
    </section>
  );
}

export default PageNotFound;