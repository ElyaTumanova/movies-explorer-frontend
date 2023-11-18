import React from 'react';
import ProfileEdit from './ProfileEdit.js';
import ProfileInfo from './ProfileInfo.js';

function Profile({isOpen}) {
  return (
    <main className='profile page__padding'>
      <h1 className="profile__heading">Привет, Виталий!</h1>
      <ProfileInfo
        isOpen = {isOpen}
      />
      <ProfileEdit
        isOpen = {isOpen}/>
    </main>

  );
}

export default Profile;