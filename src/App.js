import React from "react";
import Dice from "./Dice";
import {
  signInWithGoogle,
  signOutOfGoogle,
  auth,
  sendToFirebase,
  databaseRef
} from "./firebase";
// import signIn from './firebase';
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {firebaseValue: null};
  }

  componentDidMount = () => {
    this.setState({ test: "testing" });
    auth.onAuthStateChanged((userAuth) => {
      this.setState({ user: userAuth });
      databaseRef.child("todos").on("value", (snapshot) => {
        this.setState({firebaseValue: snapshot.val()})
      })
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<div className={"horizontal"}>*/}
          {/*  <Dice /> <Dice /> <Dice /> <Dice /> <Dice />*/}
          {/*</div>*/}
          {this.state.user ? `Hello, ${this.state.user.displayName}` : ""}
          {/*<div>{this.state.user.email}</div>*/}
          {/*<div>{this.state.user.displayName}</div>*/}
          {this.state.user ? (
            <img height="250" alt={"User image"} src={this.state.user.photoURL} />
          ) : (
            ""
          )}
          {/*<div>{Object.keys(this.state.user).map(e => {*/}
          {/*    return (*/}
          {/*        <div>{e}: {this.state.user.displayName}</div>*/}

          {/*    )*/}
          {/*})}</div>*/}
          <div>
            <div>
              {this.state.firebaseValue}
            </div>
            <button
                onClick={() => {
                  sendToFirebase();
                }}
            >
              Send to Firebase
            </button>
          </div>
          {!this.state.user ? (
            <button
              onClick={() => {
                signInWithGoogle();
              }}
            >
              Sign in with Google
            </button>
          ) : (
            <div>
              <div>
                <button
                  onClick={() => {
                    signOutOfGoogle();
                  }}
                >
                  Sign out of Google
                </button>
              </div>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default App;
