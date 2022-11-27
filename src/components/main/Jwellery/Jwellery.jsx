import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactStars from "react-stars";

import { Card, Button } from "antd";

function Jwellery() {
  const [jwellery, setJwellery] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/category/jewelery").then((res) => {
      setJwellery([...res.data]);
    });
  }, []);
  return (
    <div className="all_cards">
      {jwellery.map(({ id, title, price, image, rating }) => {
        return (
          <div className="all_card">
            <Card className="all_card_item">
              <div className="all_card_img">
                <img src={image} alt="unavailable" width={100} height={100} />
              </div>
              <p>{title.length < 22 ? title : `${title.slice(0, 15)}...`}</p>

              <ReactStars
                count={5}
                size={24}
                value={rating.rate}
                color2={"#ffd700"}
              />

              <p>₹{price}</p>
              <Button type="primary">Add to Cart</Button>
            </Card>

            {/* onClick={() => handleClick(id)} */}
          </div>
        );
      })}
    </div>
  )
}

export default Jwellery