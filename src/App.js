import React, {Component} from 'react';
import ColorContainer from './ColorContainer';

import './App.css';


const colorArray=[];
 
  for (let colorR=8;colorR<=256;colorR=colorR+8)
   {
       
       for (let colorG=8;colorG<=256;colorG=colorG+8)
           {

               for (let colorB=8;colorB<=256;colorB=colorB+8)
                   {
                       colorArray.push("RGB("+colorR+","+colorG+","+colorB+")")
                   }
               }
   }
   
const initialstate = {
  colorRGB: colorArray
   }

class App extends Component {
  constructor() {
    super();
    this.state = initialstate;

}


render() {

  const Stylecomponent = {
    display: "grid",
    gridTemplateColumns: "repeat(256,3px)",
    gridTemplateRows: "repeat(128,3px)",
    justifyContent:"center",
    marginTop: "50px",
    padding: "10px",
    boxSizing: "border-box"
  
  }

  const {colorRGB} = this.state;
    return(
    
       <div style={Stylecomponent}>
        {
        colorRGB.map((uniquecolor,index) => 
        <ColorContainer key={index} value={uniquecolor} />) 
        }
        </div>
    )

  }

}

export default App;

