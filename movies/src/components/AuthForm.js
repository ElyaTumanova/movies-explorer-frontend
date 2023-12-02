import React from 'react';
import { Link } from 'react-router-dom'; 
import { useMyLocation } from '../hooks/useMyLocation.js';

function AuthForm ({values, handleSubmit, errors, regError, isValid, handleChange, header, button, link, linkName, loginCaption}) {

  const currentPage = useMyLocation();

  return (
    <main className="auth header">
      <Link to='/'><div className='header__logo header__logo_centered'></div></Link>
      <h1 className="auth__heading">{header}</h1>
      <form className="auth__form" id="auth__form" onSubmit={handleSubmit}>

      { 
        currentPage.pathname === '/signup'  ? 
        <div className="auth__input-wrap">
          <label className="auth__label">Имя</label>
          <input type="text"
            name="name" 
            className= "auth__input"
            pattern='[а-яА-Яa-zA-Z\-\s]{2,40}'
            required
            placeholder='Имя'
            value = {values.name||""} 
            onChange={handleChange}
          />
          <span className="auth__error-msg">{errors.name}</span>
        </div>

        : ''
      }       
        <div className="auth__input-wrap">
          <label className="auth__label">E-mail</label>
          <input type="text"
            name="email" 
            className= "auth__input"
            placeholder='E-mail'
            pattern='\S{1,999}@[a-zA-Z]{1,999}\.[a-zA-Z]{1,999}'
            required 
            value = {values.email||""} 
            onChange={handleChange}
          />
          <span className="auth__error-msg">{errors.email}</span>
        </div>
        <div className="auth__input-wrap"> 
          <label className="auth__label">Пароль</label>
          <input type="password"
            name="password" 
            className= "auth__input"
            placeholder='Пароль'
            minLength="3"
            maxLength="8"
            required 
            value = {values.password||""}
            onChange={handleChange}
          />
          <span className="auth__error-msg">{errors.password}</span>
        </div>

      <div className="auth__error-msg">{regError} </div>
      </form>
      <button disabled={!isValid} className={`page__button ${isValid ? '' : 'page__button_not-active'}`} type='submit' form="auth__form">{button}</button>
      <div className="auth__login-caption">{loginCaption} <Link className="auth__login-link"to={link}>{linkName}</Link></div>
    </main>
  );
}

export default AuthForm;