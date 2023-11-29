import React from 'react';

import AuthForm from './AuthForm.js';

import { useFormAndValidation } from '../hooks/useFormAndValidation.js'; 

function Login ({onLogin, regError, setRegError}) {

  const {values, handleChange, errors, isValid, resetForm} = useFormAndValidation();

  React.useEffect(() => {
    resetForm()
    setRegError('');
  }, []);

  function handleSubmit (e) {
    e.preventDefault()
    const {email, password} = values;
    onLogin (email, password) 
  }

  return (
  <AuthForm
    values = {values}
    errors = {errors}
    isValid = {isValid}
    regError = {regError}
    handleChange = {handleChange}
    handleSubmit = {handleSubmit}
    header = 'Рады видеть!'
    button = 'Войти' 
    link = '/signup'
    linkName = 'Регистрация'
    loginCaption = 'Ещё не зарегистрированы?'
  />
  );
}

export default Login;

