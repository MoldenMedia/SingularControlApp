/*****************************************************************************/
/*
  Singular App SDK Utilities
  @name appSDKUtitlities.jsx
  @author Singular Team
  @version 0.0.1
  @date 11/07/2019
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
  console.log("initializeSingularApp() - Called");
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
  if (singularApp) {
    const outputList = singularApp.listOutputs();
    if (outputList) {
      console.log(".listOutputs() = ", outputList);
      return outputList;
    }
    console.log("WARNING: .listOutputs() - no outputs found! outputList = ", outputList);
    return null;
  }
  console.log("WARNING: appListOutputs(singularApp) - invalid singularApp object! singularApp = ", singularApp);
  return null;
};

// get output defined by id
export const appGetOutputById = (singularApp, id) => {
  // console.log("appGetOutputById - called");
  if (singularApp) {
    const output = singularApp.getOutputById(id);
    if (output) {
      console.log(".getOutputById('" + id + "') = ", output);
      return output;
    }
    console.log("WARNING: .getOutputById('" + id + "') - output not found! output = ", output);
    return null;
  }
  console.log("WARNING: appGetOutputById(singularApp, id) - invalid singularApp object! singularApp = ", singularApp);
  return null;
};

// get output defined by name
export const appGetOutputByName = (singularApp, name) => {
  // console.log("appGetOutputByName - called");
  if (singularApp) {
    const output = singularApp.getOutputByName(name);
    if (output) {
      console.log(".getOutputByName('" + name + "') = ", output);
      return output;
    }
    console.log("WARNING: .getOutputByName('" + name + "') - output not found! output = ", output);
    return null;
  }
  console.log(
    "WARNING: appGetOutputByName(singularApp, name) - invalid singularApp object! singularApp = ",
    singularApp
  );
  return null;
};

// list compositions defined in the App Template
export const appListCompositions = singularApp => {
  // console.log("appListCompositions - called");
  if (singularApp) {
    const compositionList = singularApp.listCompositions();
    console.log(".listCompositions() = ", compositionList);
    return compositionList;
  }
  console.log("WARNING: appListCompositions(singularApp) - invalid singularApp object! singularApp = ", singularApp);
  return null;
};

// get composition defined by id
export const appGetCompositionById = (singularApp, id) => {
  // console.log("appGetCompositionById - called");
  if (singularApp) {
    const composition = singularApp.getCompositionById(id);
    if (composition) {
      console.log(".getCompositionById('" + id + "') = ", composition);
      return composition;
    }
    console.log("WARNING: .getCompositionById('" + id + "') - composition not found. composition = ", composition);
    return null;
  }
  console.log(
    "WARNING: appGetCompositionById(singularApp, id) - invalid singularApp object! singularApp = ",
    singularApp
  );
  return null;
};

// get composition defined by name
export const appGetCompositionByName = (singularApp, name) => {
  // console.log("appGetCompositionByName - called");
  if (singularApp) {
    const composition = singularApp.getCompositionByName(name);
    if (composition) {
      console.log(".getCompositionByName('" + name + "') = ", composition);
      return composition;
    }
    console.log("WARNING: .getCompositionByName('" + name + "') - composition not found. composition = ", composition);
    return null;
  }
  console.log(
    "WARNING: appGetCompositionByName(singularApp, name) - invalid singularApp object! singularApp = ",
    singularApp
  );
  return null;
};

// get composition browser URL
export const appGetCompositionBrowserUrl = singularApp => {
  // console.log("appGetCompositionBrowserUrl - called");
  if (singularApp) {
    const compositionBrowserUrl = singularApp.getCompositionBrowserUrl();
    console.log(".getCompositionBrowserUrl() = ", compositionBrowserUrl);
    return compositionBrowserUrl;
  }
  console.log(
    "WARNING: appGetCompositionBrowserUrl(singularApp) - invalid singularApp object! singularApp = ",
    singularApp
  );
  return "";
};

// composition browser event callback
export const appCompositionBrowserEventCallback = singularApp => {
  // console.log("appCompositionBrowserEventCallback - called");
  if (singularApp) {
    console.log(".compositionBrowserEventCallback() - called.");
    singularApp.compositionBrowserEventCallback(window, function(msg) {
      console.log("msg = ", msg);
      if (msg.event === "composition_selected") {
        console.log("msg.event = ", msg.event);
      }
    });
  }
  console.log(
    "WARNING: appCompositionBrowserEventCallback(singularApp) - invalid singularApp object! singularApp = ",
    singularApp
  );
};

// import composition
export const appImportComposition = (singularApp, composition) => {
  // console.log("appImportComposition - called");
  if (singularApp) {
    if (composition) {
      singularApp.importComposition(composition, function(result) {
        if (result.success) {
          console.log(".importComposition(composition, callback) - called. result.success = ", result.success);
          return;
        }
        console.log("WARNING: .importComposition(composition, callback) - failed. result.success = ", result.success);
      });
      return;
    }
    console.log(
      "WARNING: appImportComposition(singularApp, composition) - invalid composition object! composition = ",
      composition
    );
    return;
  }
  console.log(
    "WARNING: appImportComposition(singularApp, composition) - invalid singularApp object! singularApp = ",
    singularApp
  );
};

// remove composition by id
export const appRemoveCompositionById = (singularApp, id, callback) => {
  if (singularApp) {
    console.log(".removeCompositionById(id, callback) - called. id = ", id);
    singularApp.removeCompositionById(id, callback);
  }
  console.log(
    "WARNING: appRemoveCompositionById(singularApp, id, callback) - invalid singularApp object! singularApp = ",
    singularApp
  );
};

// remove composition by name
export const appRemoveCompositionByName = (singularApp, name, callback) => {
  if (singularApp) {
    console.log(".removeCompositionByName(name, callback) - called. name = ", name);
    singularApp.removeCompositionByName(name, callback);
  }
  console.log(
    "WARNING: appRemoveCompositionByName(singularApp, name, callback) - invalid singularApp object! singularApp = ",
    singularApp
  );
};

// remove all compositions
export const appRemoveAllCompositions = (singularApp, callback) => {
  if (singularApp) {
    console.log(".removeAllCompositions(callback) - called");
    singularApp.removeAllCompositions(callback);
  }
  console.log(
    "WARNING: appRemoveAllCompositions(singularApp, callback) - invalid singularApp object! singularApp = ",
    singularApp
  );
};

// list ids by name
export const appListIdsByName = (singularApp, array, name) => {
  // console.log("appListIdsByName - called");
  if (singularApp) {
    const ids = singularApp.listIdsByName(array, name);
    console.log(".listIdsByName(array, '" + name + "') - called. ids = ", ids);
    return ids;
  }
  console.log(
    "WARNING: appListIdsByName(singularApp, array, name) - invalid singularApp object! singularApp = ",
    singularApp
  );
  return null;
};

// get App Firebase storage
export const appStorage = singularApp => {
  // console.log("appStorage - called");
  if (singularApp) {
    const storage = singularApp.storage;
    if (storage) {
      console.log(".storage - called. storage = ", storage);
      return storage;
    }
    console.log("WARNING: .storage - invalid storage object! storage = ", storage);
    return null;
  }
  console.log("WARNING: appStorage(singularApp) - invalid singularApp object! singularApp = ", singularApp);
  return null;
};

// create a Singular form for a specific control node
export const appCreateSingularForm = (singularApp, window, dom, controlNode, callback) => {
  if (singularApp) {
    console.log(".createSingularForm(window, dom, controlNode, callback) - called");
    singularApp.createSingularForm(window, dom, controlNode, callback);
  }
  console.log(
    "WARNING: appCreateSingularForm(singularApp, window, dom, controlNode, callback) - invalid singularApp object! singularApp = ",
    singularApp
  );
  return;
};

// destroy a Singular hosted form
export const appDestroySingularForm = (singularApp, dom) => {
  if (singularApp) {
    console.log(".destroySingularForm(dom) - called");
    singularApp.destroySingularForm(dom);
    return;
  }
  console.log(
    "WARNING: appDestroySingularForm(singularApp, dom) - invalid singularApp object! singularApp = ",
    singularApp
  );
  return;
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
  if (output) {
    const composition = output.getComposition();
    if (composition) {
      console.log(".getComposition() = ", composition);
      return composition;
    }
    console.log("WARNING: .getComposition() - no composition on output found! composition = ", composition);
    return null;
  }
  console.log("WARNING: outGetComposition(output) - invalid output object! output = ", output);
  return null;
};

// get preview URL
export const outGetPreviewUrl = output => {
  // console.log("outGetPreviewUrl - called");
  if (output) {
    const previewUrl = output.getPreviewUrl();
    console.log(".getPreviewUrl() = ", previewUrl);
    return previewUrl;
  }
  console.log("WARNING: outGetPreviewUrl(output) - invalid output object! output = ", output);
  return "";
};

// get output URL
export const outGetUrl = output => {
  // console.log("outGetUrl - called");
  if (output) {
    const url = output.getUrl();
    console.log(".getUrl() = ", url);
    return url;
  }
  console.log("WARNING: outGetUrl(output) - invalid output object! output = ", output);
  return "";
};

// set composition to output
export const outSetComposition = (output, composition) => {
  // console.log("outSetComposition - called");
  if (output) {
    if (composition) {
      console.log(".setComposition() - called");
      output.setComposition(composition);
      return;
    }
    console.log(
      "WARNING: outSetComposition(output, composition) - invalid composition object! composition = ",
      composition
    );
    return;
  }
  console.log("WARNING: outSetComposition(output, composition) - invalid output object! output = ", output);
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
  // console.log("compGetControlNode - called");
  if (composition) {
    const controlNode = composition.getControlNode();
    if (controlNode) {
      console.log(".getControlNode(): ", controlNode);
      return controlNode;
    }
    console.log("WARNING: .getControlNode() - no control nodes found! composition = ", composition);
    return null;
  }
  console.log("WARNING: compGetControlNode(composition) - invalid composition object! composition = ", composition);
  return null;
};

// get logic layer from composition
export const compGetLogicLayer = composition => {
  // console.log("compGetLogicLayer - called");
  if (composition) {
    const logicLayer = composition.getLogicLayer();
    if (logicLayer) {
      console.log(".getLogicLayer(): ", logicLayer);
      return logicLayer;
    }
    console.log("WARNING: .getLogicLayer() - no logic layer found! composition = ", composition);
    return null;
  }
  console.log("WARNING: compGetLogicLayer(composition) - invalid composition object! composition = ", composition);
  return null;
};

// get model from composition
export const compGetModel = composition => {
  // console.log("compGetModel - called");
  if (composition) {
    const model = composition.getModel();
    if (model) {
      console.log(".getModel(): ", model);
      return model;
    }
    console.log("WARNING: .getModel() - no model found! composition = ", composition);
    return null;
  }
  console.log("WARNING: compGetModel(composition) - invalid composition object! composition = ", composition);
  return null;
};

// get payload from composition
export const compGetPayload = composition => {
  // console.log("compGetPayload - called");
  if (composition) {
    const payload = composition.getPayload();
    if (payload) {
      console.log(".getPayload(): ", payload);
      return payload;
    }
    console.log("WARNING: .getPayload() - no payload found! composition = ", composition);
    return null;
  }
  console.log("WARNING: compGetPayload(composition) - invalid composition object! composition = ", composition);
  return null;
};

// get property from composition
export const compGetProp = (composition, prop) => {
  // console.log("compGetProp - called");
  if (composition) {
    const property = composition.getProp(prop);
    if (property) {
      console.log(".getProp(): ", property);
      return property;
    }
    console.log("WARNING: .getProp('" + prop + "') - get property failed! composition = ", composition);
    return null;
  }
  console.log("WARNING: compGetProp(composition, prop) - invalid composition object! composition = ", composition);
  return null;
};

// get refId from composition
export const compGetRefId = composition => {
  // console.log("compGetRefId - called");
  if (composition) {
    const refId = composition.getRefId();
    if (refId) {
      console.log(".getRefId(): ", refId);
      return refId;
    }
    console.log("WARNING: .getRefId() - failed! composition = ", composition);
    return null;
  }
  console.log("WARNING: compGetRefId(composition) - invalid composition object! composition = ", composition);
  return null;
};

// get sequencer from composition
export const compGetSequencer = composition => {
  // console.log("compGetSequencer - called");
  if (composition) {
    const sequencer = composition.getSequencer();
    if (sequencer) {
      console.log(".getSequencer(): ", sequencer);
      return sequencer;
    }
    console.log("WARNING: .getSequencer() - get sequencer failed! composition = ", composition);
    return null;
  }
  console.log("WARNING: compGetSequencer(composition) - invalid composition object! composition = ", composition);
  return null;
};

// get state from composition
export const compGetState = composition => {
  // console.log("compGetState - called");
  if (composition) {
    const state = composition.getState();
    if (state) {
      console.log(".getState(): ", state);
      return state;
    }
  }
  console.log("WARNING: compGetState(composition) - invalid composition object! composition = ", composition);
  return null;
};

// get subcomposition from composition
export const compGetSubcomposition = (composition, id) => {
  // console.log("compGetSubcomposition - called");
  if (composition) {
    const subcomposition = composition.getSubcomposition(id);
    if (subcomposition) {
      console.log(".getSubcomposition('" + id + "'): ", subcomposition);
      return subcomposition;
    }
    console.log("WARNING: .getSubcomposition('" + id + "') - id not found ");
    return null;
  }
  console.log(
    "WARNING: compGetSubcomposition(composition, '" + id + "') - invalid composition object! composition = ",
    composition
  );
  return null;
};

// get subcomposition by id from composition
export const compGetSubcompositionById = (composition, id) => {
  // console.log("compGetSubcompositionById - called");
  if (composition) {
    const subcomposition = composition.getSubcompositionById(id);
    if (subcomposition) {
      console.log(".getSubcompositionById('" + id + "'): ", subcomposition);
      return subcomposition;
    }
    console.log("WARNING: .getSubcompositionById('" + id + "') - id not found!");
    return null;
  }
  console.log(
    "WARNING: compGetSubcompositionById(composition, '" + id + "') - invalid composition object! composition = ",
    composition
  );
  return null;
};

// get subcomposition by name from composition
export const compGetSubcompositionByName = (composition, name) => {
  // console.log("compGetSubcompositionByName - called");
  if (composition) {
    const subcomposition = composition.getSubcompositionByName(name);
    if (subcomposition) {
      console.log(".getSubcompositionByName('" + name + "'): ", subcomposition);
      return subcomposition;
    }
    console.log("WARNING: .getSubcompositionByName('" + name + "') - name not found! name = ", name);
    return null;
  }
  console.log(
    "WARNING: compGetSubcompositionByName(composition, '" + name + "') - invalid composition object! composition = ",
    composition
  );
  return null;
};

// get UI settings from composition
export const compGetUISettings = composition => {
  // console.log("compGetUISettings - called");
  if (composition) {
    const uiSettings = composition.getUISettings();
    if (uiSettings) {
      console.log(".getUISettings(): ", uiSettings);
      return uiSettings;
    }
  }
  console.log("WARNING: compGetUISettings(composition) - invalid composition object! composition = ", composition);
  return null;
};

// jump to animation state from composition
export const compJumpTo = (composition, nextState) => {
  // console.log("compJumpTo - called");
  if (composition) {
    composition.jumpTo(nextState);
    return;
  }
  console.log(
    "WARNING: compJumpTo(composition, '" + nextState + "') - invalid composition object! composition = ",
    composition
  );
};

// get list subcomposition from composition
export const compListSubcompositions = composition => {
  // console.log("compListSubcompositions - called");
  if (composition) {
    const subcompositions = composition.listSubcompositions();
    if (subcompositions) {
      console.log(".listSubcompositions(): ", subcompositions);
      return subcompositions;
    }
    console.log("WARNING: .listSubcompositions() - no subcompositions found! composition = ", composition);
    return null;
  }
  console.log(
    "WARNING: compListSubcompositions(composition) - invalid composition object! composition = ",
    composition
  );
  return null;
};

// play to animation state from composition
export const compPlayTo = (composition, nextState) => {
  // console.log("compPlayTo - called");
  if (composition) {
    composition.playTo(nextState);
    return;
  }
  console.log(
    "WARNING: compPlayTo(composition, '" + nextState + "') - invalid composition object! composition = ",
    composition
  );
};

// remove composition
export const compRemove = (composition, callback) => {
  // console.log("compRemove - called");
  if (composition) {
    composition.remove(callback);
    return;
  }
  console.log("WARNING: compRemove(composition, callback) - invalid composition object! composition = ", composition);
};

// reset all payloads in composition
export const compResetAllPayloads = composition => {
  // console.log("compResetAllPayloads - called");
  if (composition) {
    composition.resetAllPayloads();
    return;
  }
  console.log("WARNING: compResetAllPayloads(composition) - invalid composition object! composition = ", composition);
};

// set payload in composition
export const compSetPayload = (composition, payload) => {
  // console.log("compSetPayload - payload = ", payload);
  if (composition) {
    composition.setPayload(payload);
    return;
  }
  console.log(
    "WARNING: compSetPayload(composition, payload) - invalid composition object! composition = ",
    composition
  );
};

/*****************************************************************************/
// singularApp storage specific functions
/*
  get: ƒ (key, callback)
  off: ƒ (key, cb)
  on: ƒ (key, cb)
  remove: ƒ (key, callback)
  set: ƒ (key, data, callback)
  update: ƒ (key, data, callback)
*/

