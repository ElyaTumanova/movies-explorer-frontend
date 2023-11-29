import React from 'react';
import {Link} from 'react-router-dom'

import {CurrentUserContext} from '../contexts/CurrentUserContext.js'

function ProfileInfo({isProfileEditOpen, setIsProfileEditOpen, handleSignout}) {
  
  const user = React.useContext(CurrentUserContext);

  function handleEdit () {
    setIsProfileEditOpen(true);
  }
  return (
    <section className={`${isProfileEditOpen ? 'page__hidden-section': ''}`}>
      <div className="profile__info">
        <div className="profile__wrap">
          <div className="profile__label">Имя</div>
          <div className="profile__value">{user.name}</div>
        </div>
        <div className="profile__wrap">
          <div className="profile__label">E-mail</div>
          <div className="profile__value">{user.email}</div>
        </div>
      </div>
      <div className="profile__buttons">
        <button className="profile__button profile__button_edit" type="button" onClick={handleEdit}>Редактировать</button>
        <Link className="profile__button profile__button_signout" to='/' onClick={handleSignout}>Выйти из аккаунта</Link>
      </div>
    </section>
  );
}

export default ProfileInfo;