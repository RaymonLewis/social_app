import React, {useContext} from 'react';
import Posts from './Posts';
import { addPostActionCreator } from '../../../redux/action_creators';
import { StoreContext } from '../../../StoreContext';

const PostsContainer = () => {
  const store = useContext(StoreContext);
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
