import React, { Component } from 'react';
import data from './data.json'
import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {

  state={
    productsArray : data
  }

  searchEngine = (theletters) => {
    let filteredList = this.state.productsArray.data.filter(theProduct => {
      return theProduct.name.toLowerCase().indexOf(theletters.toLowerCase()) !== -1;
    })
    console.log('woooooooooooooooo....................',filteredList)
    this.setState({
      productsArray : filteredList
    })
  }

  render() {
    return (
      <div className="App">
        <FilterableProductTable products={ this.state.productsArray } startSearch={this.searchEngine}/>
      </div>
    );
  }
}

export default App;
