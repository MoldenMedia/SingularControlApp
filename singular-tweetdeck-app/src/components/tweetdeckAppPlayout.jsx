import React, { Component } from "react";

class AppTweetdeckPlayout extends Component {
  state = {};
  render() {
    console.log("AppTweetdeckPlayout - called");
    return (
      <div>
        <h4>AppTweetdeckPlayout</h4>
        <button type="button" className="btn btn-outline-primary m-2">
          Primary
        </button>
      </div>
    );
  }
}

export default AppTweetdeckPlayout;
