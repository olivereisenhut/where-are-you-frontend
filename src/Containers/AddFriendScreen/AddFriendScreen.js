import React, { Component } from 'react';

import './AddFriendScreen.css';

class AddFriendScreen extends Component {

	state = {
    users: [{
  		"id": 1,
  		"prename": "Oliver",
  		"name": "Eisenhut",
  		"email": "oliver.eisenhut@gmail.com",
  		"friends": [{
				"prename": "Oliver",
				"name": "Eisenhut",
				"email": "oliver.eisenhut@gmail.com",
				"friends": [],
				"google_id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQyMjlhYmNjYzhlZGYwNTcyYTM3MmY2YjM1ZjJmNTdiMmFlNzU0NDYifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiaWF0IjoxNDc5MDcxMzY4LCJleHAiOjE0NzkwNzQ5NjgsImF0X2hhc2giOiJ2X2dQSTFBcm5mUk1LbHpoaF9vLVpnIiwiYXVkIjoiMTM1MzE3OTIzNDAwLXNwZDgyZHFicmhjYnE1azZudnNraGRvZGd0YjM0YW5hLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA3OTM0NTA5NjM2NjM5ODYxNjYwIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF6cCI6IjEzNTMxNzkyMzQwMC1zcGQ4MmRxYnJoY2JxNWs2bnZza2hkb2RndGIzNGFuYS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImVtYWlsIjoib2xpdmVyLmVpc2VuaHV0QGdtYWlsLmNvbSIsIm5hbWUiOiJPbGl2ZXIgRWlzZW5odXQiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1wY3pJRU9UOElpMC9BQUFBQUFBQUFBSS9BQUFBQUFBQUFTVS9IU0VZNnNfWm5qdy9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiT2xpdmVyIiwiZmFtaWx5X25hbWUiOiJFaXNlbmh1dCIsImxvY2FsZSI6ImVuLUdCIn0.jLAl8l2kftrPIiNkpesiKW9VrP2MAn80q1xk7KFlFxUZ76h-tagxtQ4b4f0RzIIg-554V6kMzzeSuk-GHBl2dJq1mX7-RYiCzFXJVqH_AJYkDsaDSIZIGzRZYTrPxcbtWHQXQBoqMnlB3x2aj9_7OfGaiaF4-rWvU9eAnpDOnjIFsAdtGahZ_LRPRXtyjOxXcRYILM9ZtOgpuNUN0zLGS5pNeaSEtYZcOrI-OchKaYF7zXjPrGx3JQmQ8xwcFig2_a0QcOgjlfmzmr3n8E5uFnSRfsK_3UZwtipi-TI654FS9OIr0vHC5F-plYJk3P_9BN4rTwiis5WwYuoWFXfvIg",
				"image_url": "https://lh3.googleusercontent.com/-pczIEOT8Ii0/AAAAAAAAAAI/AAAAAAAAASU/HSEY6s_Znjw/s96-c/photo.jpg"
    	}],
			"image_url": "https://lh3.googleusercontent.com/-pczIEOT8Ii0/AAAAAAAAAAI/AAAAAAAAASU/HSEY6s_Znjw/s96-c/photo.jpg"
  	}];
	}
	
  render() {
		return (
			<div className="AddFriendContainer">
				<div className="container">
					<input type="search" placeholder="search" />
				</div>
			</div>
    );
  }
}

export default AddFriendScreen;
 