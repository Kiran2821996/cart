import React from "react";
import { Routes, Route } from "react-router-dom";

import All from "./All/All";
import Electronics from "./Electronics/Electronics";
import Jwellery from "./Jwellery/Jwellery";
import MensClothing from "./MensClothing/MensClothing";
import WomensClothing from "./WomensClothing/WomensClothing";
import Cart from "../header/cart/Cart";
import Login from "../header/login/Login";



function Main() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/jwellery" element={<Jwellery />} />
        <Route path="/mensClothing" element={<MensClothing />} />
        <Route path="/womensClothing" element={<WomensClothing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Main;
