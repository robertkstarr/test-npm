import React from "react";
import Ingredients from "./Ingredients";
import UserIdentity from "./UserIdentity";
import { sendToFirebase } from "../firebase";

class AppBody extends React.Component {
  render() {
    return (
      <div className="row-center">
        <div className="column">
          <Ingredients />
        </div>
        <div className="column">
          <UserIdentity user={this.props.user} />
        </div>
        <div className="column">
          <div>
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
      </div>
    );
  }
}

export default AppBody;
