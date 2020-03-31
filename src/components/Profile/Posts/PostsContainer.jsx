import React from 'react';
import Posts from './Posts';
import { addPostActionCreator } from '../../../redux/action_creators';

const PostsContainer = ({ store }) => {
  const {dispatch} = store;
  const postsData = store.getState().profilePageData.postsData;

  const addPost = (text) => {
    const postAction = addPostActionCreator(text);
    dispatch(postAction);
  }
  return (
    <Posts postsData={postsData} addPost={addPost} />
  )
}

export default PostsContainer;
