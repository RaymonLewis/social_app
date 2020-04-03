import React from 'react';
import Posts from './Posts';
import { addPostActionCreator } from '../../../redux/action_creators';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePageData.postsData
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => dispatch(addPostActionCreator(text))
  }
};

const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default ProfileContainer;
