import React, { Component } from 'react';
import _ from 'lodash';
import Verdict from './results_verdict';
import Source from './results_source';

class Results extends Component {

  constructor(props) {
      super(props);
  }

  render () {

    return(
      <div className="results">
        <Verdict />
        <Source />
      </div>
    );
  }
}

export default Results;
