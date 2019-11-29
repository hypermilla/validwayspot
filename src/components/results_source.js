import React, { Component } from 'react';

const ResultsSource = (props) => {

  const sourceQuestion =
    <h5 className="question">
      {props.question}
    </h5>;

  return (
    <div className="results-source card rounded-0">
        <h3 className="source-name">
          <span style={{ fontWeight: "bold" }}>Source: </span>
          {props.source}
          <span style={{}}>{props.date.length > 0 ? ', on ' + props.date : null}</span>
        </h3>
        <div className="">
          {props.answer.length > 0 ? sourceQuestion : null}
          <p className="answer">
            {props.answer.length == 0 ? props.question : props.answer}
          </p>
        </div>
    </div>
  );
}

export default ResultsSource;