// get storage
export const storageGet = (storage, key, callback) => {
  console.log("storageGet(storage, key, callback) - called");
  if (storage) {
    storage.get(key, callback);
    console.log(".get('" + key + "', callback)");
    return;
  }
  console.log("WARNING: storageGet(storage, key, callback) - invalid storage object! storage = ", storage);
};

// set storage
export const storageSet = (storage, key, data, callback) => {
  console.log("storageSet(storage, key, data, callback) - called");
  if (storage) {
    storage.set(key, data, callback);
    console.log(".set(key, data, callback) - called");
    return;
  }
  console.log("WARNING: storageSet(storage, key, data, callback) - invalid storage object! storage = ", storage);
};

// update storage
export const storageUpdate = (storage, key, data, callback) => {
  console.log("storageUpdate(storage, key, data, callback) - called");
  if (storage) {
    storage.update(key, data, callback);
    console.log(".set(key, data, callback) - called");
    return;
  }
  console.log("WARNING: storageUpdate(storage, key, data, callback) - invalid storage object! storage = ", storage);
};

// remove storage
export const storageRemove = (storage, key, callback) => {
  console.log("storageRemove(storage, key, callback) - called");
  if (storage) {
    storage.remove(key, callback);
    console.log(".remove(key, callback) - called");
    return;
  }
  console.log("WARNING: storageRemove(storage, key, callback) - invalid storage object! storage = ", storage);
};

// register callback for storage
//    storage.on("Score Bug", payloadChangedScoreBug);
//    storage.on("Clock Tmer", plChangedTeamDetails);
//    storage.on("Team Details", plChangedTeamDetails);
// register callback "on" storage
export const storageOn = (storage, key, callback) => {
  console.log("storageOn(storage, key, callback) - called");
  if (storage) {
    storage.on(key, callback);
    console.log(".on(key, callback) - called");
    return;
  }
  console.log("WARNING: storageOn(storage, key, callback) - invalid storage object! storage = ", storage);
};

// register callback "off" storage
export const storageOff = (storage, key, callback) => {
  console.log("storageOff(storage, key, callback) - called");
  if (storage) {
    storage.off(key, callback);
    console.log(".off(key, callback) - called");
    return;
  }
  console.log("WARNING: storageOff(storage, key, callback) - invalid storage object! storage = ", storage);
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

/*****************************************************************************/
//

/*****************************************************************************/
//

/*****************************************************************************/
//
