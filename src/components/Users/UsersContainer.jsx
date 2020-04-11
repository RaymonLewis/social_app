import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage } from '../../redux/action_creators';
import { getUsers, toggleFollow } from '../../redux/thunks/thunks';
import { Loader } from '../Common/Loader/Loader';
import Users from './Users';

class UsersContainer extends React.Component {
  componentDidMount(){
    this.fetchUsers();
  }

  fetchUsers = () => {
    const { currentPage, pageSize } = this.props
    this.props.getUsers(currentPage, pageSize);
  };

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  onToggleFollow(userID) {
    this.props.toggleFollow(userID);
  }

  render() {
    const { isFetching } = this.props;
    return (
      <>
        {isFetching ? <Loader /> : null}
        <Users 
        {...this.props} 
        onPageChange={this.onPageChange}
        onToggleFollow={this.onToggleFollow.bind(this)} />
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
  setCurrentPage,
  getUsers,
  toggleFollow
};

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);

