import React, { createContext, useState } from "react";

const fecthedData = createContext();

function Context(props) {
  const [data, setData] = useState([]);

  return (
    <fecthedData.Provider value={{ data, setData }}>
      {props.children}
    </fecthedData.Provider>
  );
}

export default Context;
export { fecthedData };
