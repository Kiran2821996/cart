import React, { useEffect, useState,useContext } from "react";
import {fecthedData} from "../../context/Context";
import axios from "axios";
import ReactStars from "react-stars";
import Favourites from "../favourites/Favourites";

import { Card, Button } from "antd";

function Jwellery() {
  const [jwellery, setJwellery] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/category/jewelery").then((res) => {
      setJwellery([...res.data]);
    });
  }, []);
  const { data,setData } = useContext(fecthedData);

  const handleAddClick = (item) => {
    let added = data.filter(ele=>ele.id===item.id)
      if (!added.length>0) {
        setData([...data, item]); 
      } 
    };
    const handleRemoveClick = (item) => {
      data.splice(data.indexOf(item), 1);
      setData([...data]);
      };

  return (
    <div className="all_cards">
     {jwellery.map((item) => {
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
              {data.filter(ele=>ele.id===item.id).length>0? <div onClick={(e) => handleRemoveClick(item)} >
                <Button type="primary">Remove from Cart</Button>
              </div>:<div onClick={(e) => handleAddClick(item)}>
                <Button type="primary">Add to Cart</Button>
              </div>}
            </Card>
          </div>
        );
      })}
    </div>
  )
}

export default Jwellery