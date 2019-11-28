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
      selectedTag: null, 
      term: '',
      resultsTags: [],
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

  splitTags (searchResults) {

    let arrayOfTags = new Array();
    console.log("Results input:");
    console.log(searchResults);
    for (let i = 0; i < searchResults.length; i++ ) {
      let separatedTags = searchResults[i].tag.split(", ");
      arrayOfTags.push(separatedTags); 
      console.log("Tags separated in iteration: "+ i );
      console.log(separatedTags);
    }
    console.log("Final array of tags:");
    console.log(arrayOfTags);
    return arrayOfTags; 
  }

  tagSearch (term) {
    setTimeout(() => {
      if (term.length > 0)
      {
        if (!term.charAt(term.length - 1).match(/[a-z]/i)) {
          term = term.substring(0, term.length - 1);
        }
        const searchTerm = new RegExp(_.escapeRegExp(term), "i");
        const filteredResults = _.filter(this.state.data, function(data) {
          return searchTerm.test(data.tag);
        });

        let resultsTags = [];
        let filteredResultsTags = this.splitTags(filteredResults);

        for (let i = 0; i < filteredResultsTags.length; i++) {
          let tagsToFilter = filteredResultsTags[i];
          let filteredTags = [];
          for (let j = 0; j < tagsToFilter.length; j++) {
            const isMatch = searchTerm.test(tagsToFilter[j]);
            if (isMatch) 
              filteredTags.push(tagsToFilter[j]);
          }
          resultsTags.push(filteredTags);
        }
        console.log("Filtered Tags: ");
        console.log(resultsTags);

        this.setState({
          results: filteredResults,
          resultsTags: resultsTags
        });
      }

      else {
        this.setState({
          results: [],
          resultsTags: []
        });
      }
    }, 100);
  }

  handleSearchResult = (i) => {
    const selectedResult = this.state.results[i];
    const selectedTag = this.state.resultsTags[i];
    this.setState({
      selectedResult: selectedResult,
      selectedTag: selectedTag,
      results: [],
      resultsTags: []
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
            resultsTags={this.state.resultsTags}
            results={this.state.results}
            onResultSelect={handleResult}
          />
          <Results 
            tag={this.state.selectedTag} 
            result={this.state.selectedResult} 
          />
        </div>
      </div>
    );
  }
}

export default App;
