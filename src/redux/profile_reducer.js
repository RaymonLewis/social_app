import { ADD_POST } from "./action_types";

const profilePageData = {
  postsData: [
    {id: 1, message: 'How are you?', likesCount: 3}, 
    {id: 2, message: 'Hello, i am here', likesCount: 3}, 
    {id: 3, message: 'Do you like me?', likesCount: 1}
  ]
}

const profileReducer = (state = profilePageData, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: '2312312',
        message: action.data,
        likesCount: 0
      };
      state.postsData.push(newPost);
      return state;
    default:
      return state;
  }
}

export default profileReducer;