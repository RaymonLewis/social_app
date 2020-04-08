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
    axios.get(url, {withCredentials: true})
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
    axios.get(url, {withCredentials: true})
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

  toggleFollow(userID) {
    const url = `https://social-network.samuraijs.com/api/1.0/follow/${userID}`;
    axios.get(url,{withCredentials: true})
      .then(response => {
        const isFollowed = response.data;
        if(!isFollowed) {
          axios.post(url, {}, {
            withCredentials: true,
            headers: {
              "API-KEY": 'e7028849-7b36-4fb7-b2c1-dd0b4e473e8a'
            }
          })
            .then(response => {
              if(response.data.resultCode === 0) {
                console.log('changed');
                this.props.toggleFollowUser(userID);
              }
            })
          .catch(error => {
            console.log(error);
          });
        } else {
          axios.delete(url, {
            withCredentials: true,
            headers: {
              "API-KEY": 'e7028849-7b36-4fb7-b2c1-dd0b4e473e8a'
            }
          })
          .then(response => {
            console.log(response);
            console.log('changed');
            this.props.toggleFollowUser(userID);
          })
          .catch(error => {
            console.log(error);
          });
      }
    })
    .catch(error => {
      console.log(error);
    })
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
        toggleFollow={this.toggleFollow.bind(this)}
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

