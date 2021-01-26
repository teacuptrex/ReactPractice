import React, { useState } from "react";
import "./Quotes.css";

function Quotes({ author, q, date }) {
  return (
    <div className="Quotes">
      {author && <h3>Quote by {author}</h3>}
      <p>"{q}"</p>
      {date && <p>Date: {date}</p>}
    </div>
  );
}

export default Quotes;
