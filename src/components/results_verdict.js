import React, { Component } from "react";

const Verdict = (props) => {
  return (
    <div className="verdict card">
      <h6 className="card-header">Is it valid?</h6>
      <h2 className="verdict-text card-title">{props.verdictText}</h2>
      <p className="card-text">{props.subjectiveSummary}</p>
    </div>
  );
}

export default Verdict;
