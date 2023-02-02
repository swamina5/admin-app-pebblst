import React from 'react'
import './Title.css';
import logo from '../Assets/pebblst-color-primary-logo.png'
import header from '../Assets/header-wave.png'
import '../Assets/raleway-font/Raleway-Bold.ttf'

function Title() {
  return (
    <div>
    <div className="Title">
        <img style={{ position: "absolute", left: "10px", height: 50 }} src={logo} />
        <h1 style ={{ position: "absolute", right: "10px", height: 30}}>Adminstrative Console</h1>

    </div>
      <img style={{position: "absolute", top: 75}} src={header} />

    </div>
  )
}

export default Title