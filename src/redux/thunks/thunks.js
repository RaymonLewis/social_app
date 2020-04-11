import { 
  toggleIsFetching, 
  setUsers, 
  setTotalUsersCount, 
  setToggleFollowInProgress,
  toggleFollowUser } from "../action_creators";
import { usersAPI } from '../../api/api';

export const getUsers = (currentPage, pageSize) => (dispatch, getState) => {
  dispatch(toggleIsFetching(true));
  usersAPI.getUsers(currentPage, pageSize)
    .then(data => {
      dispatch(toggleIsFetching(false)); 
      const usersData = data.items;
      const numOfUsers = data.totalCount;
      dispatch(setUsers(usersData)); 
      dispatch(setTotalUsersCount(numOfUsers));
    })
    .catch(error => {
      console.log(error);
    })
};

export const toggleFollow = (userID) => (dispatch) => {
  dispatch(setToggleFollowInProgress(true,userID));
  usersAPI.toggleFollowUser(userID)
      .then(resultCode => {
        if(resultCode === 0) {
          dispatch(setToggleFollowInProgress(false,userID));
          dispatch(toggleFollowUser(userID));
        };
      });
};