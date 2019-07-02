/*****************************************************************************/
// initialize Singular App
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
// get firebase storage
export const getFirebaseStorage = singularApp => {
  console.log("getFirebaseStorage - Called");
  const storage = singularApp.storage;
  if (storage) {
    return storage;
  }
  return null;
};

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
