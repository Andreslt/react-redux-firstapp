import React, { Component } from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import store from '../store';
import { removeFromCar } from '../actionCreators';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


class ShoppingCart extends Component {
  constructor() {
    super();
    this.removeFromCar = this.removeFromCar.bind(this);

    this.state = {
      cart: []
    }

    store.subscribe(()=>{
      this.setState({
        cart: store.getState().cart
      })
    });

  }

  render() {
    return (
      <Panel header="Shopping Cart">
        <Table fill>
          <tbody>
            {this.state.cart.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td className="text-right">${product.price}</td>
                <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => this.removeFromCar(product)}><Glyphicon glyph="trash" /></Button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: ${this.state.cart.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </Table>

      </Panel>
    )
  }

  removeFromCar(product) {
    store.dispatch(removeFromCar(product));
  }
}

export default ShoppingCart;
