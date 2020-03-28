import React from 'react';
import { NavLink } from 'react-router-dom';

import style from '../Dialogs.module.css';
  
const Dialog = ({ name, id }) => {
  let path = `/dialogs/${id}`;
  
  return (
    <div className={style.dialog}>
      <NavLink to={path} activeClassName={style.active}>{name}</NavLink>
    </div>
  );
}

export default Dialog;

