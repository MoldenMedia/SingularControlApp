/*****************************************************************************/
/*
  Singular App SDK Utilities
  @name appSDKUtitlities.jsx
  @author Singular Team
  @version 0.0.1
  @date 3/7/2019
  @copyright (c) 2019 Singular.Live PTE
  @license Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*/
/*****************************************************************************/
// Prerequisites for using the Singular App SDK
/*
      <!-- REQUIRED FOR DEVELOPMENT to run and test a Singular App on a local PC -->
    <!-- Load to use the Singular App SDK Library -->
    <!-- Required: ALLWAYS!! -->
    <script src="https://app.singular.live/libs/singularapp/0.0.5/singularapp.js"></script>
    <!-- Load to use the Singular Graphics SDK Library -->
    <!-- Required: for running a local instance of the Singular render engine -->
    <!-- <script src="https://app.singular.live/libs/singularplayer/0.1.2/singularplayer.js"></script> -->
    <!-- Load the Firebase JavaScript Library -->
    <!-- Required: ALLWAYS for sending data from the app to the composition and when using the App SDK storage feature -->
    <script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>

    <script>
      if (!parent || (parent && !parent.runningOnSingularServer)) {
        SingularApp.createWithAppInstanceKey(
          "paste-the-Virtual App Key-from-the-app-manager-here",
          "https://app.singular.live/",
          singularAppInit,
          "yourSingularUser@yourDomain.com",
          "yourPassword"
        );

        function singularAppInit(app) {
          window.singularApp = app;
          window.production = false;
          console.log("index.html: singularAppInit - Called", app);
        }
      } else {
        alert("ERROR: Could not connect to Singular server.");
      }
    </script>
    <!-- END FOR DEVELOPMENT -->
*/
/*****************************************************************************/
// initialize Singular App
// call this function in the componentDidMount() or useEffect() function
export const initializeSingularApp = () => {
  console.log("initializeSingularApp - Called");
  return new Promise(resolve => {
    Object.defineProperty(window, "singularApp", {
      set(value) {
        console.log("singularApp initialized...");
        resolve(value);
      }
    });
  });
};

/*****************************************************************************/
// Singular App SDK functions
// The following sections covers functions of the Singular App SDK
/*****************************************************************************/
// singularApp root functions
/*
  .listOutputs()
  .getOutputById(id)
  .listCompositions()
  .getCompositionById(id)
  .getCompositionByName(nameFromAppTemplate)
  .getCompositionBrowserUrl()
  .compositionBrowserEventCallback()
  .importComposition()
  .removeCompositionById(id, callback)
  .removeCompositionByName(name, callback)
  .removeAllCompositions(callback)
  .listIdsByName(array, name)
  .storage
*/
/*
ServerDate: ƒ ServerDate()
audioBrowserEventCallback: ƒ (windowParent, callback)
compositionBrowserEventCallback: ƒ (windowParent, callback)
createSingularForm: ƒ (window, dom, _controlNode, callback)
destroySingularForm: ƒ (dom)
getAppInstanceInfo: ƒ ()
getAudioBrowserUrl: ƒ ()
getComposition: ƒ (id)
getCompositionBrowserUrl: ƒ ()
getCompositionById: ƒ (id)
getCompositionByName: ƒ (name)
getCompositionUrl: ƒ (comp)
getImageBrowserUrl: ƒ ()
getOutput: ƒ (id)
getOutputById: ƒ (id)
getOutputByName: ƒ (name)
imageBrowserEventCallback: ƒ (windowParent, callback)
importComposition: ƒ (comp, callback)
listCompositions: ƒ ()
listIdsByName: ƒ (array, name)
listOutputs: ƒ ()
registerWindow: ƒ (_window)
removeAllCompositions: ƒ (callback)
removeCompositionById: ƒ (id, callback)
removeCompositionByName: ƒ (name, callback)
removeSingularForm: ƒ ()
renderSingularForm: ƒ ()
storage: {set: ƒ, update: ƒ, get: ƒ, on: ƒ, off: ƒ, …}

*/
/*****************************************************************************/
// list outputs defined in the App Template
export const appListOutputs = singularApp => {
  // console.log("appListOutputs - called");
  const outputs = singularApp.listOutputs();
  console.log(".listOutputs() = ", outputs);
  return outputs;
};

