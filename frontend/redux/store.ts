import thunk from 'redux-thunk'
import { applyMiddleware, createStore, compose } from 'redux'

import reducer from './reducers/index'

import { Product, ProductInCart } from '../global.utils/utils.models/Models'

export interface StoreState {
  orderList: Array<ProductInCart>
  productList: Array<Product>
}

export interface AppState {
  storeInfo: StoreState
}

const initialState: AppState = {
  storeInfo: {
    orderList: [],
    productList: [],
  },
}

// Next js not compatible with this module
// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
//   }
// }

// let composeEnhancers = compose
// if (typeof window !== undefined) {
//   composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// }

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    // I require this only in dev environment
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const store = createStore(reducer, initialState, bindMiddleware([thunk]))

export default store
