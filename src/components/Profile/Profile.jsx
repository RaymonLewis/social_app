import React from 'react';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import style from './Profile.module.css';

const Profile = ({ state, dispatch }) => {
  const { postsData } = state;
  return(
    <div>
      <ProfileInfo />
      <Posts postsData={postsData} dispatch={dispatch} />
    </div>
  );
}

export default Profile;