import axios from 'axios'

//ACTION TYPES
const ADD_ORDER = 'ADD_ORDER'
const ORDER_PROCESSING = 'ORDER_PROCESSING'
const ORDER_SUCCESS = 'ORDER_SUCCESS'

// call thunk from form;
// pass it the properly formatted object;
// set processing to true;
// confirmation = call axios post with the object;
// set state to confirmation;
// set processing to false;

//ACTION CREATORS:
export const _addOrder = order => {
  return {
    type: ADD_ORDER,
    order
  }
}

export const _orderProcessing = () => {
  return {
    type: ORDER_PROCESSING
  }
}

export const _orderSuccess = () => {
  return {
    type: ORDER_SUCCESS
  }
}

//THUNKS:
export const addOrder = order => {
  return async dispatch => {
    try {
      await dispatch(_orderProcessing())
      const confirmation = (await axios.post('/api/orders', order)).data
      await dispatch(_addOrder(confirmation))
      dispatch(_orderSuccess())
    } catch (err) {
      console.log(err)
    }
  }
}

const initialState = {
  order: {},
  processing: false
}

//TEMPLATE REDUCER
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {...state, order: action.order}
    case ORDER_PROCESSING:
      return {...state, processing: true}
    case ORDER_SUCCESS:
      return {...state, processing: false}
    default:
      return state
  }
}

export default orderReducer
