// this is going to store our state
// eg in react this.state = {}

import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

export default store
