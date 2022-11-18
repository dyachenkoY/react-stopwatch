import React, { Component } from "react";
import styles from "./Buttons.module.scss";

class Buttons extends Component {
  render() {
    const { startTimer, stopTimer, resetTimer, saveTime, isStopwatchRun } =
      this.props;
    const StartBtn = (
      <button type="button" className={styles.button} onClick={startTimer}>
        Start
      </button>
    );

    const StopBtn = (
      <button type="button" className={styles.button} onClick={stopTimer}>
        Stop
      </button>
    );
    return (
      <div>
        {!isStopwatchRun ? StartBtn : StopBtn}
        <button type="button" className={styles.button} onClick={resetTimer}>
          Reset
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={saveTime}
        >
          Lap
        </button>
      </div>
    );
  }
}

export default Buttons;
