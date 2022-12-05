import * as React from 'react';
import { Text } from 'react-native';



export default function Dashboard() {
  return (
    <div style={{position: 'absolute', top: 80, left: 145, right: 500}}>
        <h2>Vendor Management</h2>
       <hr />
       <p>Proposed Primary Brand Name:</p>
       <Text> {`\t Ulta`} </Text>

       <p>Suspected Error:</p>
       <Text> {`\t Utla`} </Text>

       <div style={{position: "relative", top:-123, right:"-500px"}}>
        <button style={{height: '30px', width : '100px', backgroundColor: '#68a9ae'}}>
            Match
        </button>
        <button style={{height: '30px', width : '100px', backgroundColor: '#68a9ae'}}>
            Don't Match
        </button>
       </div>

       <hr/>
       <p>Proposed Primary Brand Name:</p>
       <Text> {`\t Gymboree`} </Text>

       <p>Suspected Error:</p>
       <Text> {`\t Gymbree`} </Text>

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