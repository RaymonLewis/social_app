import React from 'react';
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';
import { addMessageActionCreator } from '../../redux/store';

import style from './Dialogs.module.css';

const Dialogs = ({ state, dispatch }) =>  {
  const { 
    dialogsData, 
    messagesData,
  } = state;
  
  const dialogList = dialogsData.map(({ id, name }) => {
    return (
      <Dialog id={id} name={name} key={id} />
    );
  });

  const messageList = messagesData.map(({ id, message }) => {
    return (
      <Message id={id} message={message} key={id} />
    );
  });

  const messageBox = React.createRef();

  const addMessage = () => {
    const messageText = messageBox.current.value;
    //Create action object. Now we need to provide it to the dispatch function, that can directly communicate with the store
    const actionObject = addMessageActionCreator(messageText);
    //Provide the action object to the callback function of the store called dispatch. It will handle the logic of updating the state
    dispatch(actionObject);
    messageBox.current.value = '';
  }
 
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsList}>
        {dialogList}
      </div>
      <div className={style.messages}>
        {messageList}
        <textarea ref={messageBox}></textarea>
        <button onClick={addMessage}>Add Message</button>
      </div>
    </div>
  )
}

export default Dialogs;
