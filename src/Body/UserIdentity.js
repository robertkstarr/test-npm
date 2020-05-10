import React from "react";

class UserIdentity extends React.Component {
  render() {
    return (
      <div className={"UserIdentity"}>
        {this.props.user ? (
          <img alt={"User"} src={this.props.user.photoURL} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default UserIdentity;
