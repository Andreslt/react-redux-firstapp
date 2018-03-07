import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state, action) => {
    switch (action.type) {
        case 'REPLACE_PRODUCTS':
            return {
                ...state,
                products: action.products
            }
        case 'ADD_TO_CAR':
            return {
                ...state,
                car: state.car.concat(action.product)
            }
        case 'REMOVE_FROM_CAR':
            return {
                ...state,
                car: state.car.filter(product => product.id !== action.product.id)
            }
        default: return state;
    }
}

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
}

export default createStore(reducer, { car: [], products: [] }, applyMiddleware(logger, thunk));