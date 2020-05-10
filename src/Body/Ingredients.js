import React from "react";
import { auth, databaseRef } from "../firebase";

class Ingredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    this.setState({ test: "testing" });
    auth.onAuthStateChanged((userAuth) => {
      this.setState({ user: userAuth });
      databaseRef.child("Ingredients").on("value", (snapshot) => {
        this.setState({ ingredients: snapshot.val() });
      });
    });
  };

  render() {
    return (
      <div className="Ingredients">
        <div className="Ingredient-Header">Ingredients:</div>
        <div className={"Ingredients-List"}>
          {this.state.ingredients ? (
            Object.keys(this.state.ingredients).map((ingredient) => (
              <div>{ingredient}</div>
            ))
          ) : (
            <div></div>
          )}
        </div>
        <div>
          <button>Add Ingredient</button>
        </div>
      </div>
    );
  }
}
export default Ingredients;
