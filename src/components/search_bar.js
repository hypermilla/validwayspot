import React, { Component } from "react";
import SearchGrid from './search_grid';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        
        this.state = { 
            value: 'Search for a tag. Ex: school, pool, bus stop...',
            focus: null,
            cursor: -1,
            isResultsActive: ''
        };

        this.handleKeyDown = this.handleKeyDown.bind(this);

        if (this.props.selectedTag !== '') {
            this.setState({ value: this.props.selectedTag });
        }
        else {
            this.setState({isResultsActive: '' });
        } 
    }

    handleKeyDown (event) { 
        let cursor = this.state.cursor; 

        if (!this.props.results) { 
            return null;
        }

        else if (event.keyCode === 38 && cursor >= 0) {
            console.log("Pressed key up");
            console.log(cursor);
            this.setState( prevState => ({ cursor: prevState.cursor - 1 }));
        }
        else if (event.keyCode === 40 && cursor < this.props.results.length - 1) {
            console.log("Pressed key down");
            console.log(cursor);
            this.setState( prevState => ({ cursor: prevState.cursor + 1 }));
        }
        else if (event.keyCode === 13) {
            this.onResultSelect(this.props.results[cursor]);
            this.setState({ cursor: 0 });
        }
    }

    render() {
        return (
          <div className="search-bar">
            <input
              value={this.state.value}
              onChange={event => this.onInputChange(event.target.value)}
              onFocus={event => this.OnEnterFocus()}
              onKeyDown={this.handleKeyDown}
              onBlur={event => this.OnLeaveFocus()}
            />
            <SearchGrid
              isActive={this.state.isResultsActive}
              results={this.props.results}
              resultsTags={this.props.resultsTags}
              onResultSelect={(result, i) => this.onResultSelect(result, i)}
              cursor={this.state.cursor}
            />
          </div>
        );
    }

    onResultSelect (tag, i) {
        console.log("Selected result");
        if (!tag) {
            return null;
        }
        this.props.onResultSelect(i);
        this.setState({ value: tag });
    }

    onInputChange (value) {
        this.setState({
            value,
            isResultsActive: ""
        });
        this.props.onSearchTermChange(value);
    }

    OnEnterFocus () { 
        this.setState({
          value: "",
          cursor: -1,
          isResultsActive: "inactive"
        });
    }

    OnLeaveFocus() {
        this.setState({
            isResultsActive: "inactive"
        });
    }
}

export default SearchBar;
