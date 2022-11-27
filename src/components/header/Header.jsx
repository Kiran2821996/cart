import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header_main">
        <NavLink to={"./cart"} end>
          <p>Cart</p>
        </NavLink>
        <NavLink to={"./login"}>
          <p>Login</p>
        </NavLink>
      </div>
      <div className="header_links">
        <NavLink to={"./"} end>
          <p>All</p>
        </NavLink>
        <NavLink to={"./electronics"}>
          <p>Electronics</p>
        </NavLink>
        <NavLink to={"./mensClothing"}>
          <p>MensClothing</p>
        </NavLink>
        <NavLink to={"./womensClothing"}>
          <p>WomensClothing</p>
        </NavLink>
        <NavLink to={"./jwellery"}>
          <p>Jwellery</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
