import React, { useEffect, useState, useContext } from "react";
import { fecthedData } from "../../context/Context";
import axios from "axios";
import ReactStars from "react-stars";
import { HeartOutlined , HeartFilled } from '@ant-design/icons';
import { LineWave} from  'react-loader-spinner'

import { Card, Button } from "antd";

function All() {
  const [all, setAll] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setAll([...res.data]);
    });
  }, []);
  const { data, setData,likeData,setLikeData } = useContext(fecthedData);

  const handleAddClick = (item) => {
    let added = data.filter((ele) => ele.id === item.id);
    if (!added.length > 0) {
      setData([...data, item]);
    }
  };
  const handleRemoveClick = (id) => {
data.map(ele=>{
  if(ele.id===id){
    data.splice(data.indexOf(ele), 1);
    setData([...data])
  }
})  
  };

  const  handleAddHeart=(item)=>{
    let added = likeData.filter((ele) => ele.id === item.id);
    if (!added.length > 0) {
      setLikeData([...likeData, item]);
    }
  }

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

      {all.length>0?
      all.map((item) => {
        return (
          <div className="all_card" key={item.id}>
            <Card className="all_card_item">
              <div className="heart_icon">
              {likeData.filter((ele) => ele.id === item.id).length > 0 ? (
                <div onClick={(e) => handleRemoveHeart(item.id)}>
                   <HeartFilled style={{color:"red"}} />
                </div>
              ) : (
                <div onClick={(e) => handleAddHeart(item)}>
                 <HeartOutlined />
                </div>
              )}
               
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
      }): <LineWave
      height="100"
      width="100"
      color="black"
      ariaLabel="line-wave"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      firstLineColor=""
      middleLineColor=""
      lastLineColor=""
    />}
    </div>
  );
}

export default All;
