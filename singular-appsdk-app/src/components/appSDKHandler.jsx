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
    const subComposition = this.state.composition.getSubcompositionByName(
      "Score Bar"
    );
    console.log("handleAnimationClick: ", subComposition);
    playToAnimationState(subComposition, nextState);
  }

  handleListCompositionsInAppClick() {
    console.log("handleListCompositionsInAppClick - Called");
    const compositions = this.state.singularApp.listCompositions();
    console.log("handleListCompositionsInAppClick:", compositions);
  }

  handleListCompositionsInFirstOutputClick() {
    console.log("handleListCompositionsInFirstOutputClick - Called");
    const composition = this.state.firstOutput.getComposition();
    console.log("handleListCompositionsInFirstOutputClick:", composition);
    this.setState({ composition: composition });
  }

  handleListSubCompositionsInFirstOutputClick() {
    console.log("handleListSubCompositionsInFirstOutputClick - Called");
    const subCompositions = this.state.composition.listSubcompositions();
    console.log(
      "handleListSubCompositionsInFirstOutputClick:",
      subCompositions
    );
  }

  render() {
    return (
      <div>
        <h1>AppSDKHandler</h1>
        <p>
          <button onClick={() => this.handleListCompositionsInAppClick()}>
            List Compositions in App
          </button>
        </p>
        <p>
          <button
            onClick={() => this.handleListCompositionsInFirstOutputClick()}
          >
            List Composition in First Output
          </button>
        </p>
        <p>
          <button
            onClick={() => this.handleListSubCompositionsInFirstOutputClick()}
          >
            List SubCompositions of Composition in First Output
          </button>
        </p>
        <p>
          <button onClick={() => this.handleAnimationClick("In")}>
            Animate IN
          </button>
          <button onClick={() => this.handleAnimationClick("Out")}>
            Animate OUT
          </button>
        </p>
      </div>
    );
  }
}

export default AppSDKHandler;
