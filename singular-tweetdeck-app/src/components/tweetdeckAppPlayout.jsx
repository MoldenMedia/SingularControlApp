import React, { Component } from "react";

class AppTweetdeckPlayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  state = { output: "Choose function..." };

  /***************************************************************************/
  componentDidMount() {
    // fetch("https://api.twitter.com/1.1/collections/list.json?screen_name=singular4live&count=1")
    //   .then(Response => Response.json())
    //   .then(res => {
    //     console.log(res);
    //     this.setState({
    //       items: res
    //     });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    this.setState({ output: "Choose function..." });
  }
  /***************************************************************************/

  /**
   * hello
   */
  handleHello = () => {
    let result = "...";
    console.log("handleHello - called");
    this.setState({ output: "handleHello - called" });
    fetch("https://us-central1-tweetdeck-api.cloudfunctions.net/hello")
      .then(response1 => response1.json())
      .then(response2 => {
        console.log("fetch - response2 =", response2);
        this.setState({ output: JSON.stringify(response2, null, 2) });
        result = response2;
        console.log("handleHello - result =", result);
      })
      .catch(error => {
        console.error("fetch - error =", error);
      });
    console.log("handleHello - result =", result);
  };
  /**
   * debug
   */
  handleDebug = () => {
    console.log("handleDebug - called");
    fetch("https://us-central1-tweetdeck-api.cloudfunctions.net/debug?keyId=20AM16ESAD02S23&screenName=singular4live")
      .then(response => response.json())
      .then(res => {
        console.log("fetch - res =", res);
        this.setState({ output: JSON.stringify(res, null, 2) });
      })
      .catch(error => {
        console.error("fetch - error =", error);
      });
  };
  /**
   * handleGetCollectionsList
   */
  handleGetCollectionsList = () => {
    console.log("handleGetCollectionsList - called");
    fetch(
      "https://us-central1-tweetdeck-api.cloudfunctions.net/getCollectionsList_v3?keyId=20AM16ESAD02S23&screen_name=singular4live&count=1"
    )
      .then(response => response.json())
      .then(res => {
        console.log("fetch - res =", res);
        this.setState({ output: JSON.stringify(res, null, 2) });
      })
      .catch(error => {
        console.error("fetch - error =", error);
      });
  };
  /**
   * handleGetCollectionsShow
   */
  handleGetCollectionsShow = () => {
    console.log("handleGetCollectionsList - called");
    fetch(
      "https://us-central1-tweetdeck-api.cloudfunctions.net/debug?keyId=20AM16ESAD02S23&id=custom-1126571196294758402"
    )
      .then(response => response.json())
      .then(res => {
        console.log("fetch - res =", res);
        this.setState({ output: JSON.stringify(res, null, 2) });
      })
      .catch(error => {
        console.error("fetch - error =", error);
      });
  };
  /**
   * handleGetCollectionsEntries
   */
  handleGetCollectionsEntries = () => {
    console.log("handleGetCollectionsEntries - called");
    fetch(
      "https://us-central1-tweetdeck-api.cloudfunctions.net/debug?keyId=20AM16ESAD02S23&id=custom-1158699763077963782&tweet_mode=extended"
    )
      .then(response => response.json())
      .then(res => {
        console.log("fetch - res =", res);
        this.setState({ output: JSON.stringify(res, null, 2) });
      })
      .catch(error => {
        console.error("fetch - error =", error);
      });
  };
  /**
   * handleGetCollectionsEntriesByName
   */
  handleGetTimelineIDsByScreenName = async () => {
    console.log("handleGetTimelineIDsByScreenName - called");
    const tlName = "derBertl";
    // const tlName = "myCollection001";

    let resList = await fetch(
      "https://us-central1-tweetdeck-api.cloudfunctions.net/getCollectionsList_v3?keyId=20AM16ESAD02S23&screen_name=singular4live"
    );
    let colList = await resList.json();
    console.log("handleGetTimelineIDsByScreenName -> fetch CollectionsList -> colList =", colList);
    let timelineId;
    for (let tl in colList.objects.timelines) {
      if (colList.objects.timelines[tl].name === tlName) {
        timelineId = tl;
      }
    }
    this.setState({ output: JSON.stringify(resList, null, 2) });
    console.log("handleGetTimelineIDsByScreenName - resList =", resList);
    console.log("handleGetTimelineIDsByScreenName - timelineId =", timelineId);

    let resEntries = await fetch(
      "https://us-central1-tweetdeck-api.cloudfunctions.net/getCollectionsEntries_v3?keyId=20AM16ESAD02S23&id=" +
        timelineId
    );
    let colEntries = await resEntries.json();
    console.log("handleGetTimelineIDsByScreenName -> fetch CollectionsEntries -> colEntries =", colEntries);
    this.setState({ output: JSON.stringify(colEntries, null, 2) });
  };

  /***************************************************************************/
  render() {
    console.log("AppTweetdeckPlayout - called");
    return (
      <div className="container-fluid">
        <div className="row">
          <span className="border">
            <div className="col-sm">
              <div className="btn-group-vertical">
                <button type="button" className="btn btn-outline-primary m-2" onClick={() => this.handleHello()}>
                  hello
                </button>
                <button type="button" className="btn btn-outline-primary m-2" onClick={() => this.handleDebug()}>
                  debug
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary m-2"
                  onClick={() => this.handleGetCollectionsList()}
                >
                  getCollectionsList
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary m-2"
                  onClick={() => this.handleGetCollectionsShow()}
                >
                  getCollectionsShow
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary m-2"
                  onClick={() => this.handleGetCollectionsEntries()}
                >
                  getCollectionsEntries
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary m-2"
                  onClick={() => this.handleGetTimelineIDsByScreenName()}
                >
                  getTimelineIDsByScreenName
                </button>
              </div>
            </div>
          </span>
          <span className="border">
            <div className="col-xl">
              <textarea name="" id="myTextarea" cols="50" rows="10" value={this.state.output} />
            </div>
          </span>
        </div>
      </div>
    );
  }
}

export default AppTweetdeckPlayout;
