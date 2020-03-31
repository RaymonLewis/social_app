import { ADD_MESSAGE } from "./action_types";

const dialogsPageData = {
  dialogsData: [
    {id: 1, name: 'Andrey'}, 
    {id: 2, name: 'Peter'}, 
    {id: 3, name: 'Lane'}, 
  ],
  messagesData: [
    {id: 1, message: 'How are you?'}, 
    {id: 2, message: 'Hello, i am here'}, 
    {id: 3, message: 'Do you like me?'}
  ],
};

const dialogsReducer = (state = dialogsPageData, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
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