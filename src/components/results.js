import React, { Component } from 'react';
import _ from 'lodash';
import Verdict from './results_verdict';
import Source from './results_source';

class Results extends Component {

  constructor(props) {
      super(props);
  }

  render () {

    console.log(this.props.result);
    if (this.props.result == null){
      return null;
    }

    return(
      <div className="results">
        <div className="verdict">
          <div className="alert alert-success" role="alert">
            <h3 className="verdict-valid">{this.props.result.isValid}</h3>
            <span className="verdict-description">{this.props.result.subjectiveSummary}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
