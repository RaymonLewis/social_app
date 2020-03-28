import React from 'react';
import { header, image } from './Header.module.css';

const Header = () => {
  return(
    <header className={header}>
      <img className={image} 
      src='https://cdn.shopify.com/shopifycloud/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png' 
      />
    </header>
  );
}

export default Header;