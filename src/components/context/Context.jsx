import React, { createContext, useState } from "react";

const fecthedData = createContext();

function Context(props) {
  const [data, setData] = useState([]);
  const [likeData,setLikeData] = useState([])

  return (
    <fecthedData.Provider value={{ data, setData ,likeData,setLikeData}}>
      {props.children}
    </fecthedData.Provider>
  );
}

export default Context;
export { fecthedData };
