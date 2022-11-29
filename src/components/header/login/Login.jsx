import React, { useState,useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {fecthedData} from "../../context/Context";
import SignUp from "./SignUp";
import { Card, Button } from "antd";
import "./Login.css"
import {EyeFilled , EyeInvisibleFilled } from '@ant-design/icons';

function Login() {
  let navigate = useNavigate();
  const {users} = useContext(fecthedData);
  const [loginData, setLoginData] = useState({});
  const [signUp,setSignUp] = useState(false)
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const visiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    let result = users.filter((user) => {
      return (
        user.email === loginData.email && user.password === loginData.password
      );
    });

    if (result[0]) {
   
      let information = {
        type: "SET_LOGIN_DATA",
        payload: {
          ...result[0],
        },
      };

      let action = {
        type: "setLogin",
        payload: true,
      };

      dispatch(information);
      dispatch(action)

    
    } else {
        alert("Incorrect User Credentials! Please SignUp")
       setSignUp(!signUp)
    }
    navigate("/all")
  };

  const handleSignUp=()=>{
    setSignUp(!signUp)
  }

  return (
    <>{
        !signUp?<div className="login"><h1 className="welcome" >Welcome to <span className="title">Shop_Lane</span> </h1>
<Card>
  <h2>Login</h2>
<form onSubmit={handleLogin}>
<div className="jk"> <label htmlFor="email">Email<span className="star">*</span></label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(event) =>
              setLoginData({ ...loginData, email: event.target.value })
            }
          /></div>
         
         <div className="jk"> <label htmlFor="password">Password<span className="star">*</span></label>
          <input
           type={passwordShown ? "text" : "password"}
            name="password"
            id="password"
            onChange={(event) =>
              setLoginData({ ...loginData, password: event.target.value })
            }
          />
           <span className="cp">{passwordShown ? (
            <EyeFilled className="eye1" onClick={visiblity} />
          ) : (
            <EyeInvisibleFilled className="eye1" onClick={visiblity} />
          )}</span></div>
         
          <div className="btndiv">
          <span onClick={handleLogin}><Button type="primary">Login</Button></span>
          <span onClick={handleSignUp}><Button type="primary">Sign Up</Button></span>
          </div>
         
          
        </form>
</Card>
       </div>:
        <SignUp/>
    }
      
    </>
  );
}

export default Login;
