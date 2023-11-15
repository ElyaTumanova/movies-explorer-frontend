import React from 'react';
import ProfileEdit from './ProfileEdit.js';
import ProfileInfo from './ProfileInfo.js';

function Profile({isOpen}) {
  return (
    <section className='profile page__padding'>
      <div className="profile__heading">Привет, Виталий!</div>
      <ProfileInfo
        isOpen = {isOpen}
      />
      <ProfileEdit
        isOpen = {isOpen}/>
    </section>

  );
}

export default Profile;