import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function PageNotFound () {
  const navigate = useNavigate ();

  function handleClick () {
    navigate(-1)
  }
  
  return (
    <main className="page-404">
      <h1 className="page-404__heading">404</h1>
      <p className="page-404__subheading">Страница не найдена</p>
      <button className="page-404__back" onClick={handleClick}>Назад</button>
    </main>
  );
}

export default PageNotFound;