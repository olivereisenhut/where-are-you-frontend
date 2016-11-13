import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Counter from '../../Components/Counter/Counter';

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
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
