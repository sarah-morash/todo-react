import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHidden: "display: none"
    };

    this.openList = this.openList.bind(this);
  }
  
  openList(event) {
    if (this.isHidden === "none"){
      this.setState({isHidden: "display: block"});
    } else {
      this.setState({isHidden: "display: none"});
    }
  }

  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" onChange={this.openList} />
          <div id="list" style={this.isHidden}>
            <input type="text" placeholder="What's on your list today?" className="item-add" />
          </div>
      </div>
    );
  }
}

export default App;
