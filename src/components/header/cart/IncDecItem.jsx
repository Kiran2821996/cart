import React, { useState, useContext, useEffect } from "react";
import { fecthedData } from "../../context/Context";

function IncDecItem({ priceData }) {
  const [count, setCount] = useState(1);
  const { data, setData } = useContext(fecthedData);
  

  //   useEffect(() => {

  //    let sum = data.reduce(
  //         (accumulator, currentValue) => accumulator + currentValue.price,
  //         0,
  //       );

  //       console.log(sum,"totl")
  //   },[]);

  const increment = () => {
    setCount(count => count + 1);
    // data.map((item) => {
    //   if (item.id === priceData.id) {
    //     item.price = item.price * count; 
    //   }
    // });
    // setData([...data]);
    
    
  };

  
  const decrement = () => {
    if (count > 1) {
      setCount(count => count - 1);
    } else {
      setCount(1);
    }
  };

  return (
    <div className="price_card">
        <div> <p >₹ {priceData.price * count}</p></div>
     <div className="btn_count">
     <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
     </div>
     
    </div>
  );
}

export default IncDecItem;
