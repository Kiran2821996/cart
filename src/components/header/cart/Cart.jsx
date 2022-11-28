import React, { useContext, useEffect } from "react";
import { fecthedData } from "../../context/Context";
import ReactStars from "react-stars";
import IncDecItem from "./IncDecItem";

import "./Cart.css";

import { Card, Button } from "antd";

function Cart() {
  const { data, setData, setCart_items } = useContext(fecthedData);
  const ids = data.map((o) => o.id);
  let uniqueItems = data.filter(
    ({ id }, index) => !ids.includes(id, index + 1)
  );

  useEffect(() => {
    setCart_items([...uniqueItems]);
  }, []);

  const handleClick = (item) => {
    uniqueItems.splice(uniqueItems.indexOf(item), 1);
    setData([...uniqueItems]);
    setCart_items([...uniqueItems]);
  };
  return (
    <div className="cart_display">
      <div className="cart_left">
        <div className="cart_cards">
          {uniqueItems.map((item) => {
            return (
              <div className="cart_card" key={item.id}>
                <div className="cart_card_img">
                  <img
                    src={item.image}
                    alt="unavailable"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="cart_details">
                  <p>{item.title}</p>
                  <ReactStars
                    count={5}
                    size={24}
                    value={item.rating.rate}
                    color2={"#ffd700"}
                  />
                  <IncDecItem priceData={item} />
                  <div onClick={(e) => handleClick(item)}>
                    <Button type="primary">Remove</Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="cart_right">
        <Card>
          <h3>Order Summary</h3>
          <h4>Total Price :</h4>
          <h2>₹{uniqueItems.reduce((accu, cur) => accu + cur.price, 0)}</h2>
          <Button type="primary">CHECK OUT</Button>
          <h6>Tax Exclusive* added at checkout</h6>
        </Card>
      </div>
    </div>
  );
}

export default Cart;
