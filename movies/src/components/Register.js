import React from 'react';
import { Link } from 'react-router-dom'; 

import Logo from '../images/header__logo.svg'

function Register () {

  return (
    <section className="auth">
      <img src={Logo} alt="Logo" className='header__logo header__logo_centered' />
      <div className="auth__heading">Добро пожаловать!</div>
      <form action="" className="auth__form">
        <div className="auth__label">Имя</div>
        <input type="text"
            name="name" 
            className= "auth__input"
            minLength="2" maxLength="40" 
            required
            placeholder='Имя' 
            noValidate
        />
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
        <div className="auth__error-msg">Что-то пошло не так...</div>
      </form>
      <Link className="page__button" to="/signup">Зарегистрироваться</Link>
      <div className="auth__login-caption">Уже зарегистрированы? <Link className="auth__login-link"to="/signin">Войти</Link></div>
    </section>
  );
}

export default Register;