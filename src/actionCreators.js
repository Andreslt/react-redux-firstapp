import axios from 'axios';

const loadProducts = () => {
  return async dispatch => {
    const response = await(axios.get('http://localhost:3001/products'));
    dispatch({
      type: "REPLACE_PRODUCTS",
      products: response.data
    })
  };
}

const addToCar = product => {
  return {
    type: 'ADD_TO_CAR',
    product
  }
}

const removeFromCar = product => {
  return {
    type: 'REMOVE_FROM_CAR',
    product
  }
}

export { loadProducts, addToCar, removeFromCar };