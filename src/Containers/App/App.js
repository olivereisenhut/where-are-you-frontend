import React, { Component } from 'react';
import Config from '../../config';

import Header from '../../Components/Header/Header';

import './App.css';

class App extends Component {

    state = {
        user: {
        }
    };

    setNewUser(userData) {
      this.setState({
        user: {
          Id: userData['id'],
          Prename: userData['prename'],
          Name: userData['name'],
          Email: userData['email'],
          GoogleTokenId: userData['google_id_token'],
          ImageUrl: userData['image_url'],
          Friends: userData['friends']
        }
      });
    }

		handleDeleteUser(userId) {
			console.log('User should be deleted');
		}

    handleLogin = (data) => {
      
        const profile = data['profileObj']
        const newUser = {
          Name: profile['familyName'],
          Prename: profile['givenName'],
          Mail: profile['email'],
          TokenId: data['tokenId'],
          ImageUrl: profile['imageUrl']
        };

        const self = this;

        fetch(`${Config.API_URL}/user/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then(function(response) {
            return response.json()
        }).then(function(json) {
            self.setNewUser(json);
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        });
    }


  render() {
    const childrenWithAppState = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       appState: this.state,
       handleLogin: this.handleLogin,
			 handleDeleteUser: this.handleDeleteUser
     })
    );

    return (
      <div className="App">
        <Header title="Where Are You"/>
        <main className="Content">
          {childrenWithAppState}
        </main>
      </div>
    );
  }
}

export default App;
