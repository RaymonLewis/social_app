import React from 'react';
import style from './ProfileInfo.module.css';
import { Loader } from '../../Common/Loader/Loader';

const ProfileInfo = ({ profile }) => {
  if(!profile.hasOwnProperty('userId')) {
    return <Loader />
  }

  return (
    <div>
      <div>
      <img className={style.image} alt='profile' src={profile.photos.small} /> 
      </div>
      <div className={style.description}>
        <h1>{profile.fullName}</h1>
      </div>
    </div>
  )
}

export default ProfileInfo;
