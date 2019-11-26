import React, { Component } from "react";

const ResultsVerdict = (props) => {
  return(
    <div className={props.alertClass} role="alert">
      <h3 className="verdict-title">{props.verdictTitle}</h3>
      <span className="verdict-description">{props.verdictDescription}</span>
    </div>
  );
}

export default ResultsVerdict;
