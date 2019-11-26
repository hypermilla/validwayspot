import React from 'react';
import './App.css';
import Tabletop from 'tabletop';
import _ from "lodash";

import SearchBar from './components/search_bar';
import HomeCover from './components/homecover';
import Results from './components/results';

const SPREADSHEET_KEY = '1EIW3AYx5mwvOp4YGU-lySjkf0jflhYoFd47kK_ahFtI';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoading: false,
      results: [],
      selectedResult: null,
      term: '',
      data: []
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: SPREADSHEET_KEY,
      callback: googleData => {
        this.setState({ data: googleData });
      },
      simpleSheet: true
    })
  }

  // splitAndTest (tagString, regEx) {
  //   let separatedTags = tagString.split(',');
  //   const isMatch = regEx.test(separatedTags); 
  // }

  tagSearch (term) {
    setTimeout(() => {
      if (term.length > 1)
      {
        if (!term.charAt(term.length - 1).match(/[a-z]/i)) {
          term = term.substring(0, term.length-1);
        }
        const termRegExp = new RegExp(_.escapeRegExp(term), 'i');
        this.setState({
          results: _.filter(this.state.data, function (data) { return termRegExp.test(data.tag) })
        });
      }

      else {
        this.setState({
          results: []
        });
      }
    }, 100);
  }

  handleSearchResult = (result) => {
    this.setState({
      selectedResult: result,
      results: []
    });

  }

  render () {
    const tagSearch = _.debounce( (term) => { this.tagSearch(term) }, 300);
    const handleResult = result => this.handleSearchResult(result);

    return (
      <div className="App">
        <HomeCover />
        <div className="container">
          <h1 className="app-title">Is it a valid Wayspot?</h1>
          <SearchBar
            onSearchTermChange={tagSearch} 
            results={this.state.results}
            onResultSelect={handleResult}
          />
          <Results result={this.state.selectedResult} />
        </div>
      </div>
    );
  }
}

export default App;
