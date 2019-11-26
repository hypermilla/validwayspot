import React, { Component } from "react";
import SearchGrid from './search_grid';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { value: ''};

        if (this.props.selectedTag != '') {
            this.setState({ value: this.props.selectedTag });
        }
    }


    render() {

        return (
            <div>
               <input
                  value = {this.state.value}
                  onChange={event => this.onInputChange(event.target.value)}
               />
               <SearchGrid 
                    results={this.props.results}
                    onResultSelect={result => this.onResultSelect(result)}
               />
            </div>
        );
    }

    onResultSelect (result) {
        this.props.onResultSelect(result);
        this.setState({ value: result.tag });
    }

    onInputChange (value) {
        this.setState({value});
        this.props.onSearchTermChange(value);
    }
}

export default SearchBar;
