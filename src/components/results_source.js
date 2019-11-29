import React, { Component } from 'react';

const ResultsSource = (props) => {
  return (
    <div className="results-source">
        <h3 className="source-name">
          <span style={{ fontWeight: "bold" }}>Source: </span>
          {props.source}
          <span style={{}}>{props.date.length > 0 ? ', on ' + props.date : null}</span>
        </h3>
        <div className="">
          <h5 className="question">
            {props.answer.length > 0 ? props.question : null}
          </h5>
          <p className="answer">
            {props.answer.length == 0 ? props.question : props.answer}
          </p>
        </div>
    </div>
  );
}

export default ResultsSource;
