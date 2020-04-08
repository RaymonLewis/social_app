import { SET_USER_DATA } from "./action_types";


const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false
};  

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.userData,
        isAuth: true
      }
    default:
      return state;
  }
};

export default authReducer;
