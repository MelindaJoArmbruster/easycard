import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import templatesReducer from './templatesReducer'
import singleTemplateReducer from './singleTemplateReducer'
import orderReducer from './orderReducer'

const reducer = combineReducers({
  user,
  templatesSlice: templatesReducer,
  singleTemplateSlice: singleTemplateReducer,
  orderSlice: orderReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
