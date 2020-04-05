import React from 'react';
import userPhoto from '../../../src/assets/images/user.png';
import style from './Users.module.css';

const Users = (props) => {
  const {
    toggleFollow,
    users,
    pageSize,
    totalUsersCount,
    currentPage,
    onPageChange
  } = props;

  const numberOfPages = Math.ceil(totalUsersCount/pageSize)/50;
  let pages = [];
  for(let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  };

  const pagination = pages.map(pageNumber => {
    return (
      <span 
      className={currentPage === pageNumber ? style.selectedPage : style.paginationItem } 
      onClick={() => onPageChange(pageNumber)}>
        {pageNumber}
      </span>
    );
  });

  const usersList = users.map(user => {
    const id = user.id
    return (
      <div className={style.user} key={id}>
        <div className={style.avatar}>
          <img src={user.photos.small !== null ? user.photos.small : userPhoto } alt='ava'/>
          <button onClick={() => toggleFollow(id)}>
            {user.followed ? 'Unfollow' : 'Follow'}
          </button>
        </div>
        <div className={style.user_info}>
          <div className={style.profile_info}>
            <span>{user.name}</span>
            <span>{user.status}</span>
          </div>
          <div className={style.location_info}>
            <span>Russia</span>
            <span>Moscow</span>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <h1>Users</h1>
      <div className='users_list'>
        <div className={style.pagination}>
          {pagination}
        </div>
        {usersList}
      </div>
    </div>
  );
};

export default Users;
