import React, { Component } from "react";
import './Admin.css';

class Admin extends Component {

  render() {
    const divStyle = {
      position: "absolute",
      left: "-80px",
      transition: "0.3s",
      padding: "15px",
      width: "100px",
      text_decoration: "none",
      font_size: "20px",
      color: "white",
      border_radius: "0 5px 5px 0"
    };

    return (      
      <body>

        <div id="mySidenav" class="sidenav">
          <a href="#" id="about">About</a>
          <a href="#" id="blog">Blog</a>
          <a href="#" id="projects">Projects</a>
          <a href="#" id="contact">Contact</a>
        </div>

        <div style={divStyle}>
          <h2>Hoverable Sidenav Buttons</h2>
          <p>Hover over the buttons in the left side navigation to open them.</p>
        </div>
          
      </body>

      );
      
  }
}
export default Admin;