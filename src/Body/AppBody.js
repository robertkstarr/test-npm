import React from "react";
import Ingredents from "./Ingredients";
import UserIdentity from "./UserIdentity";
import { sendToFirebase } from "../firebase";

class AppBody extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="column">
          <Ingredents />
        </div>
        <div className="column">
          <UserIdentity user={this.props.user} />
        </div>
        <div className="column">
          <div>{this.props.firebaseValue}</div>
          <button
            onClick={() => {
              sendToFirebase();
            }}
          >
            Send to Firebase
          </button>
        </div>
      </div>
    );
  }
}

export default AppBody;
