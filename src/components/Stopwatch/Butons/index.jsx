import React, { Component } from "react";
import styles from "./Buttons.module.scss";

class Buttons extends Component {
  render() {
    const { startTimer, stopTimer, resetTimer, saveTime, isStopwatchRun } =
      this.props;
    return (
      <div>
        <button
          type="button"
          className={styles.button}
          onClick={isStopwatchRun ? stopTimer : startTimer}
        >
          {isStopwatchRun ? "Stop" : "Start"}
        </button>
        <button type="button" className={styles.button} onClick={resetTimer}>
          Reset
        </button>
        <button type="button" className={styles.button} onClick={saveTime}>
          Lap
        </button>
      </div>
    );
  }
}

export default Buttons;
