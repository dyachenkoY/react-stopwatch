import React, { Component } from "react";
import Buttons from "./Butons";
import Laps from "./Lap";

const initialState = { isStopwatchRun: false, timeInSeconds: 0, laps: [] };

function padNumber(number, isPadded) {
  return isPadded ? `0${number}` : number;
}
class Stopwatch extends Component {
  state = structuredClone(initialState);

  componentWillUnmount() {
    this.stopTimer();
  }

  resetTimer = () => {
    this.stopTimer();
    this.setState(structuredClone(initialState));
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
    if (!this.isStopwatchRun) {
      this.timeInterval = setInterval(this.updateTime, 1000);
      this.setState({ isStopwatchRun: true });
    }
  };

  saveTime = () => {
    const newLaps = JSON.parse(JSON.stringify(this.state.laps));
    newLaps.push({
      numLap: this.state.laps.length + 1,
      time: this.renderTime(),
    });
    this.setState({ laps: newLaps });
  };

  renderSeconds = () => {
    const { timeInSeconds } = this.state;
    const seconds = timeInSeconds % 60;

    return padNumber(seconds, seconds < 10);
  };

  renderMinutes = () => {
    const { timeInSeconds } = this.state;
    const minutes = Math.floor(timeInSeconds / 60);

    return padNumber(minutes, minutes < 10);
  };

  renderTime() {
    const { timeInSeconds } = this.state;
    const seconds = timeInSeconds % 60;
    const minutes = Math.floor(timeInSeconds / 60);
    const paddedSec = padNumber(seconds, seconds < 10);
    const paddedMin = padNumber(minutes, minutes < 10);

    return `${paddedMin}:${paddedSec}`;
  }

  render() {
    const { isStopwatchRun, laps } = this.state;
    const time = this.renderTime();
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
