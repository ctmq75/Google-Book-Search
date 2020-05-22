
import React, { Component } from "react";
import DisplaySelection from "./displaySelection.js";

export default class GetBookType extends Component {
  render() {
    const selectOptions = this.props.selectOptions.bookSelections;
    const bookOptions = selectOptions.map((options, i) => (
      <option value={options} key={i}>
        {options}
      </option>
    ));
    return (
      <div>
        <DisplaySelection
          bookOptions={bookOptions}
          printChangeHandler={this.props.bookChangeHandler}
        />
      </div>
    );
  }
}