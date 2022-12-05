import React, { createContext, useState } from "react";
import { useEffect } from "react";

const fecthedData = createContext();

function Context(props) {
  const [data, setData] = useState([]);
  const [likeData,setLikeData] = useState([])
const [users,setUsers]=useState([])
 useEffect(()=>{
  const usersData = JSON.parse(localStorage.getItem("userData")) ;
 setUsers(usersData) 
 
 },[])

  

  return (
    <fecthedData.Provider value={{ data, setData ,likeData,setLikeData,users,setUsers}}>
      {props.children}
    </fecthedData.Provider>
  );
}

export default Context;
export { fecthedData };
