import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { updateUsername } from './actions'

import store from './store'

console.log(store.getState())
store.dispatch(updateUsername('Ray'))
console.log(store.getState())

// console.log(store.getState());
// store.dispatch(decrementCounter(5))
// console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
