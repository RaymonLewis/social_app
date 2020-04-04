import React from 'react';
import style from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../../src/assets/images/user.png'

class Users extends React.Component {
  componentDidMount(){
    this.fetchUsers();
  }

  fetchUsers = () => {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        const usersData = response.data.items;
        console.log(usersData);
        this.props.setUsers(usersData); 
      })
      .catch(error => {
        console.log(error);
      })
  };

  render() {
    const {
      toggleFollow,
      users
    } = this.props;
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
          {usersList}
        </div>
      </div>
    );
  }
};

export default Users;