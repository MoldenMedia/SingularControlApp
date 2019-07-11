import React, { Component } from "react";
import * as appSDK from "../singularUtilities/appSDKUtilities";

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
    appSDK.initializeSingularApp().then(singularApp => {
      if (singularApp) {
        const outputs = appSDK.appListOutputs(singularApp);
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        appSDK.outSetComposition(output, composition);
        this.setState({
          singularApp: singularApp,
          outputs: outputs,
          firstOutput: output,
          composition: composition,
          sdkFunctions: this.sdkAppRootFunctions
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
    appSDK.compPlayTo(subComposition, nextState);
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
