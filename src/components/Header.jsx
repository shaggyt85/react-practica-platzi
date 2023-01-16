import React, { useState} from "react";
import "@styles/header.scss";
import Menu from "@components/Menu";

import icono_menu from '@icons/icon_menu.svg'
import icon_shopping_cart from '@icons/icon_shopping_cart.svg'
import logo from '@logos/logo_yard_sale.svg'

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav>
      <img src={icono_menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleMenu}>platzi@example.com</li>
          <li className="navbar-shopping-cart">
            <img src={icon_shopping_cart} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
      {menu ? <Menu /> : null } 
    </nav>
  );
};

export default Header;
