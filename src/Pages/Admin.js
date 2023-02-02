import React, { Component } from "react";
import './Admin.css';
import header from '../Assets/header-wave.png'
import logo from '../Assets/pebblst-color-primary-logo.png'
import { Helmet } from 'react-helmet';
import Title from '../Components/Title'
import Dashboard from '../Components/Dashboard'



class Admin extends Component {

  render() {
    const divStyle = {
      position: "absolute",
      left: "500px",
      transition: "0.3s",
      padding: "30px",
      width: "100px",
      text_decoration: "none",
      font_size: "20px",
      color: "black",
      border_radius: "0 5px 5px 0"
    };

    const tableStyle = {

    }

    return (      
      <body>
        
        <div>
          <Title/>     
        </div>


            <div id="mySidenav" class="sidenav">
              <a href="#" id="vendors">Brands & Vendors</a>
              <a href="#" id="friends">Friends</a>
            </div>

          <div style={divStyle}>
        </div>
        <Dashboard />

       

      </body>

      );
      
  }
}
export default Admin;