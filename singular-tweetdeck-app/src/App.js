import React, { Component } from "react";
import AppTweetdeckMaster from "./components/tweetdeckAppMaster";
import "./App.css";

class App extends Component {
  render() {
    // console.log("App - Rendered");
    return (
      <React.Fragment>
        <AppTweetdeckMaster />
        {/* <AppSDKHandler /> */}
      </React.Fragment>
    );
  }
}

export default App;
