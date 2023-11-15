import React from 'react';

function ProfileEdit({isOpen}) {
  return (
    <section className={`${!isOpen ? 'page__hidden-section':''}`}>
      <form className="profile__info">
        <div className="profile__wrap">
          <div className="profile__label">Имя</div>
          <input 
            type="text"
            name="name" 
            className= "profile__value"
            minLength="2" maxLength="40" 
            required 
            noValidate
            placeholder='Имя'
          ></input>
        </div>
        <div className="profile__wrap">
          <div className="profile__label">E-mail</div>
          <input
            type="text"
            name="name" 
            className= "profile__value"
            required 
            noValidate
            placeholder='E-mail'
          ></input>
        </div>
      </form>
      <div className="profile__error-msg">При обновлении профиля произошла ошибка.</div>
      <button className="page__button">Сохранить</button>
    </section>

  );
}

export default ProfileEdit;