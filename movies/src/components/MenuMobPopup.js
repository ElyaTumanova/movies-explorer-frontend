import React from 'react';

import Navigation from './Navigation';

function MenuMobPopup ({isLoggedIn, isOpen, onClickMobClose}) {
  return (
    <section className={`header__menu-popup ${isOpen ? 'header__menu-popup_opened' : ''}`}>
      <div className="header__menu-popup-wrap">
        <button className="header__menu-popup-close" onClick={onClickMobClose} type='button'></button>
        <Navigation
        isLoggedIn = {isLoggedIn}
        onClickMobClose = {onClickMobClose}
        />
      </div>
    </section>
  );
}

export default MenuMobPopup;