import React from "react";
import { sendNewIngredientToFirebase } from "../firebase";

export function showIngredientBox() {
  let ingredientBox = document.getElementsByClassName("add-ingredient");
  ingredientBox[0].style.display = "block";
}

export function hideIngredientBox() {
  let ingredientBox = document.getElementsByClassName("add-ingredient");
  ingredientBox[0].style.display = "None";
}

class AddIngredient extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemName: "",
      units: "",
      value: "",
    };

    this.handleItemNameChange = this.handleItemNameChange.bind(this);
    this.handleUnitsChange = this.handleUnitsChange.bind(this);
    this.submitIngredient = this.submitIngredient.bind(this);
  }

  resetState() {
    this.setState({
      itemName: "",
      units: "",
    });
  }

  handleItemNameChange(event) {
    this.setState({ itemName: event.target.value });
  }

  handleUnitsChange(event) {
    this.setState({ units: event.target.value });
  }

  submitIngredient() {
    hideIngredientBox();
    sendNewIngredientToFirebase(this.state.itemName, this.state.units);
    this.resetState();
  }
  render() {
    return (
      <div className="add-ingredient">
        <div>
          Name:{" "}
          <input
            id={"itemName"}
            value={this.state.itemName}
            onChange={this.handleItemNameChange}
          />
        </div>
        <div>
          {" "}
          Units of Measurement:{" "}
          <input
            id={"units"}
            value={this.state.units}
            onChange={this.handleUnitsChange}
          />
        </div>
        <button onClick={this.submitIngredient}>Submit</button>
      </div>
    );
  }
}

export default AddIngredient;
