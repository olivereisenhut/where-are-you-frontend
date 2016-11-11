import React, { Component } from 'react';
import Button from './Button';


class Counter extends Component {

  render() {
    return (
      <div>
        <span>{this.props.count}</span>
        
        <Button callback={this.props.onClick} label="Count up" />
      </div>
    );
  }
}

export default Counter;
