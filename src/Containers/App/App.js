import React, { Component } from 'react';
import Config from '../../config';
import Header from '../../Components/Header/Header';
import canUseDOM from "can-use-dom";

import './App.css';

const geolocation = (
  canUseDOM && navigator.geolocation ?
  navigator.geolocation : 
  ({
    getCurrentPosition(success, failure) {
      failure(`Your browser doesn't support geolocation.`);
    },
  })
);

class App extends Component {

    constructor(props) {
      super(props);
			
			// get user location
			geolocation.getCurrentPosition((position) => {
				if (this.isUnmounted) {
					return;
				}
				this.updatePosition(position.coords); // success
			}, (reason) => {
				if (this.isUnmounted) {
					return;
				}
				console.log("Error: Couldn't get location!")
			});

      //send all five seconds the location to the api
      window.setInterval(this.sendLocation, 5000);
    }

    sendLocation = (coordinates) => {
      if (this.state.user.Id) {
				const newCoords = {
					lat: this.state.position.latitude,
					long: this.state.position.longitude
				};

				const self = this;
        fetch(`${Config.API_URL}/coordinate/${self.state.user.Id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
						body: JSON.stringify(newCoords)
        }).then(function(coordinates) {
            return coordinates.json()
        }).then(function(json) {
						// coordinates in json
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        });
      }

    }

    state = {
			user: {},
			position: {}
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

		updatePosition = (positionData) => {
			this.setState({position: positionData});
		}

		componentDidMount() {
			if (!this.state.user.Id && this.props.location.pathname !== '/login') {
				this.props.router.push('/login');
			}
		}

		handleDeleteUser = (friendId) => {
      if (!friendId) {
        console.log("No friend id defined")
      }

      const self = this;

      fetch(`${Config.API_URL}/friends/${self.state.user.Id}/${friendId}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          },
      }).then(function(response) {
          return response.json()
      }).then(function(json) {
          self.setNewUser(json);
      }).catch(function(ex) {
          console.log('parsing failed', ex)
      });
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
