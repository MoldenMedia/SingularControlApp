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
/*
  singularApp functions
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
  .log
*/
/*
// short description of function
export const saFunctionName = singularApp => {
  console.log("saFunctionName - called");
}
*/
/*****************************************************************************/
// list outputs defined in the App Template
export const saListOutputs = singularApp => {
  console.log("saListOutputs - called");
  const outputs = singularApp.listOutputs();
  console.log("saListOutputs - n-outputs found: ", outputs.length);
  return outputs;
};

// get output defined by id
export const saGetOutputById = (singularApp, id) => {
  console.log("saGetOutputById - called");
  const output = singularApp.getOutputById(id);
  if (output) {
    console.log("saGetOutputById - output found: ", output);
    return output;
  }
  return null;
};

// list compositions defined in the App Template
export const saListCompositions = singularApp => {
  console.log("saListCompositions - called");
  const compositions = singularApp.listOutputs();
  console.log(
    "saListCompositions - n-compositions found: ",
    compositions.length
  );
  return compositions;
};

// get composition defined by id
export const saGetCompositionById = (singularApp, id) => {
  console.log("saGetCompositionById - called");
  const composition = singularApp.getCompositionById(id);
  if (composition) {
    console.log("saGetCompositionById - composition found: ", composition);
    return composition;
  }
  return null;
};

// get composition defined by name
export const saGetCompositionByName = (singularApp, name) => {
  console.log("saGetCompositionByName - called");
  const composition = singularApp.getCompositionByName(name);
  if (composition) {
    console.log("saGetCompositionByName - composition found: ", composition);
    return composition;
  }
  return null;
};

// get composition browser URL
export const saGetCompositionBrowserUrl = singularApp => {
  console.log("saGetCompositionBrowserUrl - called");
  const compositionBrowserUrl = singularApp.getCompositionBrowserUrl();
  console.log("saGetCompositionBrowserUrl: ", compositionBrowserUrl);
  return compositionBrowserUrl;
};

// composition browser event callback
export const saCompositionBrowserEventCallback = singularApp => {
  console.log("saCompositionBrowserEventCallback - called");
};

// import composition
export const saImportComposition = singularApp => {
  console.log("saImportComposition - called");
};

// remove composition by id
export const saRemoveCompositionById = (singularApp, name, callback) => {
  console.log("saRemoveCompositionById - called");
};

// remove composition by name
export const saRemoveCompositionByName = (singularApp, name, callback) => {
  console.log("saRemoveCompositionByName - called");
};

// remove all compositions
export const saRemoveAllCompositions = (singularApp, callback) => {
  console.log("saRemoveAllCompositions - called");
};

// list ids by name
export const saListIdsByName = (singularApp, array, name) => {
  console.log("saListIdsByName - called");
};

// get App Firebase storage
export const saStorage = singularApp => {
  console.log("saStorage - called");
  const storage = singularApp.storage;
  if (storage) {
    console.log("saGetAppStorage - success: ", storage);
    return storage;
  }
  console.log("saGetAppStorage - failed");
  return null;
};

// get app log
export const saLog = singularApp => {
  console.log("saLog - called");
  const log = singularApp.log;
  return log;
};

//
// CONTINUE HERE
//

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
