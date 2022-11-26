import React from "react";

const Laps = ({ laps }) => {
  const lapList = laps.map(({ numLap, time }) => (
    <li id={numLap} key={numLap}>
      Lap {numLap}: {time}
    </li>
  ));
  return (
    <>
      <h2>Laps</h2>
      <ul>{lapList}</ul>
    </>
  );
};

export default Laps;
