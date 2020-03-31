import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';

import style from './Profile.module.css';

const Profile = ({ store }) => {
  return(
    <div>
      <ProfileInfo />
      <PostsContainer store={store} />
    </div>
  );
}

export default Profile;