// get output defined by id
export const appGetOutputById = (singularApp, id) => {
  // console.log("appGetOutputById - called");
  const output = singularApp.getOutputById(id);
  if (output) {
    console.log(".getOutputById(" + id + ") = ", output);
    return output;
  }
  return null;
};

// get output defined by name
export const appGetOutputByName = (singularApp, name) => {
  // console.log("appGetOutputByName - called");
  const output = singularApp.getOutputByName(name);
  if (output) {
    console.log(".getOutputByName(" + name + ") = ", output);
    return output;
  }
  return null;
};

// list compositions defined in the App Template
export const appListCompositions = singularApp => {
  // console.log("appListCompositions - called");
  const compositions = singularApp.listCompositions();
  console.log(".listCompositions() = ", compositions);
  return compositions;
};

// get composition defined by id
export const appGetCompositionById = (singularApp, id) => {
  // console.log("appGetCompositionById - called");
  const composition = singularApp.getCompositionById(id);
  if (composition) {
    console.log(".getCompositionById(" + id + ") = ", composition);
    return composition;
  }
  console.log(".getCompositionById(" + id + ") = ", null);
  return null;
};

// get composition defined by name
export const appGetCompositionByName = (singularApp, name) => {
  // console.log("appGetCompositionByName - called");
  const composition = singularApp.getCompositionByName(name);
  if (composition) {
    console.log(".getCompositionByName(" + name + ") = ", composition);
    return composition;
  }
  console.log(".getCompositionByName(" + name + ") = ", null);
  return null;
};

// get composition browser URL
export const appGetCompositionBrowserUrl = singularApp => {
  // console.log("appGetCompositionBrowserUrl - called");
  const compositionBrowserUrl = singularApp.getCompositionBrowserUrl();
  console.log(".getCompositionBrowserUrl() = ", compositionBrowserUrl);
  return compositionBrowserUrl;
};

// composition browser event callback
export const appCompositionBrowserEventCallback = singularApp => {
  // console.log("appCompositionBrowserEventCallback - called");
  singularApp.compositionBrowserEventCallback(window, function(msg) {
    console.log("msg = ", msg);
    if (msg.event === "composition_selected") {
      console.log("msg.event = ", msg.event);
    }
  });
};

// import composition
export const appImportComposition = (singularApp, composition) => {
  // console.log("appImportComposition - called");
  singularApp.importComposition(composition, function(result) {
    console.log("result = ", result);
    if (result.success) {
      console.log("result.success = ", result.success);
    }
  });
};

// remove composition by id
export const appRemoveCompositionById = (singularApp, id, callback) => {
  console.log("appRemoveCompositionById - called");
  singularApp.removeCompositionById(id, callback);
};

// remove composition by name
export const appRemoveCompositionByName = (singularApp, name, callback) => {
  console.log("appRemoveCompositionByName - called");
  singularApp.removeCompositionByName(name, callback);
};

// remove all compositions
export const appRemoveAllCompositions = (singularApp, callback) => {
  console.log("appRemoveAllCompositions - called");
  singularApp.removeAllCompositions(callback);
};

// list ids by name
export const appListIdsByName = (singularApp, array, name) => {
  // console.log("appListIdsByName - called");
  const ids = singularApp.listIdsByName(array, name);
  console.log(".listIdsByName(array, " + name + ") = ", ids);
};

// get App Firebase storage
export const appStorage = singularApp => {
  // console.log("appStorage - called");
  const storage = singularApp.storage;
  if (storage) {
    console.log(".storage = ", storage);
    return storage;
  }
  console.log(".storage = ", null);
  return null;
};

// create a Singular form for a specific control node
export const appCreateSingularForm = (
  singularApp,
  window,
  dom,
  controlNode,
  callback
) => {
  console.log("appCreateSingularForm - called");
  singularApp.createSingularForm(window, dom, controlNode, callback);
};

// destroy a Singular hosted form
export const appDestroySingularForm = (singularApp, dom) => {
  console.log("appDestroySingularForm - called");
  singularApp.destroySingularForm(dom);
};

/*****************************************************************************/
// singularApp output specific functions
/*
  .output.id: "-LioHwzJsDFQ6tgwtZqf"
  .output.name: "Default"

  .output.getComposition: ƒ ()
  .output.getPreviewUrl: ƒ ()
  .output.getUrl: ƒ ()
  .output.setComposition: ƒ (composition)
*/
/*****************************************************************************/

