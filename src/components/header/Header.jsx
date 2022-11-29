import React,{useContext} from "react";
import {fecthedData} from "../context/Context";
import { ShoppingCartOutlined,LogoutOutlined} from '@ant-design/icons';
import {useSelector} from 'react-redux';
import { NavLink } from "react-router-dom";
import "./Header.css";


function Header() {
  const {data} = useContext(fecthedData);

  const userData = useSelector((state) => {
    return state.loggedInUser
  })
  const handleLogout=()=>{
    window.location.reload();
  }
  return (
    <div>
      
      <span className="user_name">Hai {userData.firstName}!</span>
      <div className="header_main">
      
      <NavLink to={"./showfavt"} end className="nav_link" >
          <p>Favourites</p>
        </NavLink>
        <NavLink to={"./cart"} end className="nav_link" >
          <p><ShoppingCartOutlined /><sup>{data.length}</sup></p>
        </NavLink>
        <span className="nav_link" onClick={handleLogout}>
         
          <p><LogoutOutlined />Log Out</p>
        </span>
      </div>
      <div className="header_links">
        <NavLink to={"./all"} end className="nav_link">
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
