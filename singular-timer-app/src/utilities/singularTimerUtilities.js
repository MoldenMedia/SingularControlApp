//*****************************************************************************
//
// Singular Timer Utilities  ==> in progress
//
//*****************************************************************************
state = {
    singularTimerControl: null,
    timerControl: {
      UTC: 0,
      isRunning: false,
      value: 0
    },
    startTimerUTC: 0,
    currTimerDuration: 0,
    sumTimerDuration: 0,
    prevTimerValue: 0,
    currClockPeriod: "00:00",
    currClockTime: ""
  };

  timerControl = {
    UTC: 0,
    isRunning: false,
    value: 0
  };

  // init clock timer
  export function initClockTimer() {
    // create an instance of a timercontrol object
    let singularTimerControl = createTimeControl();
    // get offset and set offset to the server time
    //    var offset = Date.now() - singularApp.ServerDate.now();
    singularTimerControl.setOffsetToServerTime(0);
    // setup the time control parameters
    singularTimerControl.setUpdateCallback(this._updateClockTimer);
    // this will stop the clock from jumping backwards when it is stopped. A jump
    // backwards can happen due to network latency
    singularTimerControl.setAllowBackwardsJump(false);
    // round the time to the interval frequency
    singularTimerControl.setRoundToInterval(true);
    // tell the timer control object how often to update the callback
    singularTimerControl.setIntervalTime(1000); //milliseconds
    // send time control values to timer object
    singularTimerControl.setTimeControl(this.timerControl);
    // return singular timer control
    return singularTimerControl;
//    this.setState({ singularTimerControl: singularTimerControl });
  }

  _setClockPeriod(currPeriod) {
    console.log("_setClockPeriod - Called");
    //    let currTimerUTC = singularApp.ServerDate.now();
    let currTimerUTC = Date.now();
    let sumTimerDuration = this._strTimeToMilliseconds(currPeriod);
    let timerControl = {
      UTC: currTimerUTC,
      isRunning: false,
      value: sumTimerDuration
    };
    this.setState({
      timerControl: timerControl,
      sumTimerDuration: sumTimerDuration
    });
    this.state.singularTimerControl.setTimeControl(timerControl);
  }

  _startClockTimer() {
    console.log("_startClockTimer - Called");
    //    let currTimerUTC = singularApp.ServerDate.now();
    let currTimerUTC = Date.now();
    let startTimerUTC = currTimerUTC;
    let currTimerDuration = this.state.sumTimerDuration;
    let timerControl = {
      UTC: currTimerUTC,
      isRunning: true,
      value: this.state.sumTimerDuration
    };
    this.setState({
      timerControl: timerControl,
      startTimerUTC: startTimerUTC,
      currTimerDuration: currTimerDuration
    });
    this.state.singularTimerControl.setTimeControl(timerControl);
  }

  _pauseClockTimer() {
    console.log("_pauseClockTimer - Called");
    //    let currTimerUTC = singularApp.ServerDate.now();
    let currTimerUTC = Date.now();
    let currTimerDuration = currTimerUTC - this.state.startTimerUTC;
    let sumTimerDuration = this.state.sumTimerDuration + currTimerDuration;
    let timerControl = {
      UTC: currTimerUTC,
      isRunning: false,
      value: sumTimerDuration
    };
    this.setState({
      timerControl: timerControl,
      currTimerDuration: currTimerDuration,
      sumTimerDuration: sumTimerDuration
    });
    this.state.singularTimerControl.setTimeControl(timerControl);
  }

  _updateClockTimer = () => {
    console.log("_updateClockTimer - Called");
    if (this.state.singularTimerControl) {
      let currTimerValue = this.state.singularTimerControl.getCurrentTime();
      if (currTimerValue === this.state.prevTimerValue) {
        return;
      }
      let prevTimerValue = currTimerValue;

      let min = Math.floor((currTimerValue / 1000 / 60) << 0);
      let sec = Math.floor((currTimerValue / 1000) % 60);

      let padZeros = function(number) {
        if (number < 10) {
          return "0" + number;
        }
        return number;
      };

      let currClockTime = padZeros(min) + ":" + padZeros(sec);
      this.setState({
        prevTimerValue: prevTimerValue,
        currClockTime: currClockTime
      });

      console.log("currClockTime: " + currClockTime);
    }
  };