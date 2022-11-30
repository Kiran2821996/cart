import React,{useContext} from 'react'




import ReactStars from "react-stars";
import {fecthedData} from "../../context/Context";
import { Card, Button } from "antd";

import { HeartFilled } from '@ant-design/icons';
  
function ShowFavt() {
    const { likeData,setLikeData, data, setData } = useContext(fecthedData);


   
  const handleAddClick = (item) => {
    let added = data.filter((ele) => ele.id === item.id);
    if (!added.length > 0) {
      setData([...data, item]);
    }
  };
  const handleRemoveClick = (id) => {
    data.map((ele) => {
      if (ele.id === id) {
        data.splice(data.indexOf(ele), 1);
        setData([...data]);
      }
    });
  };

  const handleRemoveHeart=(id)=>{
    likeData.map((ele) => {
      if (ele.id === id) {
        likeData.splice(likeData.indexOf(ele), 1);
        setLikeData([...likeData]);
      }
    });
  }
  return (
    <div className="all_cards">
    {likeData.map((item) => {
      return (
        <div className="all_card" key={item.id}>
          <Card className="all_card_item">
            <div className="heart_icon">
            <div onClick={(e) => handleRemoveHeart(item.id)}>
                   <HeartFilled style={{color:"red"}} />
                </div>
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
            {data.filter((ele) => ele.id === item.id).length > 0 ? (
                <div onClick={(e) => handleRemoveClick(item.id)}>
                  <Button type="primary" danger>Remove from Cart</Button>
                </div>
              ) : (
                <div onClick={(e) => handleAddClick(item)}>
                  <Button type="primary">Add to Cart</Button>
                </div>
              )}
          </Card>
        </div>
      );
    })}
  </div>
  )
}

export default ShowFavt