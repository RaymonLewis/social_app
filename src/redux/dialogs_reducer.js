import { ADD_MESSAGE } from "./action_types";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      const newMessage = {
        id: '2312312',
        message: action.data,
      };
      state.messagesData.push(newMessage);
      return state; 
    default:
      return state;
  }
}

export default dialogsReducer;