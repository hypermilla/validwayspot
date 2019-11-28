import React from 'react';

class SearchGrid extends React.Component {

  constructor (props) {
    super (props);
  }


  render () {
    if (this.props.results == null) {
      return null;
    }

    const resultsTags = this.props.resultsTags;
    const results = this.props.results;

    const resultsList = resultsTags.map((result, i) =>
      <li
        key={i}
        id={i}
        className={
          this.props.cursor === i
            ? "list-group-item active"
            : "list-group-item"
        }
        onClick={() => this.props.onResultSelect(result, i)}
      >
        {resultsTags[i].map((tag, j) =>
          <button type="button" className="btn btn-outline-info">
            {tag}
          </button>
        )}
      </li>
    );

    return (
      <div className="search-grid">
        <ul className="list-group">
          {resultsList}
        </ul>
      </div>
    );

  }
}

export default SearchGrid;
