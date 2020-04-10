import React from 'react';
import { 
  toggleFollowUser, 
  setUsers, 
  setTotalUsersCount, 
  setCurrentPage, 
  toggleIsFetching,
  setToggleFollowInProgress } from '../../redux/action_creators';
import { connect } from 'react-redux';
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
    console.log(userID);
    this.props.setToggleFollowInProgress(true,userID);
    usersAPI.toggleFollowUser(userID)
      .then(resultCode => {
        if(resultCode === 0) {
          this.props.setToggleFollowInProgress(false,userID);
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
      isFetching,
      followingInProgress,
    } = this.props;

    return (
      <>
        {isFetching ? <Loader /> : null}
        <Users 
        onToggleFollow={this.onToggleFollow.bind(this)}
        followingInProgress = {followingInProgress}
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
  isFetching: state.usersPageData.isFetching,
  followingInProgress: state.usersPageData.followingInProgress,
  selectedID: state.usersPageData.selectedID
});

const mapDispatchToProps = {
  toggleFollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  setToggleFollowInProgress
};

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);

