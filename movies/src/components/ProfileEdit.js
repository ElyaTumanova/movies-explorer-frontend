import React from 'react';

function ProfileEdit({isOpen}) {
  return (
    <section className={`${!isOpen ? 'page__hidden-section':''}`}>
      <form className="profile__info" id="profile__info">
        <div className="profile__wrap">
          <label className="profile__label">Имя</label>
          <input 
            type="text"
            name="name" 
            className= "profile__value profile__value_edit"
            minLength="2" maxLength="40" 
            required 
            placeholder='Имя'
          ></input>
        </div>
        <div className="profile__wrap">
          <label className="profile__label">E-mail</label>
          <input
            type="text"
            name="name" 
            className= "profile__value profile__value_edit"
            required 
            placeholder='E-mail'
          ></input>
        </div>
      </form>
      <div className="profile__error-msg">При обновлении профиля произошла ошибка.</div>
      <button className="page__button" type='submit' form="profile__info">Сохранить</button>
    </section>

  );
}

export default ProfileEdit;