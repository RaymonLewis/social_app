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
  debugger
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: '2312312',
        message: action.data,
      };
      //Creating a copy of the object so we DO NOT CHANGE the original object. When the state receives a NEW object it will
      //send updates to the subscribed elements via map state to props 
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage]
      }; 
    default:
      return state;
  }
}

export default dialogsReducer;