import React from 'react';

const SearchGrid = (props) => {

  if (props.results == null) {
      return null;
  }

  const resultItems = props.results.map((result) => {
    return (
      <li className="list-group-item">
        <button type="button" onClick={() => props.onResultSelect(result)} className="btn btn-outline-info">
          {result.tag}
        </button>
      </li>
    );
  });

  return (
    <div className="search-grid">
      <ul className="list-group">
        { resultItems }
      </ul>
    </div>
  );
}

export default SearchGrid;
