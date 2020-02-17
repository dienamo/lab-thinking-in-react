import React, { Component } from 'react';
import './filter.css'
import ProductRow from './ProductRow'

class ProductTable extends Component {
  render() {
    return (
      <div className="table">
        <table className="sport-table">
            <tr>
            <thead>Name</thead>
            <thead>Price</thead>
            </tr>
            <tr>
                {this.props.datas.data.map(product=>{
                    
                    return(
                        <div>
                            <ProductRow product={product}/>
                        </div>
                    )
                })}
            </tr>
        </table>
      </div>
    );
  }
}

export default ProductTable;
