import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FontAwesome from 'react-fontawesome';
import './LoginScreen.css';
import * as GoogleButton from "./GoogleButton.css";

const responseGoogle = (response) => {
  	console.log(response);
}

class LoginScreen extends Component {

	render() {
		return (
			<div className="Login-container">
				<main className="Content">
				  	<div className="login">
						<div className="google-login">
					  		<FontAwesome name='google-plus' />
							<GoogleLogin
							  clientId={'135317923400-spd82dqbrhcbq5k6nvskhdodgtb34ana.apps.googleusercontent.com'}
							  onSuccess={this.props.handleLogin}
							  onFailure={responseGoogle}
							  offline={false}
							  style={GoogleButton}>
							</GoogleLogin>
						</div>
				  	</div>
				</main>
			</div>
		);
	}
}

export default LoginScreen;
