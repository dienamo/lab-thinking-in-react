import React, { Component } from 'react';
import './filter.css'

class ProductRow extends Component {
  render() {
      
    return (
      <div className="row">
            {!this.props.product.stocked ? <td style={{color:'red'}}>{this.props.product.name}</td>
             : <td>{this.props.product.name}</td>}   
             <td>{this.props.product.price}</td>
      </div>
    );
  }
}

export default ProductRow;
