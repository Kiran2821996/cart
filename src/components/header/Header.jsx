import React,{useContext} from "react";
import {fecthedData} from "../context/Context";
import { ShoppingCartOutlined,LoginOutlined,LogoutOutlined} from '@ant-design/icons';

import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const {cart_items} = useContext(fecthedData);
 
  return (
    
    <div>
      <div className="header_main">
      <NavLink to={"./showfavt"} end className="nav_link" >
          <p>Favourites</p>
        </NavLink>
        <NavLink to={"./cart"} end className="nav_link" >
          <p><ShoppingCartOutlined /><sup>{cart_items.length}</sup></p>
        </NavLink>
        <NavLink to={"./login"} className="nav_link">
          <p><LoginOutlined />/<LogoutOutlined /></p>
        </NavLink>
      </div>
      <div className="header_links">
        <NavLink to={"./"} end className="nav_link">
          <p>All</p>
        </NavLink>
        <NavLink to={"./electronics"} className="nav_link">
          <p>Electronics</p>
        </NavLink>
        <NavLink to={"./mensClothing"} className="nav_link">
          <p>MensClothing</p>
        </NavLink>
        <NavLink to={"./womensClothing"} className="nav_link">
          <p>WomensClothing</p>
        </NavLink>
        <NavLink to={"./jwellery"} className="nav_link">
          <p>Jwellery</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
