import React, { Component } from 'react';
import Header from './Header';
import Button from './Button';
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
    return (
        <div className="Login-container">
            <Header title="Where Are You" />
        
            <main className="Content">
               <GoogleLogin
                    clientId={'135317923400-spd82dqbrhcbq5k6nvskhdodgtb34ana.apps.googleusercontent.com'}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    offline={false}>
                  
                    <Button callback={this.onClick} label="Login with Google" />
                </GoogleLogin>
            </main>
        </div>
    );
  }
}

export default LoginScreen;
