import React, { Component } from "react";
import AppTweetdeckSetup from "./tweetdeckAppSetup";
import AppTweetdeckPlayout from "./tweetdeckAppPlayout";
import { Tabs, Tab } from "react-bootstrap";

class AppTweetdeckMaster extends Component {
  state = {};

  render() {
    console.log("AppTweetdeckMaster - called");
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Tweetdeck App</span>
        </nav>
        <Tabs
          className="m-2"
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={k => this.setState({ key: k })}
        >
          <Tab eventKey="playout" title="Playout">
            <h4>Welcome to playout ......</h4>
            <AppTweetdeckPlayout />
          </Tab>
          <Tab eventKey="setup" title="Setup">
            <h4>Welcome to setup...</h4>
            <AppTweetdeckSetup />
          </Tab>
          <Tab eventKey="debug" title="Debug">
            <h4>Welcome to debug...</h4>
          </Tab>
        </Tabs>
      </React.Fragment>
    );
  }
}

export default AppTweetdeckMaster;
