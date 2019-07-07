import React, { Component } from "react";
import SDKFunctionRow from "./appSDKFunctionRow";

class AppSDKHandlerUI extends Component {
  state = {};
  render() {
    const { sdkFunctions, singularApp } = this.props;
    return (
      <React.Fragment>
        <tbody>
          {sdkFunctions.map((sdkFunction, index) => (
            <SDKFunctionRow
              key={index}
              id={index + 1}
              name={sdkFunction.name}
              comment={sdkFunction.comment}
              onClick={sdkFunction.handleClick}
              singularApp={singularApp}
            />
          ))}
        </tbody>
      </React.Fragment>
    );
  }
}

export default AppSDKHandlerUI;
