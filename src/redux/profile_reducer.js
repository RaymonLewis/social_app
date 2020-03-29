import { ADD_POST } from "./action_types";

const profileReducer = (state, action) => {
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