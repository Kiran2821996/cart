import React, { createContext, useState } from "react";

const fecthedData = createContext();

function Context(props) {
  const [data, setData] = useState([]);
  const [likeData,setLikeData] = useState([])
const [users,setUsers]=useState([])
 

  return (
    <fecthedData.Provider value={{ data, setData ,likeData,setLikeData,users,setUsers}}>
      {props.children}
    </fecthedData.Provider>
  );
}

export default Context;
export { fecthedData };
