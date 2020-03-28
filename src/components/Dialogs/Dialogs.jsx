import React from 'react';
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';

import style from './Dialogs.module.css';


const Dialogs = ({ state }) =>  {
  const { dialogsData, messagesData } = state;
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
    alert(messageText); 
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
