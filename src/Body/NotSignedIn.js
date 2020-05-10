import React from "react";
import { signInWithGoogle } from "../firebase";

class NotSignedIn extends React.Component {
  render() {
    return (
      <div className={"row"}>
        <button
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Sign in with Google
        </button>
      </div>
    );
  }
}

export default NotSignedIn;
