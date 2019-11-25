import React, { Component } from "react";
import SearchGrid from './search_grid';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { value: ''};
    }

    render() {
        return (
            <div className="search-bar">
               <input
                  value = {this.state.value}
                  onChange={event => this.onInputChange(event.target.value)}
               />
             <SearchGrid results={this.props.results} />
            </div>
        );
    }

    onInputChange (value) {
        this.setState({value});
        this.props.onSearchTermChange(value);
    }
}

export default SearchBar;
