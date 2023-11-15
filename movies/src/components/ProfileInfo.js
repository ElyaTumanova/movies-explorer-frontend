import React from 'react';

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
        <button className="profile__button profile__button_edit">Редактировать</button>
        <button className="profile__button profile__button_signout">Выйти из аккаунта</button>
      </div>
    </section>
  );
}

export default ProfileInfo;