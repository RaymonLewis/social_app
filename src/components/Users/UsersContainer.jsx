import React from 'react';
import { toggleFollowUser, setUsers, setTotalUsersCount, setCurrentPage, toggleIsFetching } from '../../redux/action_creators';
import { connect } from 'react-redux';
import axios from 'axios';
import Users from './Users';
import { Loader } from '../Common/Loader/Loader';

class UsersContainer extends React.Component {
  componentDidMount(){
    this.fetchUsers();
  }

  fetchUsers = () => {
    this.props.toggleIsFetching(true);
    const url = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`;
    axios.get(url)
      .then(response => {
        this.props.toggleIsFetching(false); 
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
    this.props.toggleIsFetching(true);
    const url = `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`;
    axios.get(url)
      .then(response => {
        this.props.toggleIsFetching(false); 
        const usersData = response.data.items; 
        const numOfUsers = response.data.totalCount;
        this.props.setUsers(usersData,numOfUsers);
      })
      .catch(error => {
        console.log(error);
      })
  };

  render() {
    const {
      toggleFollowUser,
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
        toggleFollowUser={toggleFollowUser}
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

