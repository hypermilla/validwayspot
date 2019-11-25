import React, { Component } from 'react';

class ResultsSource extends Component {
  constructor (props) {
    super(props);
    this.state = {
      source: '',
      amaQuestion: '',
      amaAnswer: ''
    };
  }

  render () {
    return (
      <div className="card" style={{width:'18rem', margin: '0 auto'}}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>
    );
  }
}

export default ResultsSource;
