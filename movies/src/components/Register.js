import React from 'react';

import AuthForm from './AuthForm.js';

import { useFormAndValidation } from '../hooks/useFormAndValidation.js'; 

function Register ({onRegister, regError, setRegError}) {

  const {values, handleChange, errors, isValid, resetForm, setIsValid} = useFormAndValidation();

  React.useEffect(() => {
    resetForm();
    setRegError('');
  }, []);
  
  function handleSubmit (e) {
    e.preventDefault();
    setIsValid(false);
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