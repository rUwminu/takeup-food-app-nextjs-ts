import { ActionType } from '../constants/storeConstants'

interface AddOrderAction {
  type: ActionType.ADD_ORDER_TO_CART
  payload: any
}

interface IncreaseOrderAction {
  type: ActionType.INCREASE_ORDER_IN_CART
  payload: string
}

interface DecreaseOrderAction {
  type: ActionType.DECREASE_ORDER_IN_CART
  payload: string
}

interface DeleteOrderAction {
  type: ActionType.DELETE_ORDER_IN_CART
  payload: string
}

export type Action =
  | AddOrderAction
  | IncreaseOrderAction
  | DecreaseOrderAction
  | DeleteOrderAction
