import React, { useEffect, useState,useContext } from "react";
import {fecthedData} from "../../context/Context";
import axios from "axios";
import ReactStars from "react-stars";
import Favourites from "../favourites/Favourites";

import { Card, Button } from "antd";

function WomensClothing() {
  const [womensClothing, setWomensClothing] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/category/women's clothing").then((res) => {
      setWomensClothing([...res.data]);
    });
  }, []);
  const { data,setData } = useContext(fecthedData);

  const handleClick = (item) => {
    if (!data.includes(item)) {
  setData([...data, item]);
    } else {
      alert("item already added");
    }
  };

  return (
    <div className="all_cards">
        {womensClothing.map((item) => {
        return (
          <div className="all_card" key={item.id}>
            <Card className="all_card_item">
            <div className="heart_icon">
                <Favourites item={item} />
              </div>
              <div className="all_card_img">
                <img
                  src={item.image}
                  alt="unavailable"
                  width={100}
                  height={100}
                />
              </div>
              <p>
                {item.title.length < 22
                  ? item.title
                  : `${item.title.slice(0, 15)}...`}
              </p>

              <ReactStars
                count={5}
                size={24}
                value={item.rating.rate}
                color2={"#ffd700"}
              />

              <p>₹{item.price}</p>
              <div onClick={(e) => handleClick(item)}>
                <Button type="primary">Add to Cart</Button>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  )
}

export default WomensClothing