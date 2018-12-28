import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        letsMooove
      </div>
    );
  }
}

export default App;
