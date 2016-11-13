import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

import './LoginScreen.css';


const responseGoogle = (response) => {
  console.log(response);
}


class LoginScreen extends Component {

  onClick = (event) => {
    console.log("login now");
  }

  render() {
    //TODO send id token to backend-service => https://developers.google.com/identity/sign-in/web/backend-auth
    return (
        <div className="Login-container">

            <main className="Content">
               <GoogleLogin
                  onClick={this.onClick}
                    clientId={'135317923400-spd82dqbrhcbq5k6nvskhdodgtb34ana.apps.googleusercontent.com'}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    offline={false}
                    style={{}}>

                </GoogleLogin>
            </main>
        </div>
    );
  }
}

export default LoginScreen;
