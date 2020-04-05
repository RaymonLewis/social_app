import React from 'react';
import style from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../../src/assets/images/user.png'

class Users extends React.Component {
  componentDidMount(){
    this.fetchUsers();
  }

  fetchUsers = () => {
    const url = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`;
    axios.get(url)
      .then(response => {
        const usersData = response.data.items;
        const numOfUsers = response.data.totalCount;
        this.props.setUsers(usersData); 
        this.props.setTotalUsersCount(numOfUsers);
      })
      .catch(error => {
        console.log(error);
      })
  };

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    const url = `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`;
    axios.get(url)
      .then(response => {
        const usersData = response.data.items; 
        const numOfUsers = response.data.totalCount;
        this.props.setUsers(usersData,numOfUsers); 
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    const {
      toggleFollow,
      users,
      pageSize,
      totalUsersCount,
      currentPage,
    } = this.props;

    const numberOfPages = Math.ceil(totalUsersCount/pageSize)/50;
    let pages = [];
    for(let i = 1; i <= numberOfPages; i++) {
      pages.push(i);
    };
    const pagination = pages.map(pageNumber => {
      return (
        <span 
        className={currentPage === pageNumber ? style.selectedPage : style.paginationItem } 
        onClick={() => this.onPageChange(pageNumber)}>
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
  }
};

export default Users;