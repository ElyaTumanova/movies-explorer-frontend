import React from 'react';
import {Link} from 'react-router-dom'

function ProfileInfo({isOpen}) {
  return (
    <section className={`${isOpen ? 'page__hidden-section': ''}`}>
      <div className="profile__info">
        <div className="profile__wrap">
          <div className="profile__label">Имя</div>
          <div className="profile__value">Виталий</div>
        </div>
        <div className="profile__wrap">
          <div className="profile__label">E-mail</div>
          <div className="profile__value">pochta@yandex.ru</div>
        </div>
      </div>
      <div className="profile__buttons">
        <button className="profile__button profile__button_edit" type="button">Редактировать</button>
        <Link className="profile__button profile__button_signout" to='/'>Выйти из аккаунта</Link>
      </div>
    </section>
  );
}

export default ProfileInfo;