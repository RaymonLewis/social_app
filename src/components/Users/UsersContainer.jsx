import React from 'react';
import { toggleFollowUser, setUsers, setTotalUsersCount, setCurrentPage, toggleIsFetching } from '../../redux/action_creators';
import { connect } from 'react-redux';
import axios from 'axios';
import Users from './Users';
import { Loader } from '../Common/Loader/Loader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {
  componentDidMount(){
    this.fetchUsers();
  }

  fetchUsers = () => {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false); 
        const usersData = data.items;
        const numOfUsers = data.totalCount;
        this.props.setUsers(usersData); 
        this.props.setTotalUsersCount(numOfUsers);
      })
      .catch(error => {
        console.log(error);
      })
  };

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false); 
        const usersData = data.items; 
        const numOfUsers = data.totalCount;
        this.props.setUsers(usersData,numOfUsers);
      })
      .catch(error => {
        console.log(error);
      })
  };

  onToggleFollow(userID) {
    usersAPI.toggleFollowUser(userID)
      .then(resultCode => {
        if(resultCode === 0) {
          this.props.toggleFollowUser(userID);
        }
      });
  }

  render() {
    const {
      totalUsersCount,
      currentPage,
      users,
      pageSize,
      isFetching
    } = this.props;

    return (
      <>
        {isFetching ? <Loader /> : null}
        <Users 
        toggleFollow={this.onToggleFollow.bind(this)}
        totalUsersCount={totalUsersCount}
        currentPage={currentPage}
        users={users} 
        onPageChange={this.onPageChange}
        pageSize={pageSize} />
      </>
    );
  };
};

const mapStateToProps = (state) => ({
  users : state.usersPageData.users,
  pageSize: state.usersPageData.pageSize,
  totalUsersCount: state.usersPageData.totalUsersCount,
  currentPage: state.usersPageData.currentPage,
  isFetching: state.usersPageData.isFetching
});
//Functional way. Too much boilprate code. We can use bindActionCreator injected in connect and just pass action creator
/*const mapDispatchToProps = (dispatch) => ({
  toggleFollow: (userID) => dispatch(toggleFollowUserAC(userID)),
  setUsers: (users) => dispatch(setUsersAC(users)),
  setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
  setTotalUsersCount: (numOfUsers) => dispatch(setTotalUsersCountAC(numOfUsers)),
  toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching))
});*/

const mapDispatchToProps = {
  toggleFollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
};

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);