// set composition to output
export const outGetComposition = output => {
  // console.log("outGetComposition - called");
  const composition = output.getComposition();
  if (composition) {
    console.log(".getComposition() = ", composition);
    return composition;
  }
  console.log(".getComposition() = ", null);
  return null;
};

// get preview URL
export const outGetPreviewUrl = output => {
  // console.log("outGetPreviewUrl - called");
  const previewUrl = output.getPreviewUrl();
  console.log(".getPreviewUrl() = ", previewUrl);
  return previewUrl;
};

// get output URL
export const outGetUrl = output => {
  // console.log("outGetUrl - called");
  const url = output.getUrl();
  console.log(".getUrl() = ", url);
  return url;
};

// set composition to output
export const outSetComposition = (output, composition) => {
  console.log("outSetComposition - called");
  output.setComposition(composition);
};

/*****************************************************************************/
// singularApp composition specific functions
/*
  .composition.id
  .composition.name

  .composition.getControlNode: ƒ ()
  .composition.getLogicLayer: ƒ ()
  .composition.getModel: ƒ ()
  .composition.getPayload: ƒ ()
  .composition.getProp: ƒ (prop)
  .composition.getRefId: ƒ ()
  .composition.getSequencer: ƒ ()
  .composition.getState: ƒ ()
  .composition.getSubcomposition: ƒ (id)
  .composition.getSubcompositionById: ƒ (id)
  .composition.getSubcompositionByName: ƒ (name)
  .composition.getUISettings: ƒ ()
  .composition.jumpTo: ƒ (to)
  .composition.listSubcompositions: ƒ ()
  .composition.off: ƒ (event) ... not tested
  .composition.on: ƒ (event, cb) ... not tested
  .composition.playTo: ƒ (to)
  .composition.remove: ƒ (callback)
  .composition.resetAllPayloads: ƒ ()
  .composition.setPayload: ƒ (payload)
*/
/*****************************************************************************/

// get control node from composition
export const compGetControlNode = composition => {
  console.log("compGetControlNode - called");
  const controlNode = composition.getControlNode();
  if (controlNode) {
    console.log(".getControlNode(): ", controlNode);
    return controlNode;
  }
  return null;
};

// get logic layer from composition
export const compGetLogicLayer = composition => {
  console.log("compGetLogicLayer - called");
  const logicLayer = composition.getLogicLayer();
  if (logicLayer) {
    console.log(".getLogicLayer(): ", logicLayer);
    return logicLayer;
  }
  return null;
};

// get model from composition
export const compGetModel = composition => {
  console.log("compGetModel - called");
  const model = composition.getModel();
  if (model) {
    console.log(".getModel(): ", model);
    return model;
  }
  return null;
};

// get payload from composition
export const compGetPayload = composition => {
  console.log("compGetPayload - called");
  const payload = composition.getPayload();
  if (payload) {
    console.log(".getPayload(): ", payload);
    return payload;
  }
  return null;
};

// get property from composition
export const compGetProp = (composition, prop) => {
  console.log("compGetProp - called");
  const property = composition.getProp(prop);
  if (property) {
    console.log(".getProp(): ", property);
    return property;
  }
  return null;
};

// get refId from composition
export const compGetRefId = composition => {
  console.log("compGetRefId - called");
  const refId = composition.getRefId();
  if (refId) {
    console.log(".getRefId(): ", refId);
    return refId;
  }
  return null;
};

// get sequencer from composition
export const compGetSequencer = composition => {
  console.log("compGetSequencer - called");
  const sequencer = composition.getSequencer();
  if (sequencer) {
    console.log(".getSequencer(): ", sequencer);
    return sequencer;
  }
  return null;
};

// get state from composition
export const compGetState = composition => {
  console.log("compGetState - called");
  const state = composition.getState();
  if (state) {
    console.log(".getState(): ", state);
    return state;
  }
  return null;
};

// get subcomposition from composition
export const compGetSubcomposition = (composition, id) => {
  console.log("compGetSubcomposition - called");
  const subcomposition = composition.getSubcomposition(id);
  if (subcomposition) {
    console.log(".getSubcomposition(): ", subcomposition);
    return subcomposition;
  }
  return null;
};

