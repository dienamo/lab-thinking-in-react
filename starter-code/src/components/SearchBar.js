import React, { Component } from 'react';
import './filter.css'

class SearchBar extends Component {

    state = {
        search : ''
    }

    search=(event)=>{
        let keyWord = event.target.value
        this.props.getTheWord(keyWord); 
        this.setState({
            search:keyWord
        })
    }


  render() {
    return (
      <div className="search">
        <p>
        <label><p>Search</p>
        <input type='search' value={this.state.search} onChange={this.search}></input>
        </label>
        </p>
        <label><p>Only show product in stock</p>
        <input type="checkbox"></input>
        </label>
      </div>
    );
  }
}

export default SearchBar;