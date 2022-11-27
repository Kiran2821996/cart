import React from 'react'
import Header from './components/header/Header'
import Main from "./components/main/Main"

import "./App.css"
import "./components/main/All/All.css";

function App() {
  return (
    <div className='body'>
      <div className='header'>
      <Header/>
      </div>
      <div className='main'>
      <Main/>
      </div>
      
      
    </div>
  )
}

export default App