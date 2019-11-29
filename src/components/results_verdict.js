import React, { Component } from "react";

const Verdict = (props) => {
  return (
    <div className="verdict card rounded-0 ">
      <div className={props.className}>
        <label className="isvalid">Is it valid?</label>
        <h2 className="verdict-text card-title">{props.verdictText}</h2>
        <p className="subjective-summary">{props.subjectiveSummary}</p>
      </div>
    </div>
  );
}

export default Verdict;
