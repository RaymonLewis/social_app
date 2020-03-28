import React from 'react';

import style from '../Dialogs.module.css';

const Message = ({ message }) => {
  return (
    <div className="messages__item">{message}</div>
  );
}

export default Message;
