import React from 'react';
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';
import { Redirect } from 'react-router';
import style from './Dialogs.module.css';


const Dialogs = ({ addMessage, dialogsData, messagesData, isAuth }) =>  {
  if (!isAuth) {
    return <Redirect to='/login' />
  }
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

  const onAddMessage = () => {
    const messageText = messageBox.current.value;
    addMessage(messageText)
    messageBox.current.value = '';
  };
 
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsList}>
        {dialogList}
      </div>
      <div className={style.messages}>
        {messageList}
        <textarea ref={messageBox}></textarea>
        <button onClick={onAddMessage}>Add Message</button>
      </div>
    </div>
  )
}

export default Dialogs;
