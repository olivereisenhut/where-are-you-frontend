import React, { Component } from 'react';
import Header from './Header';
import Counter from './Counter';

import './App.css';

class App extends Component {
  
  state = {
    count: 0
  };
  
  onClick = (event) => {
    this.setState({count: this.state.count + 1});
  }
  
  
  render() {
    return (
      <div className="App">
        <Header title="Where Are You"/>
        <main className="Content">
          <Counter onClick={this.onClick} count={this.state.count}/>
        </main>
      </div>
    );
  }
}

export default App;
