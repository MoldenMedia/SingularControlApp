import React, { Component } from "react";
import TimerControl from "./components/timerControl";
//import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <TimerControl />
      </React.Fragment>
    );
  }
}

export default App;
