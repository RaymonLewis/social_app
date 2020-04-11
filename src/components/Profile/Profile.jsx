import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';
import style from './Profile.module.css';

const Profile = ({ profile }) => {
  return(
    <div>
      <ProfileInfo profile={profile} />
      <PostsContainer />
    </div>
  );
}

export default Profile;