import React from 'react';
import Post from '../Post/Post';
import style from './Posts.module.css';
import {addPostActionCreator} from '../../../redux/store';


const Posts = ({ postsData, dispatch }) => {
  const postList = postsData.map(({ id,message,likesCount }) => {
    return (
      <Post id={id} message={message} likesCount={likesCount} />
    );
  });

  const textAreaRef = React.createRef();

  const addNewPost = () => {
    const text = textAreaRef.current.value;
    const postAction = addPostActionCreator(text);
    dispatch(postAction);
    textAreaRef.current.value = '';
  }

  return (
    <div className={style.wrapper}>
      <div>
        my posts
        <div className={style.commentForm}>
          <textarea ref={textAreaRef}></textarea>
          <button onClick={addNewPost}>Add Post</button>
        </div>
      </div>
      <div>
        <h1>Posts</h1>
        {postList}
      </div>
    </div>
  )
}


export default Posts;