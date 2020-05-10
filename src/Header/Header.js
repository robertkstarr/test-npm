import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        {this.props.user ? `Hello, ${this.props.user.displayName}` : ""}
      </header>
    );
  }
}

export default Header;
