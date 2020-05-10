import React from "react";
import Header from "../Header/Header";
import AppBody from "./AppBody";
import { signOutOfGoogle } from "../firebase";

class SignedIn extends React.Component {
  render() {
    return (
      <div className="App-Logged-In">
        <div className="row">
          <Header user={this.props.user} />
        </div>
        <AppBody
          user={this.props.user}
          firebaseValue={this.props.firebaseValue}
        />
        <div className="row">
          <button
            onClick={() => {
              signOutOfGoogle();
            }}
          >
            Sign out of Google
          </button>
        </div>
      </div>
    );
  }
}

export default SignedIn;
