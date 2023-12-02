import React from 'react';
import ProfileEdit from './ProfileEdit.js';
import ProfileInfo from './ProfileInfo.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js'

function Profile({isProfileEditOpen, setIsProfileEditOpen, handleSignout, onUpdateUser, regError, setRegError,regSuccess, setRegSuccess}) {

  const user = React.useContext(CurrentUserContext);

  return (
    <main className='profile page__padding'>
      <h1 className="profile__heading">{`Привет, ${user.name}!`}</h1>
      <ProfileInfo
        isProfileEditOpen = {isProfileEditOpen}
        setIsProfileEditOpen = {setIsProfileEditOpen}
        handleSignout = {handleSignout}
      />
      <ProfileEdit
        isProfileEditOpen = {isProfileEditOpen}
        setIsProfileEditOpen = {setIsProfileEditOpen}
        onUpdateUser = {onUpdateUser}
        regError={regError}
        setRegError={setRegError}
        regSuccess = {regSuccess}
        setRegSuccess = {setRegSuccess}/>
    </main>

  );
}

export default Profile;