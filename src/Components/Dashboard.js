import * as React from 'react';
import { Text } from 'react-native';
import './Dashboard.css';



export default function Dashboard() {
  return (
    <div style={{position: 'absolute', top: 83, left: 250, right: 500}}>
        <h2>Vendor Management</h2>
        <hr />
        <p>Proposed Primary Brand Name:</p>

        <p>Suspected Error:</p>

        <div style={{position: "relative", top:-123, right:"-500px"}}>
            <button style={{height: '30px', width : '100px', backgroundColor: '#68a9ae'}}>
                Match
            </button>
            <button style={{height: '30px', width : '100px', backgroundColor: '#68a9ae'}}>
                Don't Match
            </button>
        </div>

        <hr style={{position: 'relative'}}/>
        
        <p>Proposed Primary Brand Name:</p>

        <p>Suspected Error:</p>
        

        <div style={{position: "relative", top:-123, right:"-500px"}}>
            <button style={{height: '30px', width : '100px', backgroundColor: '#68a9ae'}}>
                Match
            </button>
            <button style={{height: '30px', width : '100px', backgroundColor: '#68a9ae'}}>
                Don't Match
            </button>
        </div>    

    </div>
  );
}