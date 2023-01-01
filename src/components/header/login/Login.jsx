import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fecthedData } from "../../context/Context";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Card, Button } from "antd";
import "./Login.css";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";

function Login() {
  let navigate = useNavigate();
  const { users, setUsers } = useContext(fecthedData);
  const [loginData, setLoginData] = useState({});
  const [signUp, setSignUp] = useState(false);
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const visiblity = () => {
    setPasswordShown(!passwordShown);
  };
console.log(users)
  const handleUser=(values)=>{
    setUsers([...users, values]);
    handleSignUp();
  }
 

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
      dispatch(action);
    } else {
      let text = "Incorrect User Credentials! Need to SignUp??";
      if (window.confirm(text) === true) {
        setSignUp(!signUp);
      }
    }
    navigate("/all");
  };

  const handleSignUp = () => {
    setSignUp(!signUp);
  };

  const handleBack=()=>{
    setSignUp(!signUp);
  }
  const handleGuest=()=>{
    let information = {
      type: "SET_LOGIN_DATA",
      payload:null,
    };
    let action = {
      type: "setLogin",
      payload: true,
    };
    dispatch(action);
    dispatch(information);
    navigate("/all");
  }

  return (
    <>
      <div className="login_page">
        <h1 className="welcome">
          Welcome to <span className="title">Shop_Lane</span>{" "}
        </h1>
        {!signUp ? (
          <Card className="login">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="jk">
                {" "}
                <label htmlFor="email">
                  Email<span className="star">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(event) =>
                    setLoginData({ ...loginData, email: event.target.value })
                  }
                />
              </div>

              <div className="jk">
                {" "}
                <label htmlFor="password">
                  Password<span className="star">*</span>
                </label>
                <input
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  id="password"
                  onChange={(event) =>
                    setLoginData({ ...loginData, password: event.target.value })
                  }
                />
                <span className="cp">
                  {passwordShown ? (
                    <EyeFilled className="eye1" onClick={visiblity} />
                  ) : (
                    <EyeInvisibleFilled className="eye1" onClick={visiblity} />
                  )}
                </span>
              </div>

              <div className="btndiv">
                <span onClick={handleLogin}>
                  <Button type="primary">Login</Button>
                </span>
                <span onClick={handleSignUp}>
                  <Button type="primary">Sign Up</Button>
                </span>
                <span onClick={handleGuest}>
                  <Button type="primary">Guest</Button>
                </span>
              </div>
            </form>
          </Card>
        ) : (
          <Card className="signUp">
           
            <h2>Sign Up</h2>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={Yup.object({
                firstName: Yup.string()
                  .max(15, "Must be 15 characters or less")
                  .required("Required"),
                lastName: Yup.string()
                  .max(20, "Must be 20 characters or less")
                  .required("Required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                password: Yup.string()
                  .required("No password provided")
                  .min(8, "Password is too short - should be 8 chars minimum.")
                  .matches(
                    /[a-zA-Z]/,
                    "Password can only contain Latin letters."
                  ),
                confirmPassword: Yup.string()
                  .required("Confirm your password")
                  .oneOf([Yup.ref("password"), null], "Password not matched"),
              })}
              onSubmit={(values) => {
                handleUser(values)
                
              }}
            >
              <Form className="regis_form">
                <div className="spacebetween">
                  <label htmlFor="firstName">
                    First Name<span className="star">*</span>
                  </label>
                  <Field name="firstName" type="text" />
                </div>
                <div className="er-msg">
                  {" "}
                  <ErrorMessage name="firstName" />
                </div>

                <div className="spacebetween">
                  <label htmlFor="lastName">
                    Last Name<span className="star">*</span>
                  </label>
                  <Field name="lastName" type="text" />
                </div>
                <div className="er-msg">
                  {" "}
                  <ErrorMessage name="lastName" />
                </div>

                <div className="spacebetween">
                  <label htmlFor="email">
                    Email Address<span className="star">*</span>
                  </label>
                  <Field name="email" type="email" />
                </div>
                <div className="er-msg">
                  {" "}
                  <ErrorMessage name="email" />
                </div>
                <div className="spacebetween">
                  <label htmlFor="password">
                    Create Password<span className="star">*</span>
                  </label>

                  <Field
                    name="password"
                    type={passwordShown ? "text" : "password"}
                  />
                  <span className="np">
                    {passwordShown ? (
                      <EyeFilled className="eye" onClick={visiblity} />
                    ) : (
                      <EyeInvisibleFilled className="eye" onClick={visiblity} />
                    )}
                  </span>
                </div>
                <div className="er-msg">
                  {" "}
                  <ErrorMessage name="password" />
                </div>

                <div className="spacebetween">
                  <label htmlFor="email">
                    Confirm Password<span className="star">*</span>
                  </label>

                  <Field
                    name="confirmPassword"
                    type={passwordShown ? "text" : "password"}
                  />
                  <span className="cp">
                    {passwordShown ? (
                      <EyeFilled className="eye1" onClick={visiblity} />
                    ) : (
                      <EyeInvisibleFilled
                        className="eye1"
                        onClick={visiblity}
                      />
                    )}
                  </span>
                </div>

                <div className="er-msg">
                  {" "}
                  <ErrorMessage name="confirmPassword" />
                </div>
                <button style={{cursor:"pointer"}} onClick={handleBack}>Back to Login</button>
                <button className="button" type="submit">
                  <Button type="primary">Sign Up</Button>
                </button>
              </Form>
            </Formik>
          </Card>
        )}
      </div>
    </>
  );
}

export default Login;
