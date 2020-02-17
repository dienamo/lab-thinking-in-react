import React, { Component } from 'react';
import './filter.css'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends Component {

    captureWord = (theletters) => {
        console.log('fromFilterable'  , theletters)
        this.props.startSearch(theletters)
      }
    
    render() {   
    return (
      <div className="filterable">
        <h1>IronStore</h1>
        <SearchBar getTheWord={this.captureWord}/>
        <ProductTable datas = {this.props.products}/>
      </div>
    );
  }
}

export default FilterableProductTable;
