
import React, { Component } from "react";
import BookSearch from "./Search/Search.js";

import "./App.css";
import BookSearchList from "./List/List.js";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPrintType: "all",
      isBookType: "no-filter",
      searchEntry: "",
      searchResults: [],
      error: null
    };
  }
  setPrintSelected(sel) {
    console.log("Print Selected:", sel);
    this.setState({
      isPrintType: sel
    });
  }

  setBookSelected(sel) {
    console.log(" BOOK selected:", sel);
    this.setState({
      isBookType: sel
    });
  }

  searchInput(inp) {
    console.log("Search has been activated. Search entry is: ", inp);
    this.setState({
      searchEntry: inp
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submit handled!");

    const baseUrl =
      "https://www.googleapis.com/books/v1/volumes?q=search+terms";
    let printType = `$printType=${this.state.isPrintType}`;
    let filter =
      this.state.isBookType !== "no-filter"
        ? `$filter=${this.state.isBookType}`
        : "";
    let searchEntry = `${this.state.searchEntry}`;

    const queryString = `${baseUrl}?q=${searchEntry}&${filter}&${printType}`;

    fetch(queryString)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then(responseJSon => {
        console.log(responseJSon);
        this.setState({
          searchResults: responseJSon.items
        });
      })
      .catch(e => {
        console.log(e);
        this.setState({ error: e.message });
      });
  }

  render() {
    const selectOptions = {
      printSelections: ["all", "books", "magazines"],
      bookSelections: [
        "All eBooks",
        "Full",
        "Partial",
        "Free eBooks",
        "Paid eBooks",
      ]
    };

    const error = this.state.error ? (
      <div className="error">{this.state.error}</div>
    ) : (
      ""
    );
    return (
      <div className="App">
        <BookSearch
          selectOptions={selectOptions}
          printChangeHandler={sel => this.setPrintSelected(sel)}
          bookChangeHandler={sel => this.setBookSelected(sel)}
          handleSubmit={e => this.handleSubmit(e)}
          handleSearchInput={inp => this.searchInput(inp)}
        />
        <BookSearchList filterBookInfo={this.state.searchResults} />
        {error}
      </div>
    );
  }
}

App.defaultProps = {
  searchResults: []
};