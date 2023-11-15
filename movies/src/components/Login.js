import React from 'react';
import { Link } from 'react-router-dom'; 

import Logo from '../images/header__logo.svg'

function Login () {

  return (
    <section className="auth">
      <img src={Logo} alt="Logo" className='header__logo header__logo_centered' />
      <div className="auth__heading">Рады видеть!</div>
      <form action="" className="auth__form">
        <div className="auth__label">E-mail</div>
        <input type="text"
            name="email" 
            className= "auth__input"
            placeholder='E-mail'
            required 
            noValidate
        />
        <div className="auth__label">Пароль</div>
        <input type="password"
            name="password" 
            className= "auth__input auth__input_error"
            placeholder='Пароль'
            required 
            noValidate
        />
      </form>
      <Link className="page__button" to='/signin'>Войти</Link>
      <div className="auth__login-caption">Ещё не зарегистрированы? <Link className="auth__login-link"to="/signup">Регистрация</Link></div>
    </section>
  );
}

export default Login;

