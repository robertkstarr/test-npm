import React from "react";
import {
  auth,
  databaseRef,
} from "./firebase";
import "./App.css";
import SignedIn from "./Body/SignedIn";
import NotSignedIn from "./Body/NotSignedIn";

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
      <div className="App">{this.state.user ? <SignedIn user={this.state.user} firebaseValue={this.state.firebaseValue} /> : <NotSignedIn />}</div>
    );
  }
}

export default App;
