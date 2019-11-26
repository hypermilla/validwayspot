import React, { Component } from 'react';

class Results extends Component {

  constructor(props) {
      super(props);
  }

  verdictAlertClass (verdict) {
      switch (verdict) {
        case "YES":
          return "alert alert-success";
        case "YESIF":
          return "alert alert-warning";
        case "MAYBE":
          return "alert alert-warning";
        case "NOBUT":
          return "alert alert-warning";
        case "NO":
          return "alert alert-danger";
        default:
          return null;
      }
  }

  verdictTitleText = (verdict) => {
    switch (verdict) {
      case "YES":
        return "Yes!";
      case "YESIF":
        return "Yes, if...";
      case "MAYBE":
        return "Maybe, check below";
      case "NOBUT":
        return "NO, but...";
      case "NO":
        return "NO!";
      default:
        return null;
    }
  }

  render () {
    if (this.props.result == null){
      return null;
    }
    return (
      <div className="results">
        <h3 className="results-title">
          <span>Tags: </span>
          {this.props.result.tag}
        </h3>

        <div className="verdict">
          <div
            className={this.verdictAlertClass(this.props.result.isValid)}
            role="alert"
          >
            <h3 className="verdict-valid">
              {this.verdictTitleText(this.props.result.isValid)}
            </h3>
            <span className="verdict-description">
              {this.props.result.subjectiveSummary}
            </span>
          </div>
        </div>

        <div className="results-source">
          <div class="card">
            <div class="card-header">
              <span style={{fontWeight: 'bold'}}>Source: </span>
              {this.props.result.source}
              <span style={{}}>, on {this.props.result.date}</span>
            </div>
            <div class="card-body">
              <h6 class="card-title">{this.props.result.question}</h6>
              <p class="card-text">{this.props.result.answer}</p>
              <a href="#" class="btn btn-primary">
                Link
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
