import React, { Component } from "react";
import AppSDKHandlerUI from "./appSDKHandlerUI";
import * as appSDK from "../singularUtilities/appSDKUtilities";
import { validate } from "@babel/types";

class AppSDKMaster extends Component {
  singularData = {
    singularApp: {},
    outputs: [],
    firstOutput: {},
    compositionId: "162372",
    defaultOutput: {},
    composition: {},
    subcomposition: {}
  };

  sdkAppRootFunctions = [
    {
      name: ".listOutputs()",
      comment: "",
      handleClick(singularApp) {
        appSDK.appListOutputs(singularApp);
      }
    },
    {
      name: ".getOutputById(id)",
      comment: "id='-LioHwzJsDFQ6tgwtZqf'",
      handleClick(singularApp) {
        appSDK.appGetOutputById(singularApp, "-LioHwzJsDFQ6tgwtZqf");
      }
    },
    {
      name: ".getOutputByName(name)",
      comment: "name='Default'",
      handleClick(singularApp) {
        appSDK.appGetOutputByName(singularApp, "Default");
      }
    },
    {
      name: ".listCompositions()",
      comment: "",
      handleClick(singularApp) {
        appSDK.appListCompositions(singularApp);
      }
    },
    {
      name: ".getCompositionById(id)",
      comment: "id='168742-latest-1562097996430'",
      handleClick(singularApp) {
        appSDK.appGetCompositionById(singularApp, "168742-latest-1562097996430");
      }
    },
    {
      name: ".getCompositionByName(name)",
      comment: "name='Corner Cap'",
      handleClick(singularApp) {
        appSDK.appGetCompositionByName(singularApp, "Corner Cap");
      }
    },
    {
      name: ".getCompositionBrowserUrl()",
      comment: "",
      handleClick(singularApp) {
        appSDK.appGetCompositionBrowserUrl(singularApp);
      }
    },
    {
      name: ".importComposition(composition)",
      comment: "compToImport={ name: 'Stealth', composition: { refId: 168744 } }",
      handleClick(singularApp) {
        const compToImport = [{ name: "Stealth", composition: { refId: 168744 } }];
        appSDK.appImportComposition(singularApp, compToImport);
      }
    },
    {
      name: ".storage()",
      comment: "",
      handleClick(singularApp) {
        appSDK.appStorage(singularApp);
      }
    },
    {
      name: ".function name here.",
      comment: "comment",
      handleClick(singularApp) {
        appSDK.appListCompositions(singularApp);
      }
    }
  ];

