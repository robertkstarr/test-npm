import React from "react";

class UserIdentity extends React.Component {
  render() {
    return (
      <div>
        {this.props.user ? (
          <img height="250" alt={"User"} src={this.props.user.photoURL} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default UserIdentity;
