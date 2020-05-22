
import React, { Component } from "react";
import GetPrintType from "../getPrintType";
import GetBookType from "../getBookType.js";

export default class BookSearch extends Component {
  render() {
    return (
      <div className="BookSearch">
        <header className="header">
          <h1> Google Book Search</h1>
        </header>

        <form
          className="googleBookSearch__form"
          onSubmit={e => this.props.handleSubmit(e)}
        >
          <label className="searchL" htmlFor="search">
            Search:
          </label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="henry"
            onChange={inp => this.props.handleSearchInput(inp.target.value)}
          />

          <input type="submit" value="Submit" />
        </form>

        <label htmlFor="printType">Print Type:</label>
        <GetPrintType
          selectOptions={this.props.selectOptions}
          printChangeHandler={this.props.printChangeHandler}
        />

        <label htmlFor="bookType">Book Type:</label>
        <GetBookType
          selectOptions={this.props.selectOptions}
          bookChangeHandler={this.props.bookChangeHandler}
        />
      </div>
    );
  }
}