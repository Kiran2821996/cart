import React,{useContext} from "react";
import {fecthedData} from "../context/Context";
import { ShoppingCartOutlined,LogoutOutlined} from '@ant-design/icons';
import { NavLink} from "react-router-dom";
import "./Header.css";
import { useDispatch ,useSelector} from "react-redux";



function Header() {
  const {data} = useContext(fecthedData);
  const userName = useSelector((state) => {
    console.log(state)
    return state.loggedInUser
  })
  const dispatch = useDispatch();
 
  const handleLogout=()=>{
    let text = "You will be logged out!!!";
    if (window.confirm(text) === true) {
      let action = {
        type: "setLogin",
        payload: false,
      };
  
      dispatch(action);
    } 
   
  }
 
  return (
    <div>
     
     
      <div className="header_main">
      <h1 className="user_name">Shop_Lane</h1>
        <div className="header_main_right">
        <h4 className="display_user">Hello "{userName.firstName}":)</h4>
        <div className="nav_link_btn">
      <NavLink to={"./showfavt"} end className="nav_link" >
          <p>Favourites</p>
        </NavLink>
        <NavLink to={"./cart"} end className="nav_link" >
          <p><ShoppingCartOutlined /><sup>{data.length}</sup></p>
        </NavLink>
        <span className="nav_link" onClick={handleLogout}>
         
          <p><LogoutOutlined /></p>
        </span>
        </div>
        </div>
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
