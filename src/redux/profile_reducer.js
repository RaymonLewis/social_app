import { ADD_POST, SET_USER_PROFILE } from "./action_types";

const profilePageData = {
  postsData: [
    {id: 1, message: 'How are you?', likesCount: 3}, 
    {id: 2, message: 'Hello, i am here', likesCount: 3}, 
    {id: 3, message: 'Do you like me?', likesCount: 1}
  ],
  profile: {}
}

const profileReducer = (state = profilePageData, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: '2312312',
        message: action.data,
        likesCount: 0
      };
      return {
        ...state, 
        postsData: [...state.postsData, newPost]
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: {...state.profile, ...action.profileData}
      }
    default:
      return state;
  }
}

export default profileReducer;