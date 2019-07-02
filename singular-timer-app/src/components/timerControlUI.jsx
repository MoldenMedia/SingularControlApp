import React, { Component } from "react";

class TimerControlUI extends Component {
  state = {
    timerControl: {
      UTC: 0,
      isRunning: false,
      value: 0
    }
  };

  constructor() {
    super();
    this.areaInput = React.createRef();
    this.timerPeriodSelect = React.createRef();
  }

  componentDidMount() {
    console.log("TimerControlUI - Mounted");
  }

  handleChange() {
    console.log("handleChange: " + this.areaInput.current.value);
  }

  render() {
    console.log("TimerControlUI - Render");
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Singular Timer Control</span>
        </nav>
        <ul className="list-group">
          <li className="list-group-item">
            Clock time:
            <h1>{" " + this.props.currClockTime}</h1>
          </li>
        </ul>
        <div className="form-group m-2">
          <label htmlFor="selectPeriod">Select period:</label>
          <select
            className="form-control m-2 col-4"
            id="exampleFormControlSelect1"
            ref={this.timerPeriodSelect}
            onChange={() =>
              this.props.doTimerPeriodChange(
                this.timerPeriodSelect.current.value
              )
            }
          >
            <option>00:00</option>
            <option>45:00</option>
            <option>90:00</option>
            <option>115:00</option>
          </select>
          <small id="selectPeriodHelp" className="form-text text-muted">
            Sets the match period and resets the clock
          </small>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-success m-2"
            onClick={this.props.doTimerStart}
          >
            Timer Start
          </button>
          <button
            type="button"
            className="btn btn-danger m-2"
            onClick={this.props.doTimerPause}
          >
            Timer Pause
          </button>
          <button
            type="button"
            className="btn btn-info m-2"
            onClick={this.props.doTimerReset}
          >
            Timer Reset
          </button>
        </div>
        <div className="form-group m-2">
          <textarea
            className="form-control col-4"
            rows="5"
            defaultValue='{
              "UTC": 0,
              "isRunning": false,
              "value": 0
            }'
            ref={this.areaInput}
            onChange={() =>
              this.props.doTimerControlChange(this.areaInput.current.value)
            }
          />
        </div>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={() => this.props.doTimerManualSet()}
        >
          Timer Manual Set
        </button>
      </div>
    );
  }
}

export default TimerControlUI;
