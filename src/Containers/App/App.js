import React, { Component } from 'react';
import Config from '../../config';

import Header from '../../Components/Header/Header';
import Counter from '../../Components/Counter/Counter';

import './App.css';

class App extends Component {

    state = {
        count: 0,
        user: {}
    };

    onClick = (event) => {
        this.setState({
            count: this.state.count + 1
        });
    }

    handleLogin = (data) => {
        const profile = data['profileObj']
        const newUser = {
          Name: profile['familyName'],
          Prename: profile['givenName'],
          Mail: profile['email']
        };
        console.log(newUser);
        fetch(`${Config.API_URL}/user/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then(function(response) {
            return response.json()
        }).then(function(json) {
            console.log('parsed json', json)
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        });
    }


  render() {
    const childrenWithAppState = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       appState: this.state,
       handleLogin: this.handleLogin
     })
    );

    return (
      <div className="App">
        <Header title="Where Are You"/>
        <main className="Content">
          <Counter onClick={this.onClick} count={this.state.count}/>
          {childrenWithAppState}
        </main>
      </div>
    );
  }
}

export default App;
