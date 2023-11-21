import React from 'react';
import { Link } from 'react-router-dom'; 

import Logo from '../images/header__logo.svg'

function Register () {

  return (
    <main className="auth header">
      <Link to='/'><div className='header__logo header__logo_centered'></div></Link>
      <h1 className="auth__heading">Добро пожаловать!</h1>
      <form className="auth__form" id="register__form">
        <label className="auth__label">Имя</label>
        <input type="text"
            name="name" 
            className= "auth__input"
            minLength="2" maxLength="40" 
            required
            placeholder='Имя' 
        />
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
        <div className="auth__error-msg">Что-то пошло не так...</div>
      </form>
      <button className="page__button" type='submit' form="register__form">Зарегистрироваться</button>
      <div className="auth__login-caption">Уже зарегистрированы? <Link className="auth__login-link"to="/signin">Войти</Link></div>
    </main>
  );
}

export default Register;