import React, { Component } from "react";
import AppSDKHandler from "./components/appSDKHandler";
import "./App.css";

class App extends Component {
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <AppSDKHandler />
      </React.Fragment>
    );
  }
}

export default App;
