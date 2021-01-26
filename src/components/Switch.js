import React, { useState } from "react";
import "./Switch.css";

function Switch() {
  const [onoff, setOnoff] = useState(false); //useStaet(false);
  //const text = onoff ? "ON" : "OFF";

  const cssClass = onoff ? "Switch Switch--on" : "Switch Switch--off";

  //function offSwitch() {
  //   setOnoff("OFF");
  // }

  // function onSwtich() {
  //   setOnoff("ON");
  // }

  return (
    <div className={cssClass}>
      <h3>Switch</h3>
      <h5>{onoff ? "ON" : "OFF"}</h5>
      <p>
        {onoff === false && <button onClick={() => setOnoff(true)}>On</button>}
        {onoff === true && <button onClick={() => setOnoff(false)}>Off</button>}
      </p>
    </div>
  );
}

export default Switch;
