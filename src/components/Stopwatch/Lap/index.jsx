import React from "react";

const Laps = ({ laps }) => {
  const lapList = laps.map(({ numLap, time }) => (
    <li id={numLap}>
      Lap {numLap}: {time}
    </li>
  ));
  return (
    <ul>
      <h2>Laps</h2>
      {lapList}
    </ul>
  );
};

export default Laps;
