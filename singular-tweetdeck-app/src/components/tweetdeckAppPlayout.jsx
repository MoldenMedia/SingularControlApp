import React, { Component } from "react";

class AppTweetdeckPlayout extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.twitter.com/1.1/collections/list.json?screen_name=singular4live&count=1")
      .then(Response => Response.json())
      .then(res => {
        console.log(res);
        this.setState({
          items: res
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log("AppTweetdeckPlayout - called");
    return (
      <div>
        <h4>AppTweetdeckPlayout</h4>
        <button type="button" className="btn btn-outline-primary m-2">
          Primary
        </button>
      </div>
    );
  }
}

export default AppTweetdeckPlayout;
