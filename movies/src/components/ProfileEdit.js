import React, { useEffect } from 'react';

import { useFormAndValidation } from '../hooks/useFormAndValidation.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js' 

function ProfileEdit({isProfileEditOpen, setIsProfileEditOpen, onUpdateUser, regError, setRegError}) {
  
  const {values, handleChange, errors, isValid, setValues, setIsValid, setErrors} = useFormAndValidation();
  const user = React.useContext(CurrentUserContext);

  useEffect(() => {
    let name = user.name;
    let email = user.email;
    setValues ({name, email})
    setErrors ({});
    setIsValid(false);
    setRegError('');
  }, []);

  function handleSubmit (e) {
    e.preventDefault();
    onUpdateUser (values);
    setIsValid(false);
  }
      
  function handleCancelEdit () {
    let name = user.name;
    let email = user.email;
    setIsProfileEditOpen(false);
    setValues ({name, email})
    setErrors ({});
    setIsValid(false);
    setRegError('');
  }

  return (
    <section className={`${!isProfileEditOpen ? 'page__hidden-section':''}`}>
      <form className="profile__info" id="profile__info">
        <div className="profile__wrap">
          <label className="profile__label">Имя</label>
          <input 
            type="text"
            name="name" 
            className= "profile__value profile__value_edit"
            pattern='[а-яА-Яa-zA-Z\-\s]{2,40}'
            required 
            placeholder={'Имя'}
            value = {values.name||''} 
            onChange={handleChange}
          ></input>
          <div className="auth__error-msg">{errors.name}</div>
        </div>
        <div className="profile__wrap">
          <label className="profile__label">E-mail</label>
          <input
            type="email"
            name="email" 
            className= "profile__value profile__value_edit"
            required 
            placeholder={'E-mail'}
            value = {values.email||""}
            onChange={handleChange}
          ></input>
          <div className="auth__error-msg">{errors.email}</div>
        </div>
      </form>
      <div className="profile__buttons">
        <div className="profile__error-msg">{regError}</div>
        <button className={`page__button ${isValid ? '' : 'page__button_not-active'}`} type='submit' form="profile__info" onClick={handleSubmit}>Сохранить</button>
        <button className="profile__button profile__button_cancel" type="button" onClick={handleCancelEdit}>Закрыть</button>
      </div>
    </section>
  );
}

export default ProfileEdit;