import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import counterReducer from 'store/counter/reducers'

const rootReducer = (history) => combineReducers({
  count: counterReducer,
  router: connectRouter(history)
})

export default rootReducer
