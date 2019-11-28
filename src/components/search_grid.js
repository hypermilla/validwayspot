import React from 'react';

const SearchGrid = (props) => {

  if (props.results == null) {
      return null;
  }

  const resultItems = props.results.map((result, i) => {
    return (
      <li
        key={i}
        id={i}
        className={props.cursor === i ? 'list-group-item active' : 'list-group-item'}
        onClick={() => props.onResultSelect(result)} 
      >
          {result}
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