// get subcomposition by id from composition
export const compGetSubcompositionById = (composition, id) => {
  console.log("compGetSubcompositionById - called");
  const subcomposition = composition.getSubcompositionById(id);
  if (subcomposition) {
    console.log(".getSubcompositionById(): ", subcomposition);
    return subcomposition;
  }
  return null;
};

// get subcomposition by name from composition
export const compGetSubcompositionByName = (composition, name) => {
  console.log("compGetSubcompositionByName - called");
  const subcomposition = composition.getSubcompositionByName(name);
  if (subcomposition) {
    console.log(".getSubcompositionByName(): ", subcomposition);
    return subcomposition;
  }
  return null;
};

// get UI settings from composition
export const compGetUISettings = composition => {
  console.log("compGetUISettings - called");
  const subcomposition = composition.getUISettings();
  if (subcomposition) {
    console.log(".getUISettings(): ", subcomposition);
    return subcomposition;
  }
  return null;
};

// jump to animation state from composition
export const compJumpTo = (composition, nextState) => {
  console.log("compJumpTo - called");
  composition.jumpTo(nextState);
};

// get list subcomposition from composition
export const compListSubcompositions = composition => {
  console.log("compListSubcompositions - called");
  const subcompositions = composition.listSubcompositions();
  if (subcompositions) {
    console.log(".listSubcompositions(): ", subcompositions);
    return subcompositions;
  }
  return null;
};

// on state from composition
export const compOn = (composition, event, callback) => {
  console.log("compOn - called");
  //  composition.On(event, callback);
};

// off state from composition
export const compOff = (composition, event) => {
  console.log("compOff - called");
  //  composition.Off(event);
};

// play to animation state from composition
export const compPlayTo = (composition, nextState) => {
  console.log("compPlayTo - called");
  composition.playTo(nextState);
};

// remove composition
export const compRemove = (composition, callback) => {
  console.log("compRemove - called");
  //  composition.remove(callback);
};

// reset all payloads in composition
export const compResetAllPayloads = composition => {
  console.log("compResetAllPayloads - called");
  composition.resetAllPayloads();
};

// set payload in composition
export const compSetPayload = (composition, payload) => {
  console.log("compSetPayload - payload = ", payload);
  composition.setPayload(payload);
};

/*****************************************************************************/
// singularApp subcomposition specific functions
/*
  .subcomposition.id
  .subcomposition.name

  .subcomposition.getControlNode: ƒ ()
  .subcomposition.getLogicLayer: ƒ ()
  .subcomposition.getModel: ƒ ()
  .subcomposition.getPayload: ƒ ()
  .subcomposition.getProp: ƒ (prop)
  .subcomposition.getSequencer: ƒ ()
  .subcomposition.getState: ƒ ()
  .subcomposition.getSubcomposition: ƒ (id)
  .subcomposition.getSubcompositionById: ƒ (id)
  .subcomposition.getSubcompositionByName: ƒ (name)
  .subcomposition.jumpTo: ƒ (to)
  .subcomposition.listSubcompositions: ƒ ()
  .subcomposition.playTo: ƒ (to)
  .subcomposition.resetPayload: ƒ ()
  .subcomposition.setPayload: ƒ (payload)
*/

// get control node from subcomposition
export const subGetControlNode = subcomposition => {
  console.log("subGetControlNode - called");
  const controlNode = compGetControlNode(subcomposition);
  return controlNode;
};

// get logic layer from subcomposition
export const subGetLogicLayer = subcomposition => {
  console.log("subGetLogicLayer - called");
  const logicLayer = compGetLogicLayer(subcomposition);
  return logicLayer;
};

// get model from subcomposition
export const subGetModel = subcomposition => {
  console.log("subGetModel - called");
  const model = compGetModel(subcomposition);
  return model;
};

// get payload from subcomposition
export const subGetPayload = subcomposition => {
  console.log("subGetPayload - called");
  const payload = compGetPayload(subcomposition);
  return payload;
};

// get property from subcomposition
export const subGetProp = (subcomposition, prop) => {
  console.log("subGetProp - called");
  const property = compGetProp(subcomposition, prop);
  return property;
};

// get sequencer from subcomposition
export const subGetSequencer = subcomposition => {
  console.log("subGetSequencer - called");
  const sequencer = compGetSequencer(subcomposition);
  return sequencer;
};

// get state from subcomposition
export const subGetState = subcomposition => {
  console.log("subGetState - called");
  const state = compGetState(subcomposition);
  return state;
};

