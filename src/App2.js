import React, {Component} from 'react';
import './App.css'
import './App2.css'
import Info from './ToyComponents/info'
import info from "./ToyComponents/info.css";
import image from "./ToyComponents/download.jpg"



class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode: 'welcome'
    }
  }

  getContent(){
    var result = null;

    if(this.state.mode === 'welcome')
    result = 
      <body>
      <div class="grid-container">
        
        <div class="grid-item header">식물 키우기 프로젝트{this.props.data}</div>
        <div class="grid-item aside">
          <Info
            onChangePage={function(){
              this.setState({ 
                mode:'plantInfoEnvironment'
              })
            }.bind(this)}>
          </Info>
        </div>
        <div class="grid-item content">식물 등록하기</div>
        <div class="grid-item footer">환경 조정하기</div>
      </div>
      </body>

    else if(this.state.mode === "plantInfoEnvironment"){
      console.log("hello");
      result =
      <body>
          <div class="grid_container">
              <div class="grid_item header">식물 정보 및 환경</div>
              <div class="grid_item aside"><img src={image} alt="My Image"/></div>
              <div class="grid_item content">
                  <span>조도 : 56% <br/></span> 
                  <span>온도 : 23도<br/></span> 
                  <span>습도 : 42%</span>
              </div>
              <div className="grid_item footer">식물 정보 : 고추냉이</div>
          </div>
      </body>
    }

    return result;
  }

  render(){
    
    console.log("fuck")
    return(
      this.getContent()
    );
  }
}


export default App;