import React from 'react'

import {useSelector} from 'react-redux';
import Login from './components/header/login/Login';
import Header from './components/header/Header';
import Main from "./components/main/Main"


import "./App.css"
import "./components/main/All/All.css";

function App() {
  const loggedInUser = useSelector((state) => {
    return state.login
  })

  return (
    <>
    {loggedInUser ? 
    <div className='body'>
    <div className='header'>
    <Header/>
    </div>
    <div className='main'>
    <Main/>
    </div>
  </div>
    : 
    
      <Login />
    }
  </>
    
  )
}

export default App