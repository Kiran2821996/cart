import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import {EyeFilled , EyeInvisibleFilled } from '@ant-design/icons';
import { useState,useContext } from "react";
import Login from "./Login";
import{ fecthedData } from "../../context/Context";


function SignUp() {
  const {users,setUsers } = useContext(fecthedData);
 const [log,setLog]=useState(false)
  const [passwordShown, setPasswordShown] = useState(false);
  const visiblity = () => {
    setPasswordShown(!passwordShown);
  };

  return (
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
        setLog(!log)
        console.log(values);
      }}
    >
        {!log?<Form className="regis_form">
        <div className="fn_regis regis">
          <label htmlFor="firstName">First Name:</label>
          <Field name="firstName" type="text" />
        </div>
        <div className="er-msg">
          {" "}
          <ErrorMessage name="firstName" />
        </div>

        <div className="ln_regis regis">
          <label htmlFor="lastName">Last Name:</label>
          <Field name="lastName" type="text" />
        </div>
        <div className="er-msg">
          {" "}
          <ErrorMessage name="lastName" />
        </div>

        <div className="em_regis regis">
          <label htmlFor="email">Email Address:</label>
          <Field name="email" type="email" />
        </div>
        <div className="er-msg">
          {" "}
          <ErrorMessage name="email" />
        </div>
        <div className="up_regis regis">
          <label htmlFor="password">Password:</label>
          <div className="gg">
          <Field name="password" type={passwordShown ? "text" : "password"} />
          <span>{passwordShown ? (
            <EyeFilled className="eye" onClick={visiblity} />
          ) : (
            <EyeInvisibleFilled className="eye" onClick={visiblity} />
          )}</span>
          
          </div>
          
        </div>
        <div className="er-msg">
          {" "}
          <ErrorMessage name="password" />
        </div>

        <div className="cp_regis regis">
          <label htmlFor="email">Confirm Password:</label>
          <div className="gg1">
          <Field name="confirmPassword" type={passwordShown ? "text" : "password"} />
          <span>{passwordShown ? (
            <EyeFilled className="eye1" onClick={visiblity} />
          ) : (
            <EyeInvisibleFilled className="eye1" onClick={visiblity} />
          )}</span>
          
          </div>
          
        </div>

        <div className="er-msg">
          {" "}
          <ErrorMessage name="confirmPassword" />
        </div>
        <button type="submit">
          Sign Up
        </button>
      </Form>:<Login/>}
      
    </Formik>
  );
}
export default SignUp;
