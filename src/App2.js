import React, {Component} from 'react';
import './App.css'
import './App2.css'
import TOC from "./components/TOC.js"
import ReadContent from "./components/ReadContent.js"
import CreateContent from "./components/CreateContent.js"
import UpdateContent from "./components/UpdateContent.js"
import Subject from "./components/Subject.js"
import Control from "./components/Control.js"



class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    
    return(
    <body>
    <div class="parent">
        <div class="box">This is a box</div>
        <div class='box2'>This is a box</div>
        <div class='box3'>This is a box</div>
        <div class='box4'>This is a box</div>
    </div>
    </body>
    );
  }
}

class Square extends React.Component{
    constructor(props){
    super(props);
  }
  render(){
    const style ={
     width:"100px",
      height:"100px",
      'background-color':"red",
      display:"inline-block"
    };
    
    return(
        <div style ={style}>
       </div>
    )
  }  
}

export default App;
