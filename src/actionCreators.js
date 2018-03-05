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

export { addToCar, removeFromCar };