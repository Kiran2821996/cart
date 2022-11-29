import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate ,NavLink} from "react-router-dom";
import {EyeFilled , EyeInvisibleFilled } from '@ant-design/icons';
import { useState,useContext } from "react";
import Login from "./Login";
import{ fecthedData } from "../../context/Context";
import "./Login.css"

import { Card, Button } from "antd";


function SignUp() {
  let navigate = useNavigate();
  const {users,setUsers } = useContext(fecthedData);
 const [log,setLog]=useState(false)
  const [passwordShown, setPasswordShown] = useState(false);
  const visiblity = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="login"><h1 className="welcome" >Welcome to <span className="title">Shop_Lane</span> </h1>
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
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .required("No password provided")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
        confirmPassword: Yup.string()
          .required("Confirm your password")
          .oneOf([Yup.ref("password"), null], "Password not matched"),
      })}
      onSubmit={(values) => {
       setUsers([...users,values])
       navigate("/")
       console.log(navigate("/"),"kkk")
        console.log(values);
      }}
    >
        <Form className="regis_form">
        <div className="spacebetween">
          <label htmlFor="firstName">First Name<span className="star">*</span></label>
          <Field name="firstName" type="text" />
        </div>
        <div className="er-msg">
          {" "}
          <ErrorMessage name="firstName" />
        </div>

        <div className="spacebetween">
          <label htmlFor="lastName">Last Name<span className="star">*</span></label>
          <Field name="lastName" type="text" />
        </div>
        <div className="er-msg">
          {" "}
          <ErrorMessage name="lastName" />
        </div>

        <div className="spacebetween">
          <label htmlFor="email">Email Address<span className="star">*</span></label>
          <Field name="email" type="email" />
        </div>
        <div className="er-msg">
          {" "}
          <ErrorMessage name="email" />
        </div>
        <div className="spacebetween">
          <label htmlFor="password">Create Password<span className="star">*</span></label>
    
          <Field name="password" type={passwordShown ? "text" : "password"} />
          <span className="np">{passwordShown ? (
            <EyeFilled className="eye" onClick={visiblity} />
          ) : (
            <EyeInvisibleFilled className="eye" onClick={visiblity} />
          )}</span>
          
        
          
        </div>
        <div className="er-msg">
          {" "}
          <ErrorMessage name="password" />
        </div>

        <div className="spacebetween">
          <label htmlFor="email">Confirm Password<span className="star">*</span></label>
        
          <Field name="confirmPassword" type={passwordShown ? "text" : "password"} />
          <span className="cp">{passwordShown ? (
            <EyeFilled className="eye1" onClick={visiblity} />
          ) : (
            <EyeInvisibleFilled className="eye1" onClick={visiblity} />
          )}</span>
          
          
          
        </div>

        <div className="er-msg">
          {" "}
          <ErrorMessage name="confirmPassword" />
        </div>
        <button className="button" type="submit">
        <NavLink to={"./"} end className="nav_link" >
        <Button type="primary">
          Sign Up
          </Button>
        </NavLink>
          
         
        </button>
      </Form>
      
    </Formik>
    </Card>
    </div>
  );
}
export default SignUp;
