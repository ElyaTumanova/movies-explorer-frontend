import React from 'react';

import Navigation from './Navigation';

function MenuMobPopup ({isLoggedIn, isOpen, onClick}) {
  return (
    <section className={`menu-popup ${isOpen ? 'menu-popup_opened' : ''}`}>
      <button className="menu-popup__close" onClick={onClick} type='button'></button>
      <Navigation
      isLoggedIn = {isLoggedIn}
      />
    </section>
  );
}

export default MenuMobPopup;