import React from 'react';
import { Link } from 'react-router-dom'; 

import Logo from '../images/header__logo.svg'

function Login () {

  return (
    <main className="auth header">
      <Link to='/'><div className='header__logo header__logo_centered'></div></Link>
      <h1 className="auth__heading">Рады видеть!</h1>
      <form className="auth__form" id="login__form">
        <label className="auth__label">E-mail</label>
        <input type="text"
            name="email" 
            className= "auth__input"
            placeholder='E-mail'
            required 
        />
        <label className="auth__label">Пароль</label>
        <input type="password"
            name="password" 
            className= "auth__input auth__input_error"
            placeholder='Пароль'
            minLength="8"
            maxLength="8"
            required 
        />
      </form>
      <button className="page__button" type='submit' form="login__form">Войти</button>
      <div className="auth__login-caption">Ещё не зарегистрированы? <Link className="auth__login-link"to="/signup">Регистрация</Link></div>
    </main>
  );
}

export default Login;

