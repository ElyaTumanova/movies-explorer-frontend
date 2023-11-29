import React from 'react';

import AuthForm from './AuthForm.js';

import { useFormAndValidation } from '../hooks/useFormAndValidation.js'; 

function Register ({onRegister, regError, setRegError}) {

  const {values, handleChange, errors, isValid, resetForm} = useFormAndValidation();

  React.useEffect(() => {
    resetForm();
    setRegError('');
  }, []);
  
  function handleSubmit (e) {
    e.preventDefault();
    onRegister (values);
  }
  
  return (
  <AuthForm
    values = {values}
    errors = {errors}
    isValid = {isValid}
    regError = {regError}
    handleChange = {handleChange}
    handleSubmit = {handleSubmit} 
    header = 'Добро пожаловать!'
    button = 'Зарегистрироваться' 
    link = '/signin'
    linkName = 'Войти'
    loginCaption = 'Уже зарегистрированы?'
  />
  );
}

export default Register;