import React from 'react';
import { toggleFollowUserAC, setUsersAC } from '../../redux/action_creators';
import { connect } from 'react-redux';
import Users from './Users';

const mapStateToProps = (state) => ({
  users : state.usersPageData.users
});

const mapDispatchToProps = (dispatch) => ({
  toggleFollow: (userID) => dispatch(toggleFollowUserAC(userID)),
  setUsers: (users) => dispatch(setUsersAC(users))
});

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;
