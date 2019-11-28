import React, { Component } from 'react';

const ResultsSource = (props) => {
  return (
    <div className="results-source">
      <div class="card">
        <div class="card-header">
          <span style={{ fontWeight: "bold" }}>Source: </span>
          {props.source}
          <span style={{}}>, on {props.date}</span>
        </div>
        <div class="card-body">
          <h6 class="card-title">{props.question}</h6>
          <p class="card-text">{props.answer}</p>
          <a href="#" class="btn btn-primary">
            Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResultsSource;
