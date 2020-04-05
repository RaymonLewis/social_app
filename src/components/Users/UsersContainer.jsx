import React from 'react';
import { toggleFollowUserAC, setUsersAC, setTotalUsersCount, setCurrentPage } from '../../redux/action_creators';
import { connect } from 'react-redux';
import Users from './Users';

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

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;
