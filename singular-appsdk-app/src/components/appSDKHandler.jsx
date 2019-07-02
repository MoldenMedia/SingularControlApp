import React, { Component } from "react";
import {
  initializeSingularApp,
  getListOfOutputs,
  getFirstOutput,
  getCompositionFromOutput,
  playToAnimationState,
  setCompositionToOutput
} from "../singularUtilities/appSDKUtilities";

class AppSDKHandler extends Component {
  singularData = {
    singularApp: {},
    outputs: [],
    firstOutput: {},
    compositionId: "162372",
    composition: {}
  };

  state = { singularData: this.singularData };

  // component did mount
  componentDidMount() {
    console.log("componentDidMount - Mounted");
    initializeSingularApp().then(singularApp => {
      if (singularApp) {
        // this.singularData.singularApp = singularApp;
        const outputs = getListOfOutputs(singularApp);
        const firstOutput = getFirstOutput(singularApp);
        const composition = getCompositionFromOutput(firstOutput);
        setCompositionToOutput(composition, firstOutput);
        this.setState({
          singularApp: singularApp,
          outputs: outputs,
          firstOutput: firstOutput,
          composition: composition
        });
        console.log("composition: ", composition);
      }
    });
  }

  handleAnimationClick(nextState) {
    console.log("handleAnimationClick - nextState: ", nextState);
    playToAnimationState(this.state.composition, nextState);
  }

  render() {
    return (
      <div>
        <h1>AppSDKHandler</h1>
        <button onClick={() => this.handleAnimationClick("In")}>
          Animate IN
        </button>
        <button onClick={() => this.handleAnimationClick("Out")}>
          Animate OUT
        </button>
      </div>
    );
  }
}

export default AppSDKHandler;
