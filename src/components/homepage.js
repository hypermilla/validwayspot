import React from "react";
import Tabletop from "tabletop";
import _ from "lodash";

import SearchBar from "./search_bar";
import Results from "./results";

const SPREADSHEET_KEY = "1EIW3AYx5mwvOp4YGU-lySjkf0jflhYoFd47kK_ahFtI";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      results: [],
      selectedResult: null,
      selectedTag: null,
      term: "",
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
    });
  }


  splitTags(searchResults) {
    let arrayOfTags = new Array();
    for (let i = 0; i < searchResults.length; i++) {
      let separatedTags = searchResults[i].tag.split(", ");
      arrayOfTags.push(separatedTags);
    }
    return arrayOfTags;
  }

  tagSearch(term) {
    setTimeout(() => {
      if (term.length > 0) {
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
            if (isMatch) filteredTags.push(tagsToFilter[j]);
          }
          resultsTags.push(filteredTags);
        }

        this.setState({
          results: filteredResults,
          resultsTags: resultsTags
        });
      } else {
        this.setState({
          results: [],
          resultsTags: []
        });
      }
    }, 100);
  }

  handleSearchResult = i => {
    const selectedResult = this.state.results[i];
    const selectedTag = this.state.resultsTags[i];
    this.setState({
      selectedResult: selectedResult,
      selectedTag: selectedTag,
      results: [],
      resultsTags: []
    });
  };

  render() {
    const tagSearch = _.debounce(term => {
      this.tagSearch(term);
    }, 100);
    const handleResult = result => this.handleSearchResult(result);

    return (
      <div>
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
    );
  }
}
export default HomePage;
