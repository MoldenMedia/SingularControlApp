import React, { Component } from "react";
import AppTweetdeckSetup from "./tweetdeckAppSetup";
import AppTweetdeckPlayout from "./tweetdeckAppPlayout";

class AppTweetdeckMaster extends Component {
  state = {};
  render() {
    console.log("AppTweetdeckMaster - called");
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Tweetdeck App</span>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-nav"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link" href="#">
                Features
              </a>
            </div>
          </div>
        </nav>
        <AppTweetdeckSetup />
        <AppTweetdeckPlayout />
      </React.Fragment>
    );
  }
}

export default AppTweetdeckMaster;
