import React from 'react';
import style from './Post.module.css';

const Post = ({ message, likesCount }) => {
  return (
    <div className={style.item}>
      <img src='https://cdn1.thr.com/sites/default/files/imagecache/768x433/2019/03/avatar-publicity_still-h_2019.jpg' />
      <span className={style.text}>{message}</span>
      <span>{likesCount}</span>
    </div>
  )
};

export default Post;
