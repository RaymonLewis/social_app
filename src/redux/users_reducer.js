import { TOGGLE_FOLLOW, SET_USERS, SET_TOTAL_USERS_COUNT, SET_CURRENT_PAGE } from "./action_types";

const usersPageData = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1
};
 
const usersReducer = (state = usersPageData, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      };
    case TOGGLE_FOLLOW:
      const userID = action.payload;
      const users = state.users.map(user => {
        if(userID === user.id){
          return {...user, followed: !user.followed};
        }
        return user
      });
      return {...state, users: users};
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pageNumber
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    default:
      return state;
  }
}

export default usersReducer;