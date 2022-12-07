import React, { useState, useContext, useEffect } from "react";
import { fecthedData } from "../../context/Context";

function IncDecItem({ priceData }) {
  const [count, setCount] = useState(1);
  const { incData, setIncData} = useContext(fecthedData);
 
  

  const increment = (priceData) => {
    setCount(count => count + 1);
    setIncData([...incData,priceData])
  };

  
  const decrement = (priceData) => {
    if (count > 1) {
      setCount(count => count - 1);
      incData.splice(incData.indexOf(priceData), 1);
      setIncData([...incData]);
   
    } else {
      setCount(1);
    }
  };

  return (
    <div className="price_card">
        <div className="price_card1" > <p >₹{(priceData.price * count).toFixed(2)}</p></div>
     <div className="btn_count">
     <button onClick={()=>decrement(priceData)}>-</button>
    <span>{count}</span>
      <button onClick={()=>increment(priceData)}>+</button>
     </div>
     
    </div>
  );
}

export default IncDecItem;