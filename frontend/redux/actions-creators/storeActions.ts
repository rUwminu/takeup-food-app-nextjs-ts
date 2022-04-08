import { Dispatch } from 'redux'
import { ActionType } from '../constants/storeConstants'

// Action Models
import { Action } from '../actions-models/storeActionModel'

export const addOrderToCart = (data: any) => (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.ADD_ORDER_TO_CART, payload: data })
}

export const incrementOrderQuantity =
  (orderId: string) => (dispatch: Dispatch) => {
    dispatch({ type: ActionType.INCREASE_ORDER_IN_CART, payload: orderId })
  }

export const decrementOrderQuantity =
  (orderId: string) => (dispatch: Dispatch) => {
    dispatch({ type: ActionType.DECREASE_ORDER_IN_CART, payload: orderId })
  }

export const removeOrderInCart = (orderId: string) => (dispatch: Dispatch) => {
  dispatch({ type: ActionType.DELETE_ORDER_IN_CART, payload: orderId })
}
