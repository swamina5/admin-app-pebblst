import React, { Component, useState, useEffect } from "react";
import './Admin.css';
import header from '../Assets/header-wave.png'
import logo from '../Assets/pebblst-color-primary-logo.png'
import { Helmet } from 'react-helmet';
import Title from '../Components/Title'
import Dashboard from '../Components/Dashboard'
  
export default function Admin() {  
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
  const [posts, setPosts] = useState({ body: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://tmndlrtd2k.execute-api.us-east-2.amazonaws.com/test/vendor");
        const json = await response.json();
        const vendors = json.body.map(vendor => {
          return { vendor_name: vendor.vendor_name, possible_name: vendor.possible_name };
        });
        setPosts({ body: vendors });
      } catch(error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

    return (      
      <body>
        <div>
          <Title/>     
        </div>
        <div id="mySidenav" className="sidenav">
          <a href="#" id="vendors" onClick={useEffect}>Brands & Vendors</a>
          <a href="#" id="friends">Friends</a>
        </div>
        <div style={divStyle}></div>
        
        <div style={{position: 'absolute', top: 83, left: 250, right: 500}}>
          <h2>Vendor Management</h2>
          {posts.body.map((post, index) => {
            return (
              <div key={index} className="pebble-id">
                <hr />
                <p className="vendor-name">Proposed Primary Brand Name: {post.possible_name}</p> 
                <p className="possible-name">Suspected Error: {post.vendor_name}</p>
                <div style={{position: "relative", top:-75, right:"-500px"}}>
                  <button style={{height: '30px', width : '100px', backgroundColor: '#68a9ae'} }>
                      Match
                  </button>
                  <button style={{height: '30px', width : '100px', backgroundColor: '#68a9ae'}}>
                      Don't Match
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </body>
    );
};
