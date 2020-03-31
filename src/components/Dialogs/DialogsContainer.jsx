import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator } from '../../redux/action_creators';

const DialogsContainer = ({ store }) => {
  const state = store.getState();
  const dialogsData = state.dialogsPageData.dialogsData;
  const messagesData = state.dialogsPageData.messagesData;

  const addMessage = (messageText) => {
    //Create action object. Now we need to provide it to the dispatch function, that can directly communicate with the store
    const actionObject = addMessageActionCreator(messageText);
    //Provide the action object to the callback function of the store called dispatch. It will handle the logic of updating the state
    store.dispatch(actionObject);
  };

  return (
    <Dialogs 
    addMessage={addMessage} 
    dialogsData={dialogsData} 
    messagesData={messagesData} />
  );
};

export default DialogsContainer;
