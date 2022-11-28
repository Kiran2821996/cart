import React, { createContext, useState } from "react";

const fecthedData = createContext();

function Context(props) {
  const [data, setData] = useState([]);
  const [likeData,setLikeData] = useState([])
  const [cart_items,setCart_items] = useState([])

  return (
    <fecthedData.Provider value={{ data, setData ,likeData,setLikeData,cart_items,setCart_items}}>
      {props.children}
    </fecthedData.Provider>
  );
}

export default Context;
export { fecthedData };
