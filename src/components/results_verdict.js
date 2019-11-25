import React, { Component } from 'react';

const ResultsVerdict = (props) => {
  return(
    <div className="alert alert-success" role="alert">
      <h3 className="verdict">{props.isValid}</h3>
      <span className="verdict-description">{props.description}</span>
    </div>
  );
}

export default ResultsVerdict;
