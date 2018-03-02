import { combineReducers } from 'redux'
import counterReducer from './counter'
import userReducer from './user'

const rootReducer = combineReducers({
  // userReducer: userReducer,
  userReducer,
  counterReducer
})

export default rootReducer
