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
    <div class="container">
        <div class="box">식물키우기</div>
        <div class='box2'>조도</div>
        <div class='box3'>습도</div>
        <div class='box4'>온도</div>
    </div>
    </body>
    );
  }
}


export default App;
