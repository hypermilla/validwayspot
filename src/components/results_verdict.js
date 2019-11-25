import React, { Component } from 'react';

class ResultsVerdict extends Component {
  constructor (props) {
    super(props);

    this.state = {
      verdict: '',
      verdictDescription: ''
    };
  }

  render () {
    return(
      <div className="alert alert-success" role="alert">
        <h3 className="verdict">{this.state.verdict}</h3>
        <span className="verdict-description">{this.state.verdictDescription}</span>
      </div>
    );
  }
}

export default ResultsVerdict;
