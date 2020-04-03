import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';

import style from './Profile.module.css';

const Profile = () => {
  return(
    <div>
      <ProfileInfo />
      <PostsContainer />
    </div>
  );
}

export default Profile;