import React, { Component } from "react";
import Buttons from "./Butons";
import Laps from "./Lap";

class Stopwatch extends Component {
  state = {
    isStopwatchRun: false,
    timeInSeconds: 0,
    laps: [],
  };

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  resetTimer = () => {
    clearInterval(this.timeInterval);
    this.setState({ isStopwatchRun: false, timeInSeconds: 0, laps: [] });
  };

  stopTimer = () => {
    clearInterval(this.timeInterval);
    this.setState({ isStopwatchRun: false });
  };

  updateTime = () => {
    this.setState((prevState) => ({
      timeInSeconds: prevState.timeInSeconds + 1,
    }));
  };

  startTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000);
    this.setState({ isStopwatchRun: true });
  };

  saveTime = (time) => {
    const newLaps = this.state.laps;
    newLaps.push({
      numLap: this.state.laps.length + 1,
      time: `${this.renderMinutes()}:${this.renderSeconds()}`,
    });
    this.setState({ laps: newLaps });
  };

  renderSeconds = () => {
    const { timeInSeconds } = this.state;
    const seconds = Math.floor(timeInSeconds % 60);

    if (seconds < 10) {
      return `0${seconds}`;
    }
    return seconds;
  };

  renderMinutes = () => {
    const { timeInSeconds } = this.state;
    const minutes = Math.floor(timeInSeconds / 60);

    if (minutes < 10) {
      return `0${minutes}`;
    }
    return minutes;
  };

  render() {
    const { isStopwatchRun, laps } = this.state;
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`;
    return (
      <div>
        <h1>{time}</h1>
        <Buttons
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}
          resetTimer={this.resetTimer}
          saveTime={this.saveTime}
          isStopwatchRun={isStopwatchRun}
        />
        {laps.length === 0 || <Laps laps={laps} time={time} />}
      </div>
    );
  }
}

export default Stopwatch;
