import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = ({ isAuth,login }) => {
  return(
    <header className={style.header}>
      <img className={style.imageimage} 
      src='https://cdn.shopify.com/shopifycloud/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png'
      alt='logo' 
      />
      <div className={style.loginBlock}>
        {isAuth ? <h1>{login}</h1> : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;