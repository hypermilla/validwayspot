import React, { Component } from 'react';
import Verdict from './results_verdict'; 
import Source from './results_source';
import { thisExpression } from '@babel/types';

class Results extends Component {

  constructor(props) {
      super(props);
  }

  getVerdictAlertClass (verdict) {
      switch (verdict) {
        case "YES":
          return "verdict-valid";
        case "YESIF":
          return "verdict-maybe";
        case "MAYBE":
          return "verdict-maybe";
        case "NOBUT":
          return "verdict-maybe";
        case "NO":
          return "verdict-invalid";
        default:
          return null;
      }
  }

  getVerdictTitleText = (verdict) => {
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

  getTagNames = () => {
    const tags = this.props.tag;
    let tagNames = {};
    for (let i = 0; i < tags.length; i++) {
      if (i == tags.length) {
        tagNames += tags[i];
        return tagNames;
      }
      tagNames += tags[i] + ", ";
    }
  }

  render () {
    if (this.props.result == null){
      return null;
    }

    return (
      <div className="results">
        <h3 className="">Wayspot Criteria:</h3>
        <p className="tags">{this.props.result.tag}</p>

        <Verdict
          className={this.getVerdictAlertClass(this.props.result.isValid)}
          verdictText={this.getVerdictTitleText(this.props.result.isValid)}
          subjectiveSummary={this.props.result.subjectiveSummary}
        />

        <Source
          className=""
          source={this.props.result.source}
          date={this.props.result.date}
          question={this.props.result.question}
          answer={this.props.result.answer}
        />
      </div>
    );
  }
}

export default Results;