// get subsubcomposition from subcomposition
export const subGetSubcomposition = (subcomposition, id) => {
  console.log("subGetSubcomposition - called");
  const subsubcomposition = compGetSubcomposition(subcomposition, id);
  return subsubcomposition;
};

// get subsubcomposition by id from subcomposition
export const subGetSubcompositionById = (subcomposition, id) => {
  console.log("subGetSubcompositionById - called");
  const subsubcompositions = compGetSubcompositionById(subcomposition, id);
  return subsubcompositions;
};

// get subsubcomposition by name from subcomposition
export const subGetSubcompositionByName = (subcomposition, name) => {
  console.log("subGetSubcompositionByName - called");
  const subsubcompositions = compGetSubcompositionByName(subcomposition, name);
  return subsubcompositions;
};

// get list subsubcomposition from subcomposition
export const subListSubcompositions = subcomposition => {
  console.log("subListSubcompositions - called");
  const subsubcompositions = compListSubcompositions(subcomposition);
  return subsubcompositions;
};

// subcomposition jump to next animation state
export const subJumpTo = (subcomposition, nextState) => {
  console.log("subJumpTo - nextState: ", nextState);
  subcomposition.jumpTo(nextState);
};

// subcomposition play to next animation state
export const subPlayTo = (subcomposition, nextState) => {
  console.log("subPlayTo - nextState: ", nextState);
  subcomposition.playTo(nextState);
};

// reset payload in subcomposition
export const subResetPayload = subcomposition => {
  console.log("subResetPayload - called");
  subcomposition.resetPayload();
};

// set payload in subcomposition
export const subSetPayload = (subcomposition, payload) => {
  console.log("subSetPayload - payload = ", payload);
  subcomposition.setPayload(payload);
};

/*
// short description of function
export const saFunctionName = singularApp => {
  console.log("saFunctionName - called");
}
*/

/*



























*/

/*****************************************************************************/
// get all outputs
export const getListOfOutputs = singularApp => {
  console.log("getListOfOutputs - Called");
  const outputs = singularApp.listOutputs();
  console.log("outputs: ", outputs);
  return outputs;
};

/*****************************************************************************/
// get first output
export const getFirstOutput = singularApp => {
  console.log("getFirstOutput - Called");
  const outputs = getListOfOutputs(singularApp);
  const firstOutput = singularApp.getOutput(outputs[0].id);
  console.log("firstOutput: ", firstOutput);
  return firstOutput;
};

/*****************************************************************************/

/*****************************************************************************/
// setCompositionToOutput
export const setCompositionByIdToOutput = (
  singularApp,
  output,
  compositionId
) => {
  console.log("setCompositionByIdToOutput - Called");
  const composition = singularApp.getComposition(compositionId);
  if (composition) {
    output.setComposition(composition);
    return composition;
  }
  return null;
};

/*****************************************************************************/
// setCompositionToOutput
export const setCompositionToOutput = (composition, output) => {
  console.log("setCompositionToOutput - Called");
  if (composition) {
    output.setComposition(composition);
    console.log(
      "setCompositionToOutput - composition set to output",
      composition,
      output
    );
    console.log(
      "setCompositionToOutput - getPreviewUrl",
      output.getPreviewUrl()
    );
    console.log("setCompositionToOutput - getURL", output.getUrl());
    return composition;
  }
  return null;
};

/*****************************************************************************/
// getCompositionFromOutput
export const getCompositionFromOutput = output => {
  console.log("getCompositionFromOutput - Called");
  const composition = output.getComposition();
  if (composition) {
    return output.getComposition();
  }
  return null;
};

/*****************************************************************************/
// updateCompositionPayload
export const updateCompositionPayload = () => {
  console.log("updateCompositionPayload - Called");
};

/*****************************************************************************/
// playToAnimationState
export const playToAnimationState = (composition, nextState) => {
  console.log("playToAnimationState - Called: nextState = ", nextState);
  composition.playTo(nextState);
};

/*****************************************************************************/
// jumpToAnimationState
export const jumpToAnimationState = (composition, nextState) => {
  console.log("jumpToAnimationState - Called: nextState = ", nextState);
  composition.jumpTo(nextState);
};

/*****************************************************************************/
//

/*****************************************************************************/
//

/*****************************************************************************/
//
