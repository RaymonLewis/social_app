import { 
  ADD_POST, 
  ADD_MESSAGE, 
  TOGGLE_FOLLOW, 
  SET_USERS, 
  SET_TOTAL_USERS_COUNT,
  SET_CURRENT_PAGE,
  TOGGLE_IS_FETCHING 
} from "./action_types";

/**
 Action creators aren't a mandatory. They are small helpers to create the action object that will be later sent to the 
 store via the dispatch method. We can manualy create action object\, but this composition allows us to build
 more modular and maintainable code
 */

const addPostActionCreator = (data) => {
  const action = {
    type: ADD_POST,
    data: data
  };
  return action;
};

const addMessageActionCreator = (data) => {
  const action = {
    type: ADD_MESSAGE,
    data: data
  }
  return action;
};

// Make them fit in one line
const toggleFollowUserAC = (userID) => ({type: TOGGLE_FOLLOW, payload: userID});
const setUsersAC = (users) => ({type: SET_USERS, users: users});
const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount})
const setCurrentPageAC = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber: pageNumber});
const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});

export {
  addPostActionCreator,
  addMessageActionCreator,
  toggleFollowUserAC,
  setUsersAC,
  setTotalUsersCountAC,
  setCurrentPageAC,
  toggleIsFetchingAC
};