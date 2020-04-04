import { TOGGLE_FOLLOW, SET_USERS } from "./action_types";

const usersPageData = {
  users: []
};
 
const usersReducer = (state = usersPageData, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload] 
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
    default:
      return state;
  }
}

export default usersReducer;