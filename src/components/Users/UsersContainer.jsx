import React from 'react';
import { toggleFollowUserAC, setUsersAC, setTotalUsersCount, setCurrentPage } from '../../redux/action_creators';
import { connect } from 'react-redux';
import axios from 'axios';
import Users from './Users';

class UsersContainer extends React.Component {
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
  };

  render() {
    return (
      <Users 
      toggleFollow={this.props.toggleFollow}
      totalUsersCount={this.props.totalUsersCount}
      currentPage={this.props.currentPage}
      users={this.props.users} 
      onPageChange={this.onPageChange}
      pageSize={this.props.pageSize}/>
    );
  };
};

const mapStateToProps = (state) => ({
  users : state.usersPageData.users,
  pageSize: state.usersPageData.pageSize,
  totalUsersCount: state.usersPageData.totalUsersCount,
  currentPage: state.usersPageData.currentPage
});

const mapDispatchToProps = (dispatch) => ({
  toggleFollow: (userID) => dispatch(toggleFollowUserAC(userID)),
  setUsers: (users) => dispatch(setUsersAC(users)),
  setCurrentPage: (pageNumber) => dispatch(setCurrentPage(pageNumber)),
  setTotalUsersCount: (numOfUsers) => dispatch(setTotalUsersCount(numOfUsers))
});

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);

