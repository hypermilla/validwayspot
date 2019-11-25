import React from 'react';
import './App.css';
import Tabletop from 'tabletop';
import _ from "lodash";
import SearchBar from './components/search_bar';
import HomeCover from './components/homecover';
import Results from './components/results';
import SearchGrid from './components/search_grid';

const SPREADSHEET_KEY = '1EIW3AYx5mwvOp4YGU-lySjkf0jflhYoFd47kK_ahFtI';
const { source } = [];
const initialState = { isLoading: false, results: [], term: '' };


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

  tagSearch (term) {
    if (term.length > 0)
    {
      const termRegExp = new RegExp(_.escapeRegExp(term));
      const isMatch = (data) => termRegExp.test(data.tag);
      this.setState({
        results: _.filter(this.state.data, function(data) { return termRegExp.test(data.tag) })
      });
    }

    else {
      this.setState({
        results: []
      });
    }
  }

  render () {
    console.log('google sheet data --->', this.state);
    const tagSearch = _.debounce( (term) => { this.tagSearch(term) }, 500);

    return (
      <div className="App">
        <HomeCover />
        <div className="container">

          <h1>Is it a valid Wayspot?</h1>

          <SearchBar onSearchTermChange={tagSearch} />
          <SearchGrid
            results={this.state.results}
            onResultSelect={selectedResult => this.setState({
              selectedResult: selectedResult,
              results: []
            })}
          />
        <Results result={this.state.selectedResult} />

        </div>
      </div>
    );
  }
}

export default App;
