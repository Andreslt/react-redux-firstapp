import React from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import { removeFromCar } from '../actionCreators';
import { connect } from 'react-redux';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}

const ShoppingCart = ({ car, removeFromCar }) => {
    return (
      <Panel header="Shopping Cart">
        <Table fill>
          <tbody>
            {car.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td className="text-right">${product.price}</td>
                <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => removeFromCar(product)}><Glyphicon glyph="trash" /></Button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: ${car.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </Table>

      </Panel>
    )
}

const mapStateToProps = state =>{
  return{
    car: state.car
  }
}

const mapDispatchToProps = dispatch => {
  return{
    removeFromCar(product){
      dispatch(removeFromCar(product));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
