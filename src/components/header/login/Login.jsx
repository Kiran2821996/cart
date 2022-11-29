import React, { useState,useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {fecthedData} from "../../context/Context";
import SignUp from "./SignUp";


function Login() {
  let navigate = useNavigate();
  const {users} = useContext(fecthedData);
  const [loginData, setLoginData] = useState({});
  const [signUp,setSignUp] = useState(false)
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    let result = users.filter((user) => {
      return (
        user.email === loginData.email && user.password === loginData.password
      );
    });

    if (result[0]) {
   
      let information_or_action = {
        type: "SET_LOGIN_DATA",
        payload: {
          ...result[0],
        },
      };

      dispatch(information_or_action);
    
    } else {
        alert("Incorrect User Credentials! Please SignUp")
       setSignUp(!signUp)
    }
    navigate("/all")
  };

  return (
    <>{
        !signUp?<div><h1 style={{ textAlign: "center" }}>Login Page</h1>

        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(event) =>
              setLoginData({ ...loginData, email: event.target.value })
            }
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(event) =>
              setLoginData({ ...loginData, password: event.target.value })
            }
          />
          <br />
          <button>Login</button>
        </form></div>:<SignUp/>
    }
      
    </>
  );
}

export default Login;
