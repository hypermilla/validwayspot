import React from 'react';

class SearchGrid extends React.Component {

  constructor (props) {
    super (props);
  }
  
  render () {
    if (this.props.results.length == 0) {
      return null;
    }
    const resultsTags = this.props.resultsTags;

    const resultsList = resultsTags.map((result, i) => (
      <li
        key={i}
        id={i}
        className={this.props.cursor === i ? "list-group-item rounded-0 active" : "list-group-item rounded-0"}
        onMouseDown={() => this.props.onResultSelect(result, i)}
      >
        {resultsTags[i].map((tag, j) => (
          <button type="button" className="btn btn-outline-info">
            {tag}
          </button>
        ))}
      </li>
    ));

    return (
      <div className={this.props.isActive}>
        <div className="search-grid">
          <ul className="list-group">{resultsList}</ul>
        </div>
      </div>
    );

  }
}

export default SearchGrid;