  sdkAppOutputFunctions = [
    {
      name: ".getComposition()",
      comment: "output.name='Default'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        appSDK.outGetComposition(output);
      }
    },
    {
      name: ".getPreviewUrl()",
      comment: "output.name='Default'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        appSDK.outGetPreviewUrl(output);
      }
    },
    {
      name: ".getUrl()",
      comment: "output.name='Default'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        appSDK.outGetUrl(output);
      }
    },
    {
      name: ".setComposition(composition)",
      comment: "composition.name='Epic'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.appGetCompositionByName(singularApp, "Default");
        appSDK.outSetComposition(output, composition);
      }
    }
  ];

  sdkAppCompositionFunctions = [
    {
      name: "compGetControlNode",
      comment: "comp on output",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        appSDK.compGetControlNode(composition);
      }
    },
    {
      name: "compGetLogicLayer",
      comment: "comp on output",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        appSDK.compGetLogicLayer(composition);
      }
    },
    {
      name: "compGetModel",
      comment: "comp on output",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        appSDK.compGetModel(composition);
      }
    },
    {
      name: "compGetPayload",
      comment: "comp on output",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        appSDK.compGetPayload(composition);
      }
    },
    {
      name: "compGetProp(prop)",
      comment: "prop='durations'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        appSDK.compGetProp(composition, "durations");
      }
    },
    {
      name: "compGetProp(prop)",
      comment: "prop='timeline2Active'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        appSDK.compGetProp(composition, "timeline2Active");
      }
    },
    {
      name: "compGetProp(prop)",
      comment: "prop='logicLayers'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        appSDK.compGetProp(composition, "logicLayers");
      }
    },
    {
      name: "compGetRefId",
      comment: "comp on output",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        appSDK.compGetRefId(composition);
      }
    },
    {
      name: "compGetSequencer",
      comment: "comp on output",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        appSDK.compGetSequencer(composition);
      }
    },
    {
      name: "compGetState",
      comment: "comp on output",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        appSDK.compGetState(composition);
      }
    },
    {
      name: "compGetSubcomposition(id)",
      comment: "comp on output id='d20addc0-68a4-422c-8bc2-ee48f1076cbc'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        appSDK.compGetSubcomposition(composition, "d20addc0-68a4-422c-8bc2-ee48f1076cbc");
      }
    },
    {
      name: "compGetSubcompositionById(id)",
      comment: "comp on output id='d20addc0-68a4-422c-8bc2-ee48f1076cbc'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        appSDK.compGetSubcompositionById(composition, "d20addc0-68a4-422c-8bc2-ee48f1076cbc");
      }
    },
    {
      name: "compGetSubcompositionByName(name)",
      comment: "comp on output name='Score Bar'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        appSDK.compGetSubcompositionByName(composition, "Score Bar");
      }
    },
    {
      name: "compGetUISettings",
      comment: "comp on output",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        appSDK.compGetUISettings(composition);
      }
    },
    {
      name: "compJumpTo(to)",
      comment: "comp on output to='In'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        appSDK.compJumpTo(composition, "In");
      }
    },
    {
      name: "compListSubcompositions",
      comment: "comp on output",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        appSDK.compListSubcompositions(composition);
      }
    },
    // {
    //   name: "compOn(event='animation_state', callback)",
    //   comment: "no example - 'not tested'",
    //   handleClick(singularApp) {
    //     const output = appSDK.appGetOutputByName(singularApp, "Default");
    //     const composition = appSDK.outGetComposition(output);
    //     appSDK.compOn(composition, "animation_state", function() {});
    //   }
    // },
    // {
    //   name: "compOff((event='animation_state')",
    //   comment: "no example - 'not tested'",
    //   handleClick(singularApp) {
    //     const output = appSDK.appGetOutputByName(singularApp, "Default");
    //     const composition = appSDK.outGetComposition(output);
    //     appSDK.compOff(composition, "animation_state");
    //   }
    // },
    {
      name: "compPlayTo(to)",
      comment: "comp on output to='In'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        appSDK.compPlayTo(composition, "In");
      }
    },
    {
      name: "compRemove(callback)",
      comment: "no example",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        appSDK.compRemove(composition, function() {});
      }
    },
    {
      name: "compResetAllPayloads()",
      comment: "",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        appSDK.compResetAllPayloads(composition);
      }
    },
    {
      name: "compSetPayload(payload)",
      comment: "",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        const payload = {
          GlobalTextNode: "Welcome from Singular.live @ " + Date.now()
        };
        appSDK.compSetPayload(composition, payload);
      }
    }
  ];

  sdkAppSubcompositionFunctions = [
    {
      name: "subGetControlNode",
      comment: "subcomp='Score Bar'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        const subcomposition = composition.getSubcompositionByName("Score Bar");
        appSDK.subGetControlNode(subcomposition);
      }
    },
    {
      name: "subGetLogicLayer",
      comment: "subcomp='Score Bar'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        const subcomposition = composition.getSubcompositionByName("Score Bar");
        appSDK.subGetLogicLayer(subcomposition);
      }
    },
    {
      name: "subGetModel",
      comment: "subcomp='Score Bar'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        const subcomposition = composition.getSubcompositionByName("Score Bar");
        appSDK.subGetModel(subcomposition);
      }
    },
    {
      name: "subGetPayload",
      comment: "subcomp='Score Bar'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        const subcomposition = composition.getSubcompositionByName("Score Bar");
        appSDK.subGetPayload(subcomposition);
      }
    },
    {
      name: "subGetProp(prop)",
      comment: "subcomp='Score Bar' prop='durations'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        const subcomposition = composition.getSubcompositionByName("Score Bar");
        appSDK.subGetProp(subcomposition, "durations");
      }
    },
    {
      name: "subGetProp(prop)",
      comment: "subcomp='Score Bar' prop='timeline2Active'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        const subcomposition = composition.getSubcompositionByName("Score Bar");
        appSDK.subGetProp(subcomposition, "timeline2Active");
      }
    },
    {
      name: "subGetProp(prop)",
      comment: "subcomp='Score Bar' prop='logicLayers'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        const subcomposition = composition.getSubcompositionByName("Score Bar");
        appSDK.subGetProp(subcomposition, "logicLayers");
      }
    },
    {
      name: "subGetSequencer",
      comment: "subcomp on output",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        const subcomposition = composition.getSubcompositionByName("Score Bar");
        appSDK.subGetSequencer(subcomposition);
      }
    },
    {
      name: "subGetState",
      comment: "subcomp on output",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        const subcomposition = composition.getSubcompositionByName("Score Bar");
        appSDK.subGetState(subcomposition);
      }
    },
    {
      name: "subGetSubcomposition(id)",
      comment: "subcomp id='d20addc0-68a4-422c-8bc2-ee48f1076cbc'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        const subcomposition = composition.getSubcompositionByName("Score Bar");
        appSDK.subGetSubcomposition(subcomposition, "d20addc0-68a4-422c-8bc2-ee48f1076cbc");
      }
    },
    {
      name: "subGetSubcompositionById(id)",
      comment: "subcomp id='d20addc0-68a4-422c-8bc2-ee48f1076cbc'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        const subcomposition = composition.getSubcompositionByName("Score Bar");
        appSDK.subGetSubcompositionById(subcomposition, "d20addc0-68a4-422c-8bc2-ee48f1076cbc");
      }
    },
    {
      name: "subGetSubcompositionByName(name)",
      comment: "subcomp name='Score Bar'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        const subcomposition = composition.getSubcompositionByName("Score Bar");
        appSDK.subGetSubcompositionByName(subcomposition, "Score Bar");
      }
    },
    {
      name: "subListSubcompositions",
      comment: "subcomp name='Score Bar'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        const subcomposition = composition.getSubcompositionByName("Score Bar");
        appSDK.subListSubcompositions(subcomposition);
      }
    },
    {
      name: "subJumpTo(to)",
      comment: "subcomp name='Score Bar' to='In'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        const subcomposition = composition.getSubcompositionByName("Score Bar");
        appSDK.subJumpTo(subcomposition, "In");
      }
    },
    {
      name: "subPlayTo(to)",
      comment: "subcomp name='Score Bar' to='Out'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        const subcomposition = composition.getSubcompositionByName("Score Bar");
        appSDK.subPlayTo(subcomposition, "Out");
      }
    },
    {
      name: "subResetPayload()",
      comment: "subcomp name='Score Bar'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        const subcomposition = composition.getSubcompositionByName("Score Bar");
        appSDK.subResetPayload(subcomposition);
      }
    },
    {
      name: "subSetPayload(payload)",
      comment: "subcomp name='Score Bar', 'T1', 'T2'",
      handleClick(singularApp) {
        const output = appSDK.appGetOutputByName(singularApp, "Default");
        const composition = appSDK.outGetComposition(output);
        const subcomposition = composition.getSubcompositionByName("Score Bar");
        const payload = {
          "Team 1 Name": "T1",
          "Team 2 Name": "T2"
        };
        appSDK.subSetPayload(subcomposition, payload);
      }
    }
  ];

  sdkAppSequencerFunctions = [
    {
      name: "sdkAppSequencerFunctions",
      comment: "",
      handleClick(singularApp) {
        appSDK.appListOutputs(singularApp);
      }
    }
  ];

  sdkAppStorageFunctions = [
    {
      name: ".get(key, callback)",
      comment: "key = 'storageName'",
      handleClick(singularApp) {
        const storage = appSDK.appStorage(singularApp);
        appSDK.storageGet(storage, "storageName", data => {
          console.log("storageGet.Callback - called ", data);
          return data;
        });
      }
    },
    {
      name: ".set(key, data, callback)",
      comment: "data = '{UTC: '" + Date.now() + "'}'",
      handleClick(singularApp) {
        const storage = appSDK.appStorage(singularApp);
        appSDK.storageSet(storage, "storageName", { UTC: Date.now() }, function() {
          console.log("storageSet.Callback - called");
        });
      }
    },
    {
      name: ".update(key, data, callback)",
      comment: "data = Date.now(): " + Date.now(),
      handleClick(singularApp) {
        const storage = appSDK.appStorage(singularApp);
        appSDK.storageUpdate(storage, "storageName", { UTC: Date.now() }, function() {
          console.log("storageUpdate.Callback - called");
        });
      }
    },
    {
      name: ".remove(key, callback)",
      comment: "key = 'storageName'",
      handleClick(singularApp) {
        const storage = appSDK.appStorage(singularApp);
        appSDK.storageRemove(storage, "storageName", function() {
          console.log("storageRemove.Callback - called");
        });
      }
    },
    {
      name: ".on(key, callback)",
      comment: "key = 'storageName'",
      handleClick(singularApp) {
        const storage = appSDK.appStorage(singularApp);
        appSDK.storageOn(storage, "storageName", v => cbOnStorage(v));
        // appSDK.storageOn(storage, "storageName", function() {
        //   console.log("storageOn.Callback - called");
        // });

        function cbOnStorage(v) {
          console.log("-> cbOnStorage ................ v: ", v);
        }
      }
    },
    {
      name: ".off(key, callback)",
      comment: "key = 'storageName'",
      handleClick(singularApp) {
        const storage = appSDK.appStorage(singularApp);
        appSDK.storageOff(storage, "storageName", cbOffStorage);
        // appSDK.storageOff(storage, "storageName", function() {
        //   console.log("storageOff.Callback - called");
        // });
        function cbOffStorage() {
          console.log("-> cbOffStorage ................");
        }
      }
    }
  ];

  state = {
    singularData: this.singularData,
    sdkFunctions: this.sdkAppRootFunctions
  };

  // component did mount
  componentDidMount() {
    console.log("componentDidMount - Mounted");
    appSDK.initializeSingularApp().then(singularApp => {
      if (singularApp) {
        // this.singularData.singularApp = singularApp;
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

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Singular App SDK Utilities</span>
        </nav>
        <div className="btn-group m-2" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            onClick={() => this.setState({ sdkFunctions: this.sdkAppRootFunctions })}
          >
            singularApp Funcs
          </button>
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            onClick={() => this.setState({ sdkFunctions: this.sdkAppOutputFunctions })}
          >
            .output Funcs
          </button>
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            onClick={() => this.setState({ sdkFunctions: this.sdkAppCompositionFunctions })}
          >
            .composition Funcs
          </button>
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            onClick={() =>
              this.setState({
                sdkFunctions: this.sdkAppSubcompositionFunctions
              })
            }
          >
            .subcomposition Funcs
          </button>
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            onClick={() => this.setState({ sdkFunctions: this.sdkAppSequencerFunctions })}
          >
            .sequencer Funcs
          </button>
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            onClick={() => this.setState({ sdkFunctions: this.sdkAppStorageFunctions })}
          >
            .storage Funcs
          </button>
        </div>

        <table className="table table-sm m-2">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Function</th>
              <th scope="col">Comment</th>
              <th scope="col">Do it</th>
            </tr>
          </thead>
          <AppSDKHandlerUI sdkFunctions={this.state.sdkFunctions} singularApp={this.state.singularApp} />
        </table>
      </React.Fragment>
    );
  }
}

export default AppSDKMaster;
