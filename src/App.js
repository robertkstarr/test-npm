import React from "react";
import AppBody from "./Body/AppBody";
import Header from "./Header/Header";
import {
  signInWithGoogle,
  signOutOfGoogle,
  auth,
  databaseRef,
} from "./firebase";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firebaseValue: null };
  }

  componentDidMount = () => {
    this.setState({ test: "testing" });
    auth.onAuthStateChanged((userAuth) => {
      this.setState({ user: userAuth });
      databaseRef.child("todos").on("value", (snapshot) => {
        this.setState({ firebaseValue: snapshot.val() });
      });
    });
  };

  render() {
    return (
      <div className="App">
        <div className="row">
          <Header user={this.state.user} />
        </div>
        <AppBody
          user={this.state.user}
          firebaseValue={this.state.firebaseValue}
        />
        <div className="row">
          {!this.state.user ? (
            <button
              onClick={() => {
                signInWithGoogle();
              }}
            >
              Sign in with Google
            </button>
          ) : (
            <button
              onClick={() => {
                signOutOfGoogle();
              }}
            >
              Sign out of Google
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
