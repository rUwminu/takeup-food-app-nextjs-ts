import { Action } from '../actions-models/storeActionModel'
import { ActionType } from '../constants/storeConstants'

import { StoreState } from '../store'

export const storeReducer: (
  state: StoreState | undefined,
  actions: Action
) => StoreState = (state = { orderList: [], productList: [] }, action) => {
  switch (action.type) {
    default:
      return state
  }
}
