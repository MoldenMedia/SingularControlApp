//*****************************************************************************
//
// Singular Timer Library
//
//*****************************************************************************
export default function createTimeControl() {
  return (function() {
    return {
      tc: {
        UTC: 0,
        isrunning: false,
        value: 0
      },

      allowBackwardsJump: false,
      roundToInterval: true,

      intervalID: null,
      timeoutID: null,
      oldRunningTime: 0,
      intervalTime: 1000,
      offsetToServerTime: 0,
      updateCallback: null,

      setOffsetToServerTime: function(time) {
        if (this._isNumeric(time)) {
          this.offsetToServerTime = parseFloat(time);
        }
      },

      setIntervalTime: function(time) {
        if (this._isNumeric(time)) {
          let t = parseFloat(time);
          if (t !== this.intervalTime) {
            this.intervalTime = parseFloat(time);
            this._clearInterval();
            this._startInterval();
          }
        }
      },

      setUpdateCallback: function(callback) {
        this.updateCallback = callback;
      },

      setAllowBackwardsJump: function(v) {
        this.allowBackwardsJump = v;
      },

      setRoundToInterval: function(v) {
        this.roundToInterval = v;
      },

      setTimeControl: function(tc) {
        // check if tc is actually a timecontrol object
        // if (tc === undefined && tc.value === undefined && tc.UTC === undefined && tc.isRunning === undefined) {
        // fixed if condition
        if (
          tc === undefined ||
          tc.value === undefined ||
          tc.UTC === undefined ||
          tc.isRunning === undefined
        ) {
          return;
        }

        if (
          tc.value !== this.tc.value ||
          tc.UTC !== this.tc.UTC ||
          tc.isRunning !== this.tc.isRunning
        ) {
          // the clock was reset. Also start my local running time at 0
          if (tc.value <= this.tc.value) {
            this.oldRunningTime = 0;
          }

          if (this.tc.isRunning !== tc.isRunning) {
            // remember tc already here, because we will need it in the functions below
            this.tc = tc;

            this._clearInterval();

            // start the timeout
            if (this.tc.isRunning) {
              this._startInterval();
              return;
            }
          } else {
            this.tc = tc;
          }
          this._executeUpdateCallback();
        }
      },

      getCurrentTime: function() {
        var runningTime = this.tc.value;
        if (this.tc.isRunning) {
          // we take the local time and subtract the last UTC. And then we subtract the difference between server and local time
          runningTime += Date.now() - this.tc.UTC - this.offsetToServerTime;
        }

        // we do not allow the time to run backwards. This can happen when the clock is stopped, because
        // the local time keeps on running while the command to stop the clock is sent.
        // That would cause the clock to jump backwards a bit, which looks really stupid.
        // but this is a real problem in case you want to show an exact time.
        if (!this.allowBackwardsJump) {
          if (runningTime < this.oldRunningTime) {
            runningTime = this.oldRunningTime;
          } else {
            this.oldRunningTime = runningTime;
          }
        }

        // round the time we display to the update interval. This makes the time we show much more stable
        let correction = 0;
        if (this.roundToInterval) {
          var remainder = runningTime % this.intervalTime;
          if (remainder > this.intervalTime / 2) {
            correction = this.intervalTime - remainder;
          } else {
            correction = -remainder;
          }
        }
        return runningTime + correction;
      },

      _clearInterval: function() {
        // clear the interval that exists
        if (this.intervalID) {
          clearInterval(this.intervalID);
          this.intervalID = null;
        }

        // clear the timeout
        if (this.timeoutID) {
          clearTimeout(this.timeoutID);
          this.timeoutID = null;
        }
      },

      _startInterval: function() {
        // now caclulate the remainder with the running time and interval
        // so that our setInterval below always hits at exactly that right time
        let remainder = this.getCurrentTime() % this.intervalTime;

        // stop the interval and timeout
        this._clearInterval();

        // create a timeout to wait for the difference between interval time and remainder.
        // we try to get the timeout to run exactly on the time where the intervaltime changes.
        // e.g. for 1sec the interval should execute so that the time in the updateSubCompInstance function
        // is as close to the second as possible. For 0.1sec it doesn't really matter, for sec also, but minute is important.
        this.timeoutID = setTimeout(
          function() {
            this._executeUpdateCallback();

            // create the new interval
            this.intervalID = setInterval(
              function() {
                this._executeUpdateCallback();
              }.bind(this),
              this.intervalTime
            );
          }.bind(this),
          this.intervalTime - remainder
        );
      },

      _executeUpdateCallback: function() {
        if (this.updateCallback) {
          this.updateCallback();
        }
      },

      _isNumeric: function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
    };
  })();
}
//*****************************************************************************
