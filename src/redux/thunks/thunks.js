import { 
  toggleIsFetching, 
  setUsers, 
  setTotalUsersCount, 
  setToggleFollowInProgress,
  toggleFollowUser,
  setUserProfile,
  setAuthUserData } from "../action_creators";
import { usersAPI, authAPI } from '../../api/api';

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

export const getProfile = (userID) => (dispatch) => {
  usersAPI.getProfile(userID)
    .then(userData => {
      dispatch(setUserProfile(userData));
    });
}

export const getAuthData = () => (dispatch) => {
  authAPI.getAuthData()
    .then(response => {
      if(response.resultCode === 0) {
        const authUserData = response.data;
        dispatch(setAuthUserData(authUserData));
      }
    })
}