import React, { Component } from "react";

class SDKFunctionRow extends Component {
  state = {};
  render() {
    return (
      <tr>
        <th scope="row">{this.props.id}</th>
        <td>{this.props.name}</td>
        <td>{this.props.comment}</td>
        <td>
          <button
            type="button"
            className="btn btn-light btn-sm m-2"
            onClick={() => this.props.onClick(this.props.singularApp)}
          >
            exec
          </button>
        </td>
      </tr>
    );
  }
}

export default SDKFunctionRow;
