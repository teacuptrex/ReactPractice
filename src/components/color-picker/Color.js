import React from "react";

function Color({ color, onClick }) {
  return (
    <button
      className="Color"
      style={{ backgroundColor: color }}
      onClick={onClick}
    ></button>
  );
}

export default Color;
