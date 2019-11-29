import React, { Component } from "react";

const Verdict = (props) => {
  return (
    <div className="verdict">
      <div className={props.className}>
        <h4 className="isvalid">Is it valid?</h4>
        <h2 className="verdict-text card-title">{props.verdictText}</h2>
        <p className="">{props.subjectiveSummary}</p>
      </div>
    </div>
  );
}

export default Verdict;
