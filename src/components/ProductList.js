import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { addToCar } from '../actionCreators';
import { connect } from 'react-redux';

const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '220px',
    marginLeft: 10,
    marginRight: 10
  }
};

const ProductList = ({ products, addToCar }) => {
    return (
      <div style={styles.products}>
        {products.map(product =>
          <div className="thumbnail" style={styles.product} key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="caption">
              <h4>{product.name}</h4>
              <p>
                <Button bsStyle="primary" onClick={() => addToCar(product)} role="button" disabled={product.inventory <= 0}>${product.price} <Glyphicon glyph="shopping-cart" /></Button>
              </p>
            </div>
          </div>
        )}
      </div>
    );
}

const mapStateToProps = state =>{
  return{
    products: state.products
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    addToCar(product) {
      dispatch(addToCar(product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
