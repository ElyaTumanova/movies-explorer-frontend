import React from 'react';

import Navigation from './Navigation';

function MenuMobPopup ({isLoggedIn, isOpen}) {
  return (
    <section className={`menu-popup ${isOpen ? 'menu-popup_opened' : ''}`}>
      <button className="menu-popup__close"></button>
      <Navigation
      isLoggedIn = {isLoggedIn}
      />
    </section>
  );
}

export default MenuMobPopup;