import React, { Component } from "react";
import AppSDKHandler from "./components/appSDKHandler";
import AppSDKMaster from "./components/appSDKMaster";
import "./App.css";

class App extends Component {
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <AppSDKMaster />
        {/* <AppSDKHandler /> */}
      </React.Fragment>
    );
  }
}

export default App;